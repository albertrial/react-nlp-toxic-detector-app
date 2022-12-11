import os

import torch
from transformers import DistilBertTokenizerFast

from .models.multi_depth_distilbert import MultiDepthDistilBertModel
from .utils.preds2spans import preds2spans


def compute_ensemble_predictions(predictions):
    n_models = len(predictions)
    n_sentences = len(predictions[0])
    ensemble_predictions = []
    for i in range(n_sentences):
        counter = {}
        p = set()
        for j in range(n_models):
            for e in predictions[j][i]:
                counter[e] = counter.get(e, 0) + 1
                if counter[e] / n_models >= 0.5:
                    p.add(e)
        ensemble_predictions.append(p)
    return ensemble_predictions


def tag(text, lang):
    # ########## P R E P A R E   D A T A ##########
    tokenizer = DistilBertTokenizerFast.from_pretrained('distilbert-base-uncased')
    # Pad to 512. All sentences in the dataset have a lower number of tokens.
    tokenized = tokenizer(text, padding='max_length', max_length=512, return_attention_mask=True,
                          return_special_tokens_mask=True,
                          return_offsets_mapping=True, return_token_type_ids=False)

    token_ids = torch.tensor(tokenized['input_ids'], dtype=torch.long).unsqueeze(0)
    offsets = torch.tensor(tokenized['offset_mapping'], dtype=torch.long).unsqueeze(0)
    att_masks = torch.tensor(tokenized['attention_mask'], dtype=torch.long).unsqueeze(0)
    special_masks = torch.tensor(tokenized['special_tokens_mask'], dtype=torch.long).unsqueeze(0)
    special_masks = special_masks.logical_not()

    # ########## P R E P A R E   M O D E L (S) ##########
    weights_path = os.path.join('models', lang)

    checkpoint_names = []
    for file in os.listdir(weights_path):
        if file.endswith('.ckpt'):
            checkpoint_names.append(os.path.join(weights_path, file))

    # ########## O B T A I N   P R E D I C T I O N S ##########
    predicted_spans = []
    for i, checkpoint in enumerate(checkpoint_names):
        model = MultiDepthDistilBertModel.load_from_checkpoint(checkpoint_path=checkpoint)

        logits = model(token_ids, att_masks)
        preds = torch.argmax(logits, -1)
        predicted_spans.append(preds2spans(preds, special_masks, offsets))

    if len(checkpoint_names) == 1:
        predicted_spans = predicted_spans[0]
    else:
        predicted_spans = compute_ensemble_predictions(predicted_spans)

    # ########## G E N E R A T E   O U T P U T ##########
    predicted_spans = predicted_spans[0]

    return predicted_spans