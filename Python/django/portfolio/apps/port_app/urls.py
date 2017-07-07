from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index),
    url(r'^testimonials$', views.testimonials),
    url(r'^about$', views.about),
    url(r'^projects$', views.projects),
    url(r'^test$', views.create)
]
