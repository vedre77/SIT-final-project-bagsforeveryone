from django.contrib.auth import get_user_model
from django.db import models

from post.models import Post

User = get_user_model()


class Comment(models.Model):
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    commenter = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='comment')
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name="comment")
