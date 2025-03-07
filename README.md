AI-Powered Blog & Article Generator


Table of Contents

Project Description
Motivation
Problem Statement
Technologies Used
Features
Installation
Usage
API Endpoints
Contributing
License


Project Description

The AI-Powered Blog & Article Generator is a web-based application designed to generate structured and high-quality articles based on user-provided topics. The system leverages AI models to generate content that is SEO-optimized, unique, and ready for publishing. The application provides a modern web interface for users to generate, review, and copy articles efficiently.


Motivation

Content creation requires time and expertise in writing and optimization. This project aims to simplify content generation by utilizing AI to generate articles that are well-structured, engaging, and optimized for search engines. The system is designed to assist content creators, marketers, and businesses in automating the process of generating textual content.


Problem Statement

Content creators often face challenges such as:

Difficulty in generating new ideas for articles
Time-consuming content writing and editing process
Ensuring originality and SEO optimization
The need for a streamlined and automated content generation process

This project addresses these challenges by providing an AI-powered tool that generates well-structured and high-quality content with minimal user input.


Technologies 

Frontend

React.js – A modern JavaScript library for building user interfaces
Vite – A fast development server for React applications
Tailwind CSS – A utility-first CSS framework for responsive styling
React Router – Enables seamless navigation between pages

Backend

FastAPI – A high-performance API framework for Python
OpenAI API – Provides AI-based content generation capabilities
Pydantic – Ensures data validation and serialization
CORS Middleware – Manages secure cross-origin requests
 

Features

AI-powered blog and article generation
SEO-optimized and plagiarism-free content
User-friendly web interface with a dark-themed UI
One-click content generation and copy functionality
Responsive design for different screen sizes


Installation

Clone the Repository
git clone https://github.com/yourusername/ai-blog-generator.git
cd ai-blog-generator

Backend Setup (FastAPI)
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

Create a .env file in the backend folder and add the following details:
AIML_API_KEY="your_api_key"
BASE_URL="https://api.aimlapi.com/v1"

Run the FastAPI server:
uvicorn main:app --reload
The backend will be available at http://127.0.0.1:8000/.

Frontend Setup (React + Vite)
cd frontend
npm install
Create a .env file in the frontend folder and add the following details:
VITE_API_URL=http://127.0.0.1:8000

Run the frontend server:
npm run dev
The frontend will be available at http://127.0.0.1:5173/.

Usage
Enter a topic in the provided input field.
Click the "Generate" button to generate an article.
Review the AI-generated content.
Use the copy button to copy the generated text for use.

API Endpoints
GET / → Check API status
POST /generate → Generate AI-powered content

Sample Request

{
  "prompt": "Write a blog about AI in healthcare"
}

Sample Response

{
  "user": "Write a blog about AI in healthcare",
  "AI": "Artificial Intelligence (AI) is revolutionizing healthcare by enabling faster diagnoses..."
}


Contributing
Contributions to the project are welcome. To contribute:
Fork the repository and create a new branch.
Make changes and commit them.
Submit a pull request for review.


License
This project is licensed under the MIT License. See the LICENSE file for more details.