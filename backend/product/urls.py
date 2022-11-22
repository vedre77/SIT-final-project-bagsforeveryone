from django.urls import path

from product.views import ListCreateProductView, ListFilterProductView, RetrieveUpdateDeleteProductView, \
    ListFilterProductByCategoryView, ListCategoryView

urlpatterns = [
    path('', ListCreateProductView.as_view()),
    path('new/', ListCreateProductView.as_view()),
    path('category/<str:category>/', ListFilterProductByCategoryView.as_view()),
    path('filter/', ListFilterProductView.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteProductView.as_view()),
    path('category/list/', ListCategoryView.as_view()),
]
