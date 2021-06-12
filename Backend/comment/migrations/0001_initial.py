# Generated by Django 3.2.3 on 2021-06-12 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=200)),
                ('date_time', models.DateTimeField(auto_now=True)),
                ('likes', models.IntegerField(default=0)),
                ('replies', models.IntegerField(default=0)),
            ],
        ),
    ]