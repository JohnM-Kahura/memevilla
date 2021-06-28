from django.urls import path
from .views import PostList,PostDetail



app_name='meme_api'

urlpatterns = [
    path('',PostList.as_view(),name='post_list'),
    path('<int:pk>/',PostDetail.as_view(),name='post_details'),
    # path('admin/create/',MemeUpload.as_view(),name='meme_upload'),
]

