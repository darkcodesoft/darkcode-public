from rest_framework import serializers
from . import models

class HomeComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.HomeComponent
        fields = "__all__"


class AboutComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AboutComponent
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = "__all__"


class WorkComponentSerializer(serializers.ModelSerializer):
    # django admin form mapping.
    project_1 = ProjectSerializer(read_only=True)
    project_2 = ProjectSerializer(read_only=True)
    project_3 = ProjectSerializer(read_only=True)
    project_4 = ProjectSerializer(read_only=True)

    class Meta:
        model = models.WorkComponent
        fields = "__all__"


class ContactComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContactComponent
        fields = "__all__"


class PageSerializer(serializers.ModelSerializer):
    # django admin form mapping.
    component_1 = HomeComponentSerializer(read_only=True)
    component_2 = AboutComponentSerializer(read_only=True)
    component_3 = WorkComponentSerializer(read_only=True)
    component_4 = ContactComponentSerializer(read_only=True)

    class Meta:
        model = models.Page
        fields = "__all__"


