import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
api_key = os.getenv("AIML_API_KEY")
base_url = os.getenv("BASE_URL")

# Initialize AIML API client
api = OpenAI(api_key=api_key, base_url=base_url)

def test_api():
    try:
        system_prompt = "You are an AI assistant. Respond helpfully."
        user_prompt = "Tell me about deep learning"

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
        print("User:", user_prompt)
        print("AI:", response)

    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    test_api()
