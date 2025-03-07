import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="container text-center content-below-navbar">
          <h1 className="text-4xl font-bold text-[#DA70D6]">Welcome to AI Content Generator</h1>
          <p className="text-lg text-gray-300 mt-4">
            Generate AI-powered content instantly. Just enter a topic and let AI do the magic! 🚀
          </p>

          <div className="mt-6 flex justify-center items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/generate">
              <button className="btn">Start Generating 🚀</button>
            </Link>
            <Link to="/about">
              <button className="btn bg-[#8A2BE2] hover:bg-[#DA70D6]">Learn More 📖</button>
            </Link>
          </div>

          <section className="mt-12 p-6 bg-[#1E1E1E] rounded-xl border border-[#8A2BE2] shadow-lg">
            <h2 className="text-3xl font-semibold text-[#DA70D6]">📖 User Manual</h2>
            <p className="text-gray-300 mt-2">Follow these steps to generate high-quality AI content:</p>

            <div className="mt-6 text-left space-y-4">
              <div className="p-4 bg-[#222] rounded-lg border border-[#8A2BE2]">
                <h3 className="text-xl text-[#DA70D6]">Step 1: Enter a Topic</h3>
                <p className="text-gray-400">Simply type in the topic you want AI to generate content for.</p>
              </div>

              <div className="p-4 bg-[#222] rounded-lg border border-[#8A2BE2]">
                <h3 className="text-xl text-[#DA70D6]">Step 2: Click "Generate 🚀"</h3>
                <p className="text-gray-400">The AI will process your input and generate a well-structured article.</p>
              </div>

              <div className="p-4 bg-[#222] rounded-lg border border-[#8A2BE2]">
                <h3 className="text-xl text-[#DA70D6]">Step 3: Review & Edit</h3>
                <p className="text-gray-400">You can review the content, make edits, and refine it as needed.</p>
              </div>

              <div className="p-4 bg-[#222] rounded-lg border border-[#8A2BE2]">
                <h3 className="text-xl text-[#DA70D6]">Step 4: Copy & Use</h3>
                <p className="text-gray-400">Click the copy button 📋 to copy the content and use it anywhere.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 p-6">
            <h2 className="text-3xl font-semibold text-[#DA70D6]">🔍 Features & Benefits</h2>
            <ul className="mt-4 text-gray-300 list-disc list-inside">
              <li>✨ AI-powered content creation</li>
              <li>📌 SEO-optimized article generation</li>
              <li>🔍 Plagiarism-free and unique content</li>
              <li>⚡ Fast and efficient workflow</li>
              <li>📋 Copy and use content easily</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
