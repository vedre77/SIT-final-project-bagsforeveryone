from django.contrib.auth import get_user_model
from rest_framework import serializers

from comment.serializer import CommentSerializer, CreateCommentSerializer
from product_review.models import ProductReview
from users.serializers import UserSerializer

User = get_user_model()


class ProductReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    comments = CommentSerializer(many=True)

    class Meta:
        model = ProductReview
        fields = "__all__"


class CreateProductReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    product = serializers.SlugRelatedField(read_only=True, slug_field='name')
    comments = CommentSerializer(many=True, read_only=True)


    class Meta:
        model = ProductReview
        fields = "__all__"

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['comments'] = CommentsSerializer()
    #     return representation

