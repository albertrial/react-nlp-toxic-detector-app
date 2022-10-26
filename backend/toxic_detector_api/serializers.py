from rest_framework import serializers
from .models import ToxicDetector

class ToxicDetectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToxicDetector
        fields = ('id' ,'text', 'lang', 'date')