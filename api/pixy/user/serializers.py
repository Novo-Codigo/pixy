"""
Serializers module.

Defines serializers responsible for transforming model instances
to and from primitive data types for API representation and validation.
"""

import re
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import PixyUser

class PixyUserSerializer(serializers.ModelSerializer):
    """"Serializer for the User model."""

    # pylint: disable=too-few-public-methods

    class Meta:
        """
        Configuration for PixyUserSerializer

        Defines ordering and read-only behavior.
        """
        model = PixyUser
        fields = [
            "id",
            "email",
            "name",
            "last_name",
            "password",
            "is_staff",
            "is_active",
            "date_joined",
            "updated_at"
        ]
        read_only_fields = [
            "id",
            "is_staff",
            "is_active",
            "date_joined"
        ]
        extra_kwargs = {
            "password": {
                "write_only": True,
            }
        }

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = PixyUser(**validated_data)
        user.set_password(password)
        user.save()

        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance

    def validate_name(self, value):
        """
        Validates user's name.

        Args:
            - name (str): User's name
        
        Requirements:
            - Minimal of 3 characters.
            - Only Letters.
        """
        if len(value) <= 2:
            raise serializers.ValidationError("Name must have at least 3 characters.")

        if not re.match(r'^[A-Za-zÀ-ÿ ]+$', value):
            raise serializers.ValidationError("Name must have only letters.")

        return value

    def validate_last_name(self, value):
        """
        Validates user's last name.

        Args:
            - last_name (str): User's last name.
        
        Requirements:
            - Minimal of 3 characters.
            - Only Letters.
        """
        if len(value) <= 2:
            raise serializers.ValidationError("Last name must have at least 3 characters.")

        if not re.match(r'^[A-Za-zÀ-ÿ ]+$', value):
            raise serializers.ValidationError("Last name must have only letters.")

        return value

    def validate_password(self, value):
        """
        Validates user's password.

        Args:
            - password (str): User's password.
        
        Requirements:
            - Minimal of 6 characters.
        """
        if len(value) < 6:
            raise serializers.ValidationError("Password must be at least 6 characters long")

        return value

    def validate_email(self, value):
        """
        Validates user's e-mail.

        Args:
            - email (str): User's e-mail.
        
        Requirements:
            - Must have @ and '.'.
        """
        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
            raise serializers.ValidationError("E-mail must have '@' e '.'")

        return value

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Override for Rest Framework's Token Obtain Pair Serializer
    
    Besides custom data (access and refresh), this custom token obtain pair serializer
    retrieves user's name and last name.
    """

    # pylint: disable=abstract-method

    def validate(self, attrs):
        """
        Add the user's first and last name to the serialized response.

        Args:
            attrs (dict): The incoming validated attributes from the login request.

        Returns:
            dict: Attributes including standard JWT fields and
              the user's 'name' and 'last_name'.
        """

        data = super().validate(attrs)
        data['name'] = self.user.name
        data['last_name'] = self.user.last_name

        return data
