from django.contrib.auth import get_user_model
from django.db import models
from product.models import Product

User = get_user_model()


class ProductReview(models.Model):
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    reviewer = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='reviews')
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.PROTECT, blank=True)


    def save(self, *args, **kwargs):
        super(ProductReview, self).save(*args, **kwargs)
        self.product.update_review_fields()
