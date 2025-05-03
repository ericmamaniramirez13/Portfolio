import os;
from dotenv import load_dotenv;
from google import genai;
import time;
load_dotenv()
try:
    api_key = os.environ.get("GEMINI_API_KEY")
    if api_key is None:
        raise KeyError("GEMINI_API_KEY not found in environment variables.")
except KeyError:
    print(
        "Please set the GEMINI_API_KEY environment variable with your API key."
    )

client = genai.Client(api_key=os.environ.get("VITE_GEMINI_API_KEY"))
def chat_with_gemini(prompt):
    response = client.models.generate_content(
    model="gemini-2.0-flash-lite", contents = prompt, )
    return response.text
print(chat_with_gemini("I'm from chile"))
time.sleep(3)
print(chat_with_gemini("i like the number 7"))
time.sleep(3)
print(chat_with_gemini("what number do i like?"))
time.sleep(3)
print(chat_with_gemini("where am i from?"))