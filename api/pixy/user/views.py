from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import *
from .serializers import *

class PixyUserViewSet(viewsets.ModelViewSet):
    query = PixyUser.objects.all()
    serializer_class = PixyUserSerializer

    def get_permissions(self):
        permission_classes = [AllowAny] if self.action == "create" else [IsAuthenticated]

        return [permission() for permission in permission_classes]
