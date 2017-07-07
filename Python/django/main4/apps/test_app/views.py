from django.shortcuts import render, redirect
from .models import Blog, Comments
# Create your views here.
def index(request):
    context = {
    "blogs": Blog.objects.all()
    }
    return render(request, 'test_app/index.html', context)

def blogs(request):
    # using ORM
    Blog.objects.create(title=request.POST['title'], blog=request.POST['blog'])
    return redirect('/')

def comments(request, id):
    blog = Blog.objects.get(id=id)
    Comments.objects.create(comments=request.POST['comment'], blog=blog)
    return redirect('/')
