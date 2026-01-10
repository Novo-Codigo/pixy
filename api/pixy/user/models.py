from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import PixyUserManager

class PixyUser(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(_("Name"), max_length=15, blank=False, null=True)
    last_name = models.CharField(_("Last Name"), max_length=25, blank=False, null=True)
    email = models.EmailField(_("E-mail"), max_length=254, unique=True, blank=False, null=True)
    is_active = models.BooleanField(_("Is Active"), blank=False, null=False, default=True)
    is_staff = models.BooleanField(_("Is Staff"), blank=False, null=False, default=False)
    date_joined = models.DateTimeField(_("Date Joined"), auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(_("Last Update Date"), auto_now=True, auto_now_add=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        'name',
        'surname'
    ]

    objects = PixyUserManager()

    def __str__(self):
        return self.email
