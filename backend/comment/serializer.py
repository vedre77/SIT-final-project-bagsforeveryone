from django.contrib.auth import get_user_model
from rest_framework import serializers
from comment.models import Comment
from users.serializers import UserSerializer

User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['commenter'] = UserSerializer(instance.commenter, many=False).data
        return representation


class CreateCommentSerializer(serializers.ModelSerializer):
    commenter = serializers.SlugRelatedField(read_only=True, slug_field='id')
    post = serializers.SlugRelatedField(read_only=True, slug_field='id')

    class Meta:
        model = Comment
        fields = "__all__"
