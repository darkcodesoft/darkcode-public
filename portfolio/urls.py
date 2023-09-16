from django.urls import path

from . import views

urlpatterns = [
    path("api/page/<str:slug>/", views.IndexView.as_view(), name="index"),
]
