from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import ToxicDetector
from .serializers import *
from .toxic_detector.tagger import tag

@api_view(['POST'])
def detect_text(request):
    text = request.data.get('text')
    tagged_text = tag(text, 'en')

    return Response(tagged_text)