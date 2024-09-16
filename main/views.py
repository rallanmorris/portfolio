from django.shortcuts import render, get_object_or_404
from .models import Project, Tag
import time, math

# Create your views here.
def home(request):
    projects = Project.objects.all()
    tags = Tag.objects.all()
    return render(request, "home.html", {"projects": projects, "tags": tags})

def train(request):
    return render(request, "train.html")

def contact(request):
    return render(request, "contact.html")

def project(request, id):
    project = get_object_or_404(Project, pk=id)
    return render(request, "project.html", {"project": project})

def apnea(request):
    elapsed_time = None

    if request.method == 'POST':
        if 'pr' in request.POST:
            elapsed_time = request.POST.get('pr')
    
    context = {
        'elapsed_time': elapsed_time,
    }
    request.session['pb'] = elapsed_time
    return render(request, 'apnea.html', context)

def c02(request):
    pb = request.session.get('pb', None)

    context = {
        'pb': pb,
    }

    return render(request, "c02.html", context)

def O2(request):
    pb = request.session.get('pb', None)

    context = {
        'pb': pb,
    }
    return render(request, "O2.html", context)