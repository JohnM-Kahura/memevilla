
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('allauth.urls')),
    path('verification/',include('verify_email.urls')),
    path('',include('post.urls'),name='posts'),
    path('api/',include('meme_api.urls'),name='meme_api'),
]
