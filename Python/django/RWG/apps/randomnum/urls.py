from django.conf.urls import url
from. import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^gen$', views.gen),
    url(r'^res$', views.resp),
]
