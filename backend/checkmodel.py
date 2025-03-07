import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("Missing OpenAI API Key. Set OPENAI_API_KEY in .env")

# Set API key
openai.api_key = api_key

# Fetch available models
response = openai.models.list()

print("Available models:")
for model in response.data:
    print(model.id)
