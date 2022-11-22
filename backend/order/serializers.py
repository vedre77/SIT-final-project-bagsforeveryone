# from django.contrib.auth import get_user_model
from rest_framework import serializers

from order.models import Order
from users.serializers import UserSerializer

# User = get_user_model()


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        return representation


class NewOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        exclude = ["status"]


class ChangeOrderStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ["status"]
