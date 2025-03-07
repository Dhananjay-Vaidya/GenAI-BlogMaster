import os
from openai import OpenAI
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables
load_dotenv()
api_key = os.getenv("AIML_API_KEY")
base_url = os.getenv("BASE_URL")

# Initialize API client
api = OpenAI(api_key=api_key, base_url=base_url)

app = FastAPI()

class GenerateRequest(BaseModel):
    prompt: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.get("/")
def read_root():
    return {"message": "🚀 API is running successfully!"}

@app.post("/generate")
async def generate_text(request: GenerateRequest):
    try:
        system_prompt = "You are an AI assistant. Respond helpfully."
        user_prompt = request.prompt

        completion = api.chat.completions.create(
            model="mistralai/Mistral-7B-Instruct-v0.2",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            temperature=0.7,
            max_tokens=256,
        )

        response = completion.choices[0].message.content
        return {"user": user_prompt, "AI": response}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
