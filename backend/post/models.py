from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def post_directory_path(instance, filename):
    return f"post/{instance.id}/{filename}"


class Post(models.Model):
    title = models.CharField(max_length=200, blank=True)
    content = models.TextField(max_length=1500, blank=True)
    image = models.ImageField(blank=True, upload_to=post_directory_path)
    author = models.ForeignKey(User, related_name='post', on_delete=models.PROTECT, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'ID {self.pk}: {self.title}'

    class Meta:
        # can be ordered here or directly in the view
        ordering = ['-created']

