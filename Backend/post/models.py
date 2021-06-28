from django.db import models
from user.models import CustomUser 
from comment.models import Comment

#TODO: add translation in the future use gettext_lazy func

def upload_to(instance,filename):
    return 'memes/{filename}'.format(filename=filename)



class Post(models.Model):
    image=models.ImageField(("Meme"), upload_to=upload_to, default='memes/default.jpg')
    laughs=models.IntegerField(default=0)
    views=models.IntegerField(default=0)
    date_time=models.DateTimeField( auto_now=True)
    

    comments=models.ForeignKey(Comment,on_delete=models.SET_NULL,null=True,blank=True)
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE,null=False,blank=False)
    objects=models.Manager()#default manager
    # def __str__(self):
    #     return self.views   

    
    #TODO: put a hsrd to predict id

#every post will have a comment



