# Code Generation using ChatGPT

This project is a web application that uses OpenAI's GPT-3 to generate code based on user prompts. The application is built using Flask for the backend and React for the frontend.

## Features

- Generate code snippets based on natural language prompts.
- View and manage history of generated code snippets.
- Customize code generation parameters.

## Getting Started

### Prerequisites

- Python 3.x
- Node.js

### Setup

1. Clone the repository:

   ```
   git clone https://github.com/Aryan-Gupta2003/Code_Generation_Using_ChatGPT.git
   ```

2. Navigate to the backend directory and install dependencies:

   ```
   cd backend
   python3 -m venv venv
   venv/Scripts/activate
   pip install -r requirements.txt
   ```

3. Navigate to the frontend directory and install dependencies:

   ```
   cd frontend
   npm init -y
   npm install react react-dom
   npm install react-bootstrap@latest
   npm install react-scripts
   ```

4. Create a `.env` file in the backend directory:
   ```
   OPENAI_API_KEY = your_openai_api_key
   ```

### Running the Application

1. Start the backend server:

   ```
   cd backend
   python app.py
   ```

2. Start the frontend server:
   ```
   cd frontend
   npm start
   ```

## Contribution

Feel free to open issues or submit pull requests for any improvements or bugs you find.
