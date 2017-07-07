from django.shortcuts import render, redirect, reverse
from .models import Book, Author, Review, User
from django.contrib import messages


# Create your views here.
def index(request):
    context = {
    'books': Book.objects.all().order_by('created_at'),
    'reviews': Review.objects.all().order_by('-created_at')[:3],
    'users': User.objects.all(),
    'bookss': Book.objects.all(),
    }

    return render(request, 'review/index.html', context)


def add_book(request):
    if request.method == 'POST':
        valid, data_author = Author.objects.add_author(request.POST, request.session['id'])
        if valid:
            valid2, data_book = Book.objects.add_book(request.POST, request.session['id'], data_author.name)
            if valid2:
                valid3, data_review = Review.objects.add_review(request.POST, request.session['id'])
                return redirect('review:book', id=data_book.id)
            else:
                for err in data_author:
                    messages.error(request, err)
                return redirect('review:add')
            if errors:
                for err in data_author:
                    messages.error(request, err)
                return redirect('review:add')

def add(request):
    context = {
    "authors": Author.objects.all()
    }
    return render(request, 'review/review.html', context)

def book(request, id):
    context = {
    'book': Book.objects.get(id=id),
    'user': User.objects.all(),
    'authors': Author.objects.get(author_books=Book.objects.get(id=id)),
    'review': Review.objects.all(),
    'curr_user': User.objects.get(id=request.session['id'])
    }
    return render(request, 'review/book.html', context)

def user(request, id):
    context = {
    'review': Review.objects.all(),
    'book': Book.objects.all(),
    'user': User.objects.get(id=id),
    }
    return render(request, 'review/user.html', context)


def new_review(request, sec_id):
    if request.method == 'POST':
        book = Book.objects.get(id=sec_id)
        user = User.objects.get(id=request.session['id'])
        valid, data_rev = Review.objects.new_review(request.POST, book, user)
        if valid:
            return redirect('review:index')
        else:
            for err in data_rev:
                messages.error(request, err)
            return redirect('review:index')

def delete(request, rev_id):
    delete = Review.objects.delete(request, rev_id)
    return redirect('review:index')
