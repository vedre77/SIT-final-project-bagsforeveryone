from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from registration.views import RegistrationView, RegistrationValidationView, TokenUserObtainView, PasswordResetView, \
    PasswordResetValidationView

app_name = 'registration'

urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='retrieve-refreshed-token'),
    path('token/verify/', TokenVerifyView.as_view(), name='verify-token'),
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('registration/validation/', RegistrationValidationView.as_view(), name='registration-validation'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset/validation/', PasswordResetValidationView.as_view(), name='password-reset-validation'),
]
