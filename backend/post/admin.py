from django.contrib import admin
from django.contrib.admin import ModelAdmin

from post.models import Post


class PostAdmin(ModelAdmin):
    list_display = ["__str__"]


admin.site.register(Post, PostAdmin)
