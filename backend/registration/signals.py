import django.dispatch
from django.dispatch import Signal

model_delete_signal = Signal()
post_user_registration_validation = django.dispatch.Signal("user")
post_user_password_reset_validation = django.dispatch.Signal("user")
