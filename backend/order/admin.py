from django.contrib import admin
from django.contrib.admin import ModelAdmin

from order.models import Order


class OrderAdmin(ModelAdmin):
    list_display = ["__str__"]


admin.site.register(Order, OrderAdmin)
