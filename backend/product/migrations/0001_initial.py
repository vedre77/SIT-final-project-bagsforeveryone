# Generated by Django 4.1.1 on 2022-11-16 09:02

from django.db import migrations, models
import product.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, unique=True)),
                ('category', models.CharField(choices=[('SH', 'shopper'), ('PO', 'pouch'), ('BA', 'backpack'), ('BE', 'bellybag'), ('DO', 'donation')], max_length=10)),
                ('description', models.CharField(max_length=500)),
                ('material', models.CharField(blank=True, max_length=250)),
                ('dimensions', models.CharField(blank=True, max_length=250)),
                ('stock', models.IntegerField(null=True)),
                ('price', models.IntegerField(null=True)),
                ('image', models.ImageField(blank=True, upload_to=product.models.Product.product_image_directory_path)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('sub_image_1', models.ImageField(blank=True, upload_to=product.models.Product.product_sub_image_1_path)),
                ('sub_image_2', models.ImageField(blank=True, upload_to=product.models.Product.product_sub_image_2_path)),
                ('sub_image_3', models.ImageField(blank=True, upload_to=product.models.Product.product_sub_image_3_path)),
                ('stripe_price', models.CharField(blank=True, max_length=75)),
            ],
        ),
    ]
