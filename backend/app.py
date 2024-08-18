from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)

# Load environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/', methods=['GET'])
def home():
    return "<h1>Welcome to the Code Generation API</h1>"

@app.route('/generate_code', methods=['POST'])
def generate_code():
    data = request.get_json()
    prompt = data['prompt']
    
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Use the appropriate model name
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ]
        )
        generated_code = response['choices'][0]['message']['content']
        return generated_code
        # return jsonify({"code": generated_code})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
