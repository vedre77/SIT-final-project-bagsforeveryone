from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response
from django.core.mail import send_mail
# from rest_framework.permissions import IsAuthenticated

from order.models import Order
from product.models import Product
from order.serializers import OrderSerializer, NewOrderSerializer, ChangeOrderStatusSerializer


class ListCreateOrderView(ListCreateAPIView):
    """
        get:
        Get a List of all orders.

        Get a List of all orders made by anyone.

        post:
        Create a new order.

        Create a new order. The current User will be set as buyer.
        """


    def get_serializer_class(self):
        if self.request.method == 'POST':
            return OrderSerializer
        return OrderSerializer

    def get_queryset(self):
        # can be ordered here or in a Meta Class in the model
        return Order.objects.order_by("-created")

    permission_classes = []

# class ListOwnOrderView(ListAPIView):
#     """
#        get:
#        Get all posts of the logged-in user
#
#        Get all posts of the current user by passing his access-Token in the header.
#        Will be listed in chronological order of creation (newest first).
#     """
#     # permission_classes = [
#     #     XXX IsAuthenticated
#     # ]
#     serializer_class = OrderSerializer
#
#     def get_queryset(self):
#         return Order.objects.filter(owner=self.request.user)
#
#
# class ListUserOrderView(ListAPIView):
#     """
#        get:
#        Get all posts of a specific user
#
#        Get all the posts of a user by passing the user-id as a parameter into the URL.
#        Will be listed in chronological order of creation (newest first).
#     """
#     # permission_classes = [
#     #     IsOwnerOrReadOnly
#     # ]
#     serializer_class = OrderSerializer
#
#     def get_queryset(self):
#         return Order.objects.filter(buyer=self.kwargs["userID"])
#
#
class RetrieveUpdateDestroyOrderView(RetrieveUpdateDestroyAPIView):
    """
       get:
       Get a specific post by id

       Get the content of one post by passing the post-id as a parameter into the URL.

       put:
       Update a specific post by id

       Update the entire content of a specific post. The entire data is required and will be overwritten.
       Only allowed if user is owner of the post or staff.

       patch:
       Update parts of a specific post by id

       Update partial data of a specific post.
       Only allowed if user is owner of the post or staff.

       delete:
       Delete a post by id

       Delete a post by passing the post-id as a parameter into the URL.
       Only allowed if user is owner of the post or staff.
    """

    # class RetrieveUpdateDestroyPostView(RetrieveUpdateDestroyAPIView):
    #     """
    #        get:
    #        Get a specific order by id
    #
    #        Get the content of one order by passing the order-id as a parameter into the URL.
    #
    #        put:
    #        Update a specific order by id
    #
    #        Update the entire content of a specific order. The entire data is required and will be overwritten.
    #
    #        patch:
    #        Update parts of a specific order by id
    #
    #        Update partial data of a specific order.
    #
    #        delete:
    #        Delete an order by id
    #
    #        Delete an order by passing the order-id as a parameter into the URL
    #     """
    permission_classes = []
    send_mail(
        'bags order',
        'Thank you for sending your money to Vedrans stripe account. He will use the money for good things, like buying himself some nice things.',
        'bag.for.everyone.contact@gmail.com',
        ['manuelwinkler@bluewin.ch'],
        fail_silently=False,
    )

    serializer_class = ChangeOrderStatusSerializer
    queryset = Order.objects.all()
    lookup_field = 'id'