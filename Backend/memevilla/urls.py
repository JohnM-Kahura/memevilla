
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('allauth.urls')),
    path('verification/',include('verify_email.urls')),
    path('',include('post.urls'),name='posts'),
    path('api/',include('meme_api.urls'),name='meme_api'),
    path('api/user/',include('user.urls',namespace='users')),
    path('api-auth/',include('rest_framework.urls',namespace='rest_framework')),
    path('api/token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/token/refresh',TokenRefreshView.as_view(),name='token_refresh'),

]
