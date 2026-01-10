"""Test file for user model."""

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from .models import PixyUser

class JWTAuthenticationTest(APITestCase): # pylint: disable=missing-class-docstring
    def setUp(self):
        """Base configuration function."""
        self.client = APIClient()
        self.user = PixyUser.objects.create_user(
            email="test@example.com",
            password="testpass123",
            name="Tester",
            last_name="Silva",
        )

    def test_obtain_token_with_valid_credentials(self):
        """Tests wether a user can login."""
        url = reverse('token_obtain_pair')
        payload = {
            "email": "test@example.com",
            "password": "testpass123"
        }
        res = self.client.post(
            url,
            payload,
            format='json'
        )

        self.assertEqual(
            res.status_code,
            status.HTTP_200_OK
        )
        self.assertIn(
            'access',
            res.data
        )
        self.assertIn(
            'refresh',
            res.data
        )

    def test_obtain_token_with_invalid_credentials(self):
        """Tests if user can't login without correct credentials."""
        url = reverse('token_obtain_pair')
        payload = {
            "email": "notexist@example.com",
            "password": "ieieieie"
        }
        res = self.client.post(
            url,
            payload,
            format='json'
        )

        self.assertEqual(
            res.status_code,
            status.HTTP_401_UNAUTHORIZED
        )
        self.assertNotIn(
            'access',
            res.data
        )
        self.assertNotIn(
            'refresh',
            res.data
        )

    def test_refresh_token_with_valid_refresh(self):
        """Tests wether user can refresh token."""
        url = reverse('token_obtain_pair')
        payload = {
            "email": "test@example.com",
            "password": "testpass123"
        }
        res = self.client.post(
            url,
            payload,
            format='json'
        )

        self.assertEqual(
            res.status_code,
            status.HTTP_200_OK
        )
        self.assertIn(
            'access',
            res.data
        )
        self.assertIn(
            'refresh',
            res.data
        )

        refresh_token = res.data['refresh']

        refresh_url = reverse('token_refresh')
        refresh_payload = {
            "refresh": refresh_token
        }
        res = self.client.post(
            refresh_url,
            refresh_payload,
            format='json'
        )

        self.assertEqual(
            res.status_code,
            status.HTTP_200_OK
        )
        self.assertIn(
            'access',
            res.data
        )

    def test_refresh_token_with_invalid_refresh(self):
        """User shouldn't be able to refresh it's token without a correct refresh token."""
        refresh_token = "falseRefreshToken"

        refresh_url = reverse('token_refresh')
        refresh_payload = {
            "refresh": refresh_token
        }
        res = self.client.post(
            refresh_url,
            refresh_payload,
            format='json'
        )

        self.assertEqual(
            res.status_code,
            status.HTTP_401_UNAUTHORIZED
        )
        self.assertNotIn(
            'access',
            res.data
        )
