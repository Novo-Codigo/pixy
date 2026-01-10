"""Urls configuration file for user related endpoints."""

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import PixyUserViewSet

router = DefaultRouter()
router.register(r'', PixyUserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]
