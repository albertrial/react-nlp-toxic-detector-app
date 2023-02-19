# BleepTox
## What is Bleeptox?
Bleeptox is an AI system that detects toxic characters in text. Online conversations have become key to communicate with our family, friends and job mates, or socialize through social networks, streaming chats or games. Being able to moderate all this digital content is crucial in order to promote healthy online conversations and discussions.

Based on Deep Learning, it consists of a multi-depth DistilBERT model, a fast and light Transformer which uses embeddings from different layers. Trained with a dataset containing lots of annotated posts and comments.

### Capabilities
- AI allows us to be one step ahead of naïve toxic detectors. Our system not only focuses on words but takes into account all context. This allows us to detect subjectivity, irony and toxic expressions formed by multiple words that may not be toxic individually.
- Able to detect those words that have been written in an ingenious way to avoid simple and naïve techniques (e.g. $tup1d, 1d1ot, etc.).
- Able to work in Near Real Time (NRT), which is crucial for almost all applications that involve online conversations.

### Limitations
- Our solution is still under development and may occasionally produce incorrect or biased detections.
- As of now it only supports English, although we want to expand it for other languages.

## Installation

### Prerequisites
Before installing the app, you'll need to have the following installed on your system:
- Node.js (v10 or higher)
- Python (v3.6 or higher)
- pip

### Instructions
1. Clone this repository to your local machine:
```
git clone https://github.com/albertrial/react-nlp-toxic-detector-app.git
```
#### Install frontend dependencies
2. Navigate to the app directory:
```
cd react-nlp-toxic-detector-app/app/
```
3. Install the Node.js dependencies:
```
npm install
```
#### Install backend dependencies
4. Navigate to the backend project directory:
```
cd react-nlp-toxic-detector-app/backend/
```
5. Create folders `models/en/` and place there the torch weights. Weights can be downloaded in the following [link][weights_url]. You can either download our standalone best model inside the `best` folder, or download the checkpoints inside the `ensemble` folder to constitute an ensemble and be more accurate.

6. Create and activate a virtual environment:
```
python -m venv env
source env/bin/activate # for Unix-based systems
env\Scripts\activate # for Windows
```
7. Install the Python dependencies:
```
pip install -r requirements.txt
```

## Run
### Run React app
1. Navigate to the app directory:
```
cd react-nlp-toxic-detector-app/app/
```
2. Run the app
```
npm start
```
The BleepTox app will open at http://localhost:3000/
### Run Django backend API
1. Open another terminal and navigate to the backend directory:
```
cd react-nlp-toxic-detector-app/backend/
```
2. Activate the virtual environment:
```
source env/bin/activate # for Unix-based systems
env\Scripts\activate # for Windows
```
3. Run Django API:
```
python manage.py runserver
```

[weights_url]: https://www.dropbox.com/sh/92xtl13paxmwk1a/AACqeiYbhq7xCgHTOYjVYITca?dl=0

