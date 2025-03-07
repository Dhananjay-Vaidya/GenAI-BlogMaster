import { useState } from "react";
import { Loader2, Clipboard, CheckCircle } from "lucide-react";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  console.log("🔗 Backend API URL:", API_URL);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("⚠️ Please enter a valid topic.");
      return;
    }

    setLoading(true);
    setGeneratedText("");
    setError("");
    setCopied(false);

    try {
      const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`❌ API Error: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedText(data.AI || "No content generated.");
    } catch (error: any) {
      setError(error.message || "⚠️ Failed to generate content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generate-page">
      <div className="generate-overlay">
        <div className="generate-container">
          <h1 className="text-3xl font-bold text-[#DA70D6] text-center">
            AI Content Generator
          </h1>

          <textarea
            className="generate-textarea"
            placeholder="Enter a topic..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
          />

          <button onClick={handleGenerate} className="btn" disabled={loading}>
            {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : "Generate 🚀"}
          </button>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          {generatedText && (
            <div className="generated-content">
              <h2 className="text-lg font-semibold">Generated Content:</h2>
              <p className="mt-2">{generatedText}</p>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="copy-btn"
              >
                {copied ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Clipboard className="h-5 w-5 text-gray-300" />
                )}
              </button>
            </div>
          )}
          <div className="sample-prompts mt-6">
              <h2 className="text-xl font-semibold text-[#DA70D6]">💡 Sample Prompts</h2>
              <p className="text-gray-300 mt-2">Try these prompt ideas for best results:</p>

              <ul className="prompt-list">
                <li>📝 "Write an engaging blog about the future of AI in business."</li>
                <li>📖 "Summarize the book 'Atomic Habits' in 200 words."</li>
                <li>🎭 "Generate a creative short story about space exploration."</li>
                <li>📊 "Explain machine learning to a 10-year-old."</li>
                <li>📰 "Provide the latest trends in digital marketing for 2025."</li>
                <li>🔬 "Describe the impact of quantum computing on cybersecurity."</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
