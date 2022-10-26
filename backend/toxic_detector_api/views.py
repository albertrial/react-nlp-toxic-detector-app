from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import ToxicDetector
from .serializers import *

@api_view(['POST'])
def detect_text(request):
    text = request.data.get('text')

    return Response("RESPONSE-"+text+"-RESPONSE")