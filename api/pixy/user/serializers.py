import re
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import *

class PixyUserSerializer(serializers.ModelSerializer):
    class Meta:
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
        if len(value) <= 2:
            raise serializers.ValidationError("Name must have at least 3 characters.")

        if not re.match(r'^[A-Za-zÀ-ÿ ]+$', value):
            raise serializers.ValidationError("Name must have only letters.")

        return value

    def validate_last_name(self, value):
        if len(value) <= 2:
            raise serializers.ValidationError("Last name must have at least 3 characters.")

        if not re.match(r'^[A-Za-zÀ-ÿ ]+$', value):
            raise serializers.ValidationError("Last name must have only letters.")

        return value

    def validate_password(self, value):
        if len(value) < 6:
            raise serializers.ValidationError("Password must be at least 6 characters long")

        return value

    def validate_email(self, value):
        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
            raise serializers.ValidationError("E-mail must have '@' e '.'")
        
        return value

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['name'] = self.user.name
        data['last_name'] = self.user.last_name

        return data