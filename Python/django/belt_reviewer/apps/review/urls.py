from django.conf.urls import url
from . import views

app_name = "review"
urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^add_book$', views.add_book, name='add_book'),
    url(r'^add$', views.add, name='add'),
    url(r'^book/(?P<id>\d+)$', views.book, name='book'),
    url(r'^user/(?P<id>\d+)$', views.user, name='user'),
    url(r'^new_review/(?P<sec_id>\d+)$', views.new_review, name='new_review'),
    url(r'^delete/(?P<rev_id>\d+)$', views.delete, name='delete'),

]
