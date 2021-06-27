from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.parsers import  FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from post.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAuthenticatedOrReadOnly,IsAuthenticated


class PostUserWritePermission(BasePermission):
    message= 'Editing posts is restricted to the author only'
    def has_object_permission(self,request,view,obj):
        if request.method in SAFE_METHODS:
            return True 
        return obj.user == request.user     

class PostList(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=Post.objects.all()
    serializer_class=PostSerializer
class PostDetail(generics.RetrieveUpdateDestroyAPIView,PostUserWritePermission):
    permission_classes=[PostUserWritePermission]
    queryset=Post.objects.all()
    serializer_class=PostSerializer

class MemeUpload(APIView):
    permission_classes=[IsAuthenticated]
    parser_classes=[MultiPartParser,FormParser]


    def post(self,request,formart=None):
        print(request.data)
        serializer=PostSerializer(data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    