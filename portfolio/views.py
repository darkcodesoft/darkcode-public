from logging import debug
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PageSerializer
from .models import Page

class IndexView(APIView):
    def get(self, request, slug, format=None):
        debug(request)
        page = Page.objects.get(slug=slug, published=True)
        serializer = PageSerializer(page)
        return Response(serializer.data)

