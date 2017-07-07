# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-05 01:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('log', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=45)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('authors_book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author_books', to='review.Author')),
                ('user_book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_books', to='log.User')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=45)),
                ('rating', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('book_review', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='book_reviews', to='review.Book')),
                ('user_review', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_reviews', to='log.User')),
            ],
        ),
    ]
