from django.http response import HTTPResponse

def index(request):
    return HTTPResponse("Hello, Dimensional Hubs!!")
