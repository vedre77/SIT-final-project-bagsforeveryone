from django.urls import path

from order.views import ListCreateOrderView, RetrieveUpdateDestroyOrderView

urlpatterns = [
    path('', ListCreateOrderView.as_view()),
    # path('new/', ListCreateProductView.as_view()),
    # path('category/<str:category>/', ListFilterProductByCategoryView.as_view()),
    # path('filter/', ListFilterProductView.as_view()),
     path('<int:id>/', RetrieveUpdateDestroyOrderView.as_view())
    # path('category/list/', ListCategoryView.as_view()),
]