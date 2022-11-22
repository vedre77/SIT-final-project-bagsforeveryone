from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, \
    GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response

from product_review.models import ProductReview
from product_review.permissions import ReadOnly, IsAuthor
from product_review.serializer import ProductReviewSerializer, CreateProductReviewSerializer

User = get_user_model()


class ListCreateRestaurantsReviewsView(ListCreateAPIView):
    serializer_class = CreateProductReviewSerializer
    queryset = ProductReview.objects.all()


    def perform_create(self, serializer):
        serializer.save(reviewer=self.request.user)


class CreateProductReviewView(CreateAPIView):
    serializer_class = CreateProductReviewSerializer
    queryset = ProductReview.objects.all()
    lookup_url_kwarg = 'product_id'

    def perform_create(self, serializer):
        serializer.save(product_id=self.kwargs['product_id'])


class ListReviewProductView(ListAPIView):
    serializer_class = ProductReviewSerializer
    lookup_url_kwarg = 'product_id'

    def get_queryset(self, **kwargs):
        queryset = ProductReview.objects.filter(product_id=self.kwargs['product_id'])
        return queryset


