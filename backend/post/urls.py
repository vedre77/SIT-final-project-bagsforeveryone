from django.urls import path

from post.views import ListCreatePostView, RetrieveUpdateDestroyPostView, ListOwnPostView, ListUserPostView

urlpatterns = [
    path("", ListCreatePostView.as_view()),
    path("<int:id>/", RetrieveUpdateDestroyPostView.as_view()),
    path("me/", ListOwnPostView.as_view()),
    path("user/<int:userID>/", ListUserPostView.as_view()),
]

