from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserManager(models.Manager):
      def test(self, postData):
          errors = []

          if len(postData['name']) < 8:
              errors.append('Name to short')

          elif len(postData['name']) > 16:
             errors.append('Name to long')

          if errors:
              return (False, errors)
          else:
              newobj = User.objects.create(
                name=postData['name']
              )
              return (True, newobj)
class User(models.Model):
    name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()
