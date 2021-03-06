# Generated by Django 2.0.2 on 2018-03-05 01:17

from django.db import migrations, models
import reader.models


class Migration(migrations.Migration):

    dependencies = [
        ('reader', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comic',
            name='hidden',
        ),
        migrations.AddField(
            model_name='comic',
            name='published',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='comic',
            name='cover',
            field=models.ImageField(blank=True, upload_to=reader.models.Comic.path),
        ),
        migrations.AlterField(
            model_name='comic',
            name='format',
            field=models.PositiveSmallIntegerField(choices=[(0, 'Manga'), (1, 'Toon'), (2, 'Classic'), (3, 'LTR Book'), (4, 'RTL Book')], default=0),
        ),
        migrations.AlterField(
            model_name='comic',
            name='tags',
            field=models.ManyToManyField(blank=True, to='reader.Tag'),
        ),
    ]
