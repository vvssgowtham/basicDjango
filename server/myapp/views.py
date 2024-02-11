from django.http import JsonResponse
import requests
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def submit(request):
    if request.method == 'POST':
        try:
            response = requests.get('https://api.randomuser.me/')
            data = response.json()
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)
