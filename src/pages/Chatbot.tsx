import { useState } from 'react';
import { MessagesSquare } from 'lucide-react';

// Simple chatbot using a Q&A approach
const botResponses = {
  "hello": "Hi there! How can I help you today?",
  "how are you": "I'm just a program, but I'm functioning well! How can I assist you?",
  "what is your name": "I'm a simple chatbot created with React. You can call me ChatBot!",
  "help": "I can answer simple questions. Try asking me something!",
  "goodbye": "Goodbye! Feel free to chat again anytime.",
};

export default function ChatbotDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    
    // Process response with GOQ (Get, Observe, Question) approach
    setTimeout(() => {
      // Get the input and find response
      const userInput = input.toLowerCase();
      let botResponse = "I'm not sure how to respond to that. Can you try asking something else?";
      
      // Observe if we have a matching response
      for (const key in botResponses) {
        if (userInput.includes(key)) {
          botResponse = botResponses[key];
          break;
        }
      }
      
      // Question - determine if we need to ask a follow-up
      if (userInput.includes("?") && !botResponse.includes("?")) {
        botResponse += " Is there anything else you'd like to know?";
      }
      
      setMessages([...newMessages, { role: 'bot', content: botResponse }]);
    }, 500);
    
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="relative">
      {/* Chat Icon Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all"
      >
        <MessagesSquare size={24} />
      </button>
      
      {/* Chat Dialog */}
      
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Chat Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              ✕
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-3 h-64 overflow-y-auto flex flex-col space-y-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`max-w-3/4 p-2 rounded ${
                  msg.role === 'user' 
                    ? 'bg-blue-100 self-end' 
                    : 'bg-gray-100 self-start'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      
    </div>
  );
}