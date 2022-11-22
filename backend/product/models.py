from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


class Product(models.Model):
    SHOPPER = "SH"
    POUCH = "PO"
    BACKPACK = "BA"
    BELLYBAG = "BE"
    DONATION = "DO"

    CATEGORY_CHOICES = [
        (SHOPPER, "shopper"),
        (POUCH, "pouch"),
        (BACKPACK, "backpack"),
        (BELLYBAG, "bellybag"),
        (DONATION, "donation"),
    ]
    def product_image_directory_path(instance, filename):
        return f'product/{instance.id}/{filename}'

    def product_sub_image_1_path(instance, filename):
        return f'product/{instance.id}/sub1/{filename}'

    def product_sub_image_2_path(instance, filename):
        return f'product/{instance.id}/sub2/{filename}'

    def product_sub_image_3_path(instance, filename):
        return f'product/{instance.id}/sub3/{filename}'

    name = models.CharField(max_length=250, unique=True)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    description = models.CharField(max_length=500)
    material = models.CharField(max_length=250, blank=True)
    dimensions = models.CharField(max_length=250, blank=True)
    stock = models.IntegerField(null=True)
    price = models.IntegerField(null=True)
    image = models.ImageField(blank=True, upload_to=product_image_directory_path)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    sub_image_1 = models.ImageField(blank=True, upload_to=product_sub_image_1_path)
    sub_image_2 = models.ImageField(blank=True, upload_to=product_sub_image_2_path)
    sub_image_3 = models.ImageField(blank=True, upload_to=product_sub_image_3_path)
    stripe_price = models.CharField(max_length=75, blank=True)
