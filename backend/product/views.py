from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response

from product.models import Product
from product.serializer import ProductSerializer, CreateProductSerializer, CategorySerializer

User = get_user_model()


class ListCreateProductView(ListCreateAPIView):
    serializer_class = CreateProductSerializer
    queryset = Product.objects.all()


class ListFilterProductByCategoryView(GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'category'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        queryset = queryset.filter(category=self.kwargs['category'])
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


class ListFilterProductView(ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        params = self.request.query_params.get("search")
        queryset = Product.objects.filter(Q(name__icontains=params))

        return queryset


class RetrieveUpdateDeleteProductView(RetrieveUpdateDestroyAPIView):
    serializer_class = CreateProductSerializer
    queryset = Product.objects.all()
    lookup_url_kwarg = 'id'

    permission_classes = []


class ListCategoryView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Product.objects.all()


