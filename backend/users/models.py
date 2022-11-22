from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):

    def users_image_directory_path(instance, filename):
        return f'users/{instance.id}/{filename}'
    # REQUIRED_FIELDS = ["username"]
    # asking for email in authentication. (Instead of username)
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['password', "username"]

    # For gender choice
    MALE = "M"
    FEMALE = "F"
    OTHER = "X"

    GENDER_CHOICES = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other"),
    ]
    username = models.TextField(max_length=50, blank=True)
    email = models.EmailField(unique=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    first_name = models.TextField(max_length=50, blank=True)
    last_name = models.TextField(max_length=50, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, blank=True)
    street = models.TextField(max_length=50, blank=True)
    street_number = models.IntegerField(blank=True, null=True)
    zip = models.IntegerField(blank=True, null=True)
    city = models.TextField(max_length=50, blank=True)
    country = models.TextField(max_length=50, blank=True)
    profile_picture = models.ImageField(blank=True, upload_to=users_image_directory_path)
    password = models.CharField(max_length=100, blank=True)
    code = models.CharField(max_length=100, blank=True)

