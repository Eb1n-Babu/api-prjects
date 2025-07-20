from django.shortcuts import render

def joke_view(request):
    try:
        response = request.get("https://icanhazdadjoke.com/",headers={"Accept":"application/json"})
        response.raise_for_status()
        joke = response.json().get("joke", "Couldn't find a joke 😢")
    except:
        joke = "Oops, no joke today. Blame the internet gremlins 🐛"
    return render(request, "joke.html", {"joke": joke})

