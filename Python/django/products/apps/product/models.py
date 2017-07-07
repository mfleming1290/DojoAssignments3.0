from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField(max_length=1000)
    weight = models.IntegerField(default=0)
    price = models.IntegerField(default=0)
    cost = models.IntegerField(default=0)
    category = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
