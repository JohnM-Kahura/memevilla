# Generated by Django 3.2.3 on 2021-06-22 09:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('comment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=5000)),
                ('laughs', models.IntegerField(default=0)),
                ('views', models.IntegerField(default=0)),
                ('date_time', models.DateTimeField(auto_now=True)),
                ('comments', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='comment.comment')),
            ],
        ),
    ]
