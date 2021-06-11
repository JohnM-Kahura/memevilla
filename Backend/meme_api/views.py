from django.shortcuts import render
from rest_framework import generics
from post.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAuthenticatedOrReadOnly


class PostUserWritePermission(BasePermission):
    message= 'Editing posts is restricted to the author only'
    def has_object_permission(self,request,view,obj):
        if request.method in SAFE_METHODS:
            return True 
        return obj.creator == request.user     







class PostList(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=Post.objects.all()
    serializer_class=PostSerializer
class PostDetail(generics.RetrieveAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    