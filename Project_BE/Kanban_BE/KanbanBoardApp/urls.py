from django.contrib import admin
from django.urls import path
from .views import *
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/',Login.as_view(),name='login'),

    #Employee
    path('Employees/',Employees.as_view(),name='Get Employee'),
    path('EmployeePost/',EmployeePost.as_view(),name='Post Employee'),
    path('EmployeePut/<str:emp_id>/',EmployeePut.as_view(),name='Update Employee'),

    #Project
    path('Projects/',Projects.as_view(),name='Get Project'),
    path('ProjectPost/',ProjectPost.as_view(),name='Post Project'),
    path('ProjectPut/<str:proj_id>/',ProjectPut.as_view(),name='Update Project')


]