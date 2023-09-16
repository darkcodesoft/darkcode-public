import datetime

from django.db import models
from django.utils import timezone
from django.utils.text import slugify

# Component model definition.
class Component(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(max_length=200, blank=True)
    title = models.CharField(max_length=100, blank=True)
    sub_title = models.CharField(max_length=100, blank=True)
    last_modified = models.DateTimeField(null=True, blank=True)
    published = models.BooleanField(default=True) #type: ignore
    slug = models.SlugField(editable=False)

    # overrite base model save method to set its last modified date.
    def save(self, *args, **kwargs):
        self.last_modified = timezone.now()
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    # displays component's name.
    def __str__(self):
        return self.name


# Home Component
class HomeComponent(Component):
    welcome_message = models.CharField(max_length=100, blank=True)


# About component model definition.
class AboutComponent(Component):
    image = models.TextField(blank=True) # expects inline svg
    overview = models.TextField(max_length=400, blank=True)


# Work component Project model definition.
class Project(models.Model):
    image = models.ImageField(blank=True, null=True)
    ios_app_url = models.URLField(blank=True)
    name = models.CharField(max_length=100, blank=True)
    overview = models.TextField(max_length=400, blank=True)
    published = models.BooleanField(default=True) #type: ignore
    web_app_url = models.URLField(blank=True)
    weight = models.IntegerField(default=0) #type: ignore
    year = models.IntegerField(blank=True, default=datetime.date.today().year) #type: ignore

    def __str__(self):
        return self.name


# Work component model definition.
class WorkComponent(Component):
    # django admin form related fields
    project_1 = models.ForeignKey(Project, related_name="item_1", on_delete=models.CASCADE, blank=True, null=True)
    project_2 = models.ForeignKey(Project, related_name="item_2", on_delete=models.CASCADE, blank=True, null=True)
    project_3 = models.ForeignKey(Project, related_name="item_3", on_delete=models.CASCADE, blank=True, null=True)
    project_4 = models.ForeignKey(Project, related_name="item_4", on_delete=models.CASCADE, blank=True, null=True)


# Contact component model definition.
class ContactComponent(Component):
    bitbucket = models.URLField(blank=True)
    email = models.EmailField(blank=True)
    github = models.URLField(blank=True)
    linked_in = models.URLField(blank=True)


# Page component model
class Page(Component):
    # django admin form related fields
    component_1 = models.ForeignKey(HomeComponent, on_delete=models.CASCADE, blank=True, null=True)
    component_2 = models.ForeignKey(AboutComponent, on_delete=models.CASCADE, blank=True, null=True)
    component_3 = models.ForeignKey(WorkComponent, on_delete=models.CASCADE, blank=True, null=True)
    component_4 = models.ForeignKey(ContactComponent, on_delete=models.CASCADE, blank=True, null=True)
    #
    credit = models.CharField(max_length=200, blank=True)
    copyright = models.CharField(max_length=200, blank=True)

