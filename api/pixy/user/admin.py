"""
Admin panel config file

Modifies user's CRUD design
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import PixyUserChangeForm, PixyUserCreationForm
from .models import PixyUser

class PixyUserAdmin(UserAdmin): # pylint: disable=missing-class-docstring
    add_form = PixyUserCreationForm
    form = PixyUserChangeForm
    model = PixyUser
    list_display = (
        "email",
        "name",
        "last_name",
        "is_staff",
        "is_active",
        "date_joined",
        "updated_at"
    )
    ordering = (
        "email",
    )
    readonly_fields = (
        "date_joined",
    )


admin.site.register(
    PixyUser,
    PixyUserAdmin
)
