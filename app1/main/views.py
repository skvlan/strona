from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    context = {
        'title': 'FIX - Home page',
        'content': 'CARSERVISE'
    }
    

    return render(request, 'main/index.html', context)



