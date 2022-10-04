from os import name
from django.conf.urls import url
from django.contrib import admin
from django.urls import path

from django.urls import path

from .api_views import PostText, GetModel, detectText

urlpatterns = [
    path("toxic_detection/", detectText, name="toxic_detection"),
    path("models/", GetModel.as_view(), name="models")
]