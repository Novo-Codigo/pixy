"""Configuration file for user views"""
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import PixyUser
from .serializers import PixyUserSerializer, DeleteAccountSerializer

class PixyUserViewSet(viewsets.ModelViewSet): # pylint: disable=missing-class-docstring,too-many-ancestors
    queryset = PixyUser.objects.all()
    serializer_class = PixyUserSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]

        return super().get_permissions()

    @action(
        detail=False,
        methods=['get', 'patch', 'delete'],
        permission_classes=[IsAuthenticated]
    )
    def me(self, request):
        """
        Endpoint for retrieving user data.

        :params:
            - PATCH: User data to be updated.
            - DELETE: Current user password.
        :return: 
            - GET: All user data.
            - PATCH: All user data updated.
            - DELETE: Nothing.
        :rtype: Response
        """
        user = request.user

        match(request.method):
            case "PATCH":
                serializer = self.get_serializer(
                    user,
                    data=request.data,
                    partial=True,
                )
                serializer.is_valid(
                    raise_exception=True,
                )
                serializer.save()

                return Response(
                    serializer.data,
                    status=status.HTTP_200_OK,
                )
            case "DELETE":
                password_serializer = DeleteAccountSerializer(data=request.data)

                if not password_serializer.is_valid():
                    return Response(
                        password_serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                password = password_serializer.validated_data["password"]

                if not user.check_password(password):
                    return Response(
                        {"password": ["Incorrect Password"]},
                        status=status.HTTP_400_BAD_REQUEST
                    )

                user.delete()

                return Response(
                    status=status.HTTP_204_NO_CONTENT
                )
            case _:
                serializer = self.get_serializer(
                    request.user,
                )

                return Response(
                    serializer.data,
                    status=status.HTTP_200_OK,
                )
