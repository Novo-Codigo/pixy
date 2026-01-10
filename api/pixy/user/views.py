"""Configuration file for user views"""

from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import PixyUser
from .serializers import PixyUserSerializer

class PixyUserViewSet(viewsets.ModelViewSet): # pylint: disable=missing-class-docstring,too-many-ancestors
    query = PixyUser.objects.all()
    serializer_class = PixyUserSerializer

    def get_permissions(self):
        permission_classes = [AllowAny] if self.action == "create" else [IsAuthenticated]

        return [permission() for permission in permission_classes]
