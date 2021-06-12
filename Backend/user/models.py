from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

class CustomeUserManager(BaseUserManager):
    def create_user(self,username,email,firstname,lastname,password,**other_fields):
        if not email:
            raise ValueError ('YOU MUST PROVIDE A VALID EMAIL')
        email=self.normalize_email(email)
        user= self.model(email=email,username=username,firstname=firstname,lastname=lastname,password=password,**other_fields)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,username,email,firstname,lastname,password,**other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)
        if other_fields.get('is_staff') is not True:
            raise ValueError('superuser must be assigned is_staff=True')    
        if other_fields.get('is_superuser') is not True:
            raise ValueError('superuser must be assigned is_superuser=True')
        return self.create_user(username,email,firstname,lastname,password,**other_fields)        




class CustomUser(AbstractBaseUser,PermissionsMixin):
    email=models.EmailField(("Email Address"),unique=True)
    username=models.CharField(("username"), max_length=100)
    firstname=models.CharField(("firstname"), max_length=50,blank=True)
    lastname=models.CharField(("lastname"), max_length=50,blank=True)
    join=models.DateTimeField(auto_now_add=True)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    

    objects=CustomeUserManager()
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS=['username','firstname','lastname']
    def __str__(self):
        return self.username
    