from django.conf.urls import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("toxic_detection/", include("toxic_detection.urls"))
]