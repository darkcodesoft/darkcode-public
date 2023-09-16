from django.contrib import admin

from . import models

admin.site.register(models.Page)
admin.site.register(models.Project)
admin.site.register(models.HomeComponent)
admin.site.register(models.AboutComponent)
admin.site.register(models.WorkComponent)
admin.site.register(models.ContactComponent)
