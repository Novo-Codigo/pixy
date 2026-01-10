from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from .models import *

class JWTAuthenticationTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = PixyUser.objects.create_user(
            email="test@example.com",
            password="testpass123",
            name="Tester",
            last_name="Silva",
        )

    def test_obtain_token_with_valid_credentials(self):
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
        pass

    def test_refresh_token_with_valid_refresh(self):
        pass

    def test_refresh_token_with_invalid_refresh(self):
        pass