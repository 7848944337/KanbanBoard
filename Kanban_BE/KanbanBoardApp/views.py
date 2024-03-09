from django.shortcuts import render,HttpResponse
from rest_framework.exceptions import NotFound
from rest_framework.views import exception_handler
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import generics
from rest_framework import status
from .serializers import *
from .models import *


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if isinstance(exc, serializers.ValidationError):
        response.data = str(exc)
        response.status_code = status.HTTP_400_BAD_REQUEST
    else:
        response.data = str(exc)
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR

    return response


# Employee
class Employees(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeePost(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
  
class EmployeePut(generics.UpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    lookup_field = 'emp_id'

    def put(self, request, *args, **kwargs):
        try:
            return self.partial_update(request, *args, **kwargs)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)     

#Project------------------

class Projects(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectPost(generics.CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectPut(generics.UpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'proj_id'

    def put(self, request, *args, **kwargs):
        try:
            return self.update(request, *args, **kwargs)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#login----------------------------------


class Login(APIView):
    def post(self, request):
        username = request.data.get('emp_name')
        password = request.data.get('password')

        try:
            user = Employee.objects.get(emp_name=username, password=password)
        except ObjectDoesNotExist:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
        if user is not None:
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
     
