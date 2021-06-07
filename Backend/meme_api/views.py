from django.shortcuts import render
from rest_framework import generics
from post.models import Post
from .serializers import PostSerializer

class PostList(generics.ListCreateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
class PostDetail(generics.RetrieveAPIView):
    query_set=Post.objects.all()
    serializer_class=PostSerializer
    