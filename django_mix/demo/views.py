# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.views import View
from django.shortcuts import render
from django.template import loader
from django.http import request, HttpResponse

# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render({}, request))
