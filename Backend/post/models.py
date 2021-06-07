from django.db import models
#TODO: add translation in the future use gettext_lazy func
class Post(models.Model):
    image=models.CharField(max_length=5000)
    laughs=models.IntegerField(default=0)
    views=models.IntegerField(default=0)
    date_time=models.DateTimeField( auto_now=True)
    comments=models.ForeignKey("Comment",on_delete=models.SET_NULL,null=True,blank=True)
    objects=models.Manager()#default manager
    def __str__(self):
        return self.image   

    #TODO:fix default manager error
    #TODO: put a hsrd to predict id

#every post will have a comment
class Comment(models.Model):
    content=models.CharField(max_length=200)
    date_time=models.DateTimeField(auto_now=True)
    likes=models.IntegerField(default=0)
    replies=models.IntegerField(default=0) 

    def __str__(self):
        return self.content 


