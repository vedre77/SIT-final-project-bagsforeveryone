from django.urls import path

from product_review.views import ListCreateRestaurantsReviewsView, CreateProductReviewView, ListReviewProductView

urlpatterns = [
    path('list/', ListCreateRestaurantsReviewsView.as_view()),
    path('new/<int:product_id>/', CreateProductReviewView.as_view()),
    path('product/<int:product_id>/', ListReviewProductView.as_view()),
]
