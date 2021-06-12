from django.db import models

class Comment(models.Model):
    content=models.CharField(max_length=200)
    date_time=models.DateTimeField(auto_now=True)
    likes=models.IntegerField(default=0)
    #TODO: replies should be a model
    replies=models.IntegerField(default=0) 

    def __str__(self):
        return self.content 
