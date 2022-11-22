from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, ListCreateAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from comment.models import Comment
from comment.permissions import IsAuthor, ReadOnly
from comment.serializer import CommentSerializer, CreateCommentSerializer

User = get_user_model()


class ListCommentView(ListAPIView):
    permission_classes = []
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class CreateCommentView(CreateAPIView):
    serializer_class = CreateCommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'post_id'

    def perform_create(self, serializer):
        serializer.save(post_id=self.kwargs['post_id'], commenter=self.request.user)
#asd



class ListCommentUserView(ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_url_kwarg = 'user_id'

    def get_queryset(self, **kwargs):
        queryset = Comment.objects.filter(commenter_id=self.kwargs['user_id'])
        return queryset


class RetrieveUpdateDeleteCommentView(RetrieveUpdateDestroyAPIView):
    serializer_class = CreateCommentSerializer
    queryset = Comment.objects.all()
    permission_classes = [IsAuthor | IsAdminUser | ReadOnly]
    lookup_url_kwarg = 'comment_id'
