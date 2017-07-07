from __future__ import unicode_literals

from django.db import models
from ..log.models import User


class BookManager(models.Manager):
    def add_book(self, postData, id, author):
            errors = []
            if len(postData['title']) < 1:
                errors.append('Title cannot be empty')

            if errors:
                return (False, errors)

            else:
                try:
                    print postData['title']
                    user = User.objects.get(id=id)
                    author = Author.objects.get(name=author)
                    print user
                    print author
                    newobj = Book.objects.create(
                      title=postData['title'],
                      user_book=user,
                      authors_book=author,

                    )
                    return (True, newobj)

                except:
                    if errors:
                        return (False, errors)



class AuthorManager(models.Manager):
    def add_author(self, postData, id):
            errors = []
            if len(postData['name']) < 1:
                name = Author.objects.get(name=postData['pick_name'])
                return (True, name)

            else:
                name = postData['name']
                try:
                    newobj = Author.objects.create(
                      name=name,

                    )
                    return (True, newobj)
                except:
                    if errors:
                        return (False, errors)

class ReviewManager(models.Manager):
    def add_review(self, postData, id):
            errors = []
            if len(postData['message']) < 1:
                errors.append('Review cannot be empty')

            if errors:
                return (False, errors)

            else:
                try:
                    user = User.objects.get(id=id)
                    book = Book.objects.get(title=postData['title'])
                    newobj = Review.objects.create(
                      message=postData['message'],
                      rating=postData['rating'],
                      user_review=user,
                      book_review=book,

                    )
                    return (True, newobj)

                except:
                    if errors:
                        return (False, errors)

    def new_review(self, postData, book, user):
        errors = []
        if len(postData['message']) < 1:
            errors.append('Review cannot be empty')

        if errors:
            return (False, errors)

        else:
            try:
                newobj = Review.objects.create(
                  message=postData['message'],
                  rating=postData['rating'],
                  user_review=user,
                  book_review=book,

                )
                return (True, newobj)

            except:
                if errors:
                    return (False, errors)

    def delete(self, request, id):
        errors = []
        try:
            review = Review.objects.get(id=id)
            print review
            review.delete()
            return True
        except:

            return False

class Author(models.Model):
    name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = AuthorManager()

class Book(models.Model):
    title = models.CharField(max_length=45)
    authors_book = models.ForeignKey(Author, on_delete=models.CASCADE, related_name="author_books")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    user_book = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_books")
    objects = BookManager()

class Review(models.Model):
    message = models.CharField(max_length=45)
    rating = models.IntegerField()
    book_review = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="book_reviews")
    user_review = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_reviews")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = ReviewManager()
