"""Forms configuration for project's custom user."""

from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import PixyUser


class PixyUserCreationForm(UserCreationForm): # pylint: disable=too-many-ancestors
    """Form for user creation."""
    class Meta: # pylint: disable=too-few-public-methods
        """Configuration for PixyUserCreationForm."""
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
    """Form for user update."""
    class Meta: # pylint: disable=too-few-public-methods
        """Configuration for PixyUserChangeForm."""
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
