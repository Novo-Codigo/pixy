from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import PixyUser


class PixyUserCreationForm(UserCreationForm):
    class Meta:
        model = PixyUser
        fields = ("email", "name", "last_name")
        widgets = {
            "email": forms.EmailInput(attrs = {
                "placeholder": "youremail@example.com",
            }),
        }
        field_classes = {
            "email": forms.EmailField,
        }


class PixyUserChangeForm(UserChangeForm):
    class Meta:
        model = PixyUser
        fields = ("email", "name", "last_name")
        widgets = {
            "email": forms.EmailInput(attrs = {
                "placeholder": "youremail@example.com",
            }),
        }
        field_classes = {
            "email": forms.EmailField,
        }
