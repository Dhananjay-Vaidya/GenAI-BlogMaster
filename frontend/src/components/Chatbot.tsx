import { useState } from "react";
import { Send, MessageSquare, X } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the conversation
    setMessages([...messages, { sender: "user", text: input }]);
    
    // Simulate chatbot response (replace with an API call if needed)
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: `You said: ${input}` }]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chatbot UI Panel */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 bg-white shadow-lg rounded-lg p-4 border">
          <h2 className="text-xl font-bold text-blue-600">Chatbot</h2>

          <div className="h-60 overflow-y-auto p-2 border rounded-md bg-gray-100 mt-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end text-right"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex mt-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l-md"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-2 rounded-r-md"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
