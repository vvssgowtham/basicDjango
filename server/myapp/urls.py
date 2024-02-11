# myapp/urls.py
from django.urls import path
from .views import submit

#name refers to the name of the endpoint
#submit is the function name in views.py
urlpatterns = [
    path('api/submit/', submit, name='submit'),
]
