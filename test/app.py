from flask import Flask, render_template
import requests
app = Flask(__name__)

@app.route('/')
def gesser():
    # Get the image URL from Python code
    image_url = fetch_random_images("Korean", 1)

    return render_template('index.html', image_url=image_url)



API_KEY = "99bd3e95fe77e3b5e66e182b2f79b150eb55811d94488e1bf7f81472873bc192"


def fetch_random_images(query, num_images):
    params = {
        "api_key": API_KEY,
        "q": query,
        "tbm": "isch",  # Set the search type to images
        "ijn": str(num_images)  # Specify the number of images to retrieve
    }


    response = requests.get("https://serpapi.com/search", params=params)
    data = response.json()


    # Process the image results
    for result in data["images_results"]:
        image_url = result["original"]
        return image_url


        # Download the image
        image_response = requests.get(image_url)
        image_data = image_response.content

    
        break


if __name__ == '__main__':
    app.run()