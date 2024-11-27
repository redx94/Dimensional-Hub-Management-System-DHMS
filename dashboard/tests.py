from django.test import TestCase
from django.urls import reverse

from dashboard.views import index

requests import Client

class DashboardTestCase(TestCase):

    def test_index_response(self):
        client = Client()
        response = client.get(reverse('index'))
        assert response.status_code == 200
