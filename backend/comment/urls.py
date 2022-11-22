from django.urls import path

from comment.views import ListCommentView, ListCommentUserView, CreateCommentView, RetrieveUpdateDeleteCommentView

urlpatterns = [
    path('list/', ListCommentView.as_view()),
    path('user/<int:user_id>/', ListCommentUserView.as_view()),
    path('new/<int:post_id>/', CreateCommentView.as_view()),
    path('id/<int:comment_id>/', RetrieveUpdateDeleteCommentView.as_view()),
]
