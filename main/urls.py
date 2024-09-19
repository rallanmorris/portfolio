from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("home/", views.home, name="home"),
    path("train/", views.train, name="train"),
    path("contact/", views.contact, name="contact"),
    path("apnea/", views.apnea, name="apnea"),
    path("apnea/c02", views.c02, name="c02"),
    path("apnea/O2", views.O2, name="O2"),
    path("dice/", views.dice, name="dice"),
    path("resume/", views.resume, name="resume"),
    path("project/<int:id>", views.project, name="project"),
]