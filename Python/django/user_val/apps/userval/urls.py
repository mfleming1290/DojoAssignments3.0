from django.conf.urls import url
from . import views

app_name = "userval"
urlpatterns = [
    url(r'^$', views.index),
    url(r'^user$', views.user),
    url(r'^success$', views.success, name = "success"),

]
