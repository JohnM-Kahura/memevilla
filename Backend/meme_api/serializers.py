from rest_framework import serializers
from post.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post()
        #comments is a class
        fields=('image','laughs','views','date_time','comments')