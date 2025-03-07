export default function About() {
  return (
    <div className="about-page">
      <div className="about-overlay">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-[#DA70D6]">About This Project</h1>
          <p className="text-lg text-gray-300 mt-4">
            The <strong>AI Content Generator</strong> allows users to create high-quality articles, blogs, and more using AI.
            Built using <strong>React, FastAPI, OpenAI API</strong>, and <strong>Tailwind CSS</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-6 text-[#DA70D6]">🔹 Features:</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>📌 AI-powered content generation.</li>
            <li>📌 Fast and accurate results.</li>
            <li>📌 Simple and intuitive UI.</li>
            <li>📌 High-quality plagiarism-free content.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 text-[#DA70D6]">💬 What is a Chatbot UI?</h2>
          <p className="text-gray-300 mt-2">
            A <strong>chatbot UI</strong> is the <strong>interactive</strong> part of a chatbot that users see and interact with.
            It includes <strong>text, buttons, and navigation elements</strong> to ensure smooth conversations.
          </p>
        </div>
      </div>
    </div>
  );
}
