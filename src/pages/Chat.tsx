import React, { useState, useRef, useEffect } from "react";
import {
  BookOpen,
  Send,
  Paperclip,
  Calendar,
  FileText,
  PlusCircle,
  X,
  ChevronLeft,
  MoreVertical,
  Search,
  User,
  Clock,
  Phone,
  Video,
  Link,
  Image,
  Smile,
  Bookmark,
  ThumbsUp,
  MessageSquare
} from "lucide-react";
import Navbar from "./Navbar";

function Chat() {
  // State for user type (student/mentor)
  const [userType, setUserType] = useState("student");
  
  // Toggle between student and mentor view (for demo purposes)
  const toggleUserType = () => {
    setUserType(userType === "student" ? "mentor" : "student");
  };
  
  // State for active conversation
  const [activeConversation, setActiveConversation] = useState(null);
  
  // State for message input
  const [messageInput, setMessageInput] = useState("");
  
  // Reference for message container to auto-scroll
  const messagesEndRef = useRef(null);
  
  // Conversations data
  const conversations = userType === "student" 
    ? [
        {
          id: 1,
          name: "Dr. Emily Chen",
          role: "Career Mentor",
          avatar: "EC",
          status: "online",
          lastMessage: "Let's discuss your career goals in our next session.",
          timestamp: "11:42 AM",
          unread: 2
        },
        {
          id: 2,
          name: "Michael Johnson",
          role: "Interview Coach",
          avatar: "MJ",
          status: "offline",
          lastMessage: "I've reviewed your mock interview. Here's my feedback.",
          timestamp: "Yesterday",
          unread: 0
        },
        {
          id: 3,
          name: "Sarah Williams",
          role: "Resume Expert",
          avatar: "SW",
          status: "online",
          lastMessage: "Your revised resume looks great! Just a few more tweaks.",
          timestamp: "Apr 18",
          unread: 0
        }
      ]
    : [
        {
          id: 1,
          name: "Alex Johnson",
          role: "Computer Science Student",
          avatar: "AJ",
          status: "online",
          lastMessage: "Thank you for your advice on my career path.",
          timestamp: "10:15 AM",
          unread: 1
        },
        {
          id: 2,
          name: "Taylor Smith",
          role: "Business Major",
          avatar: "TS",
          status: "offline",
          lastMessage: "I'll prepare for our interview practice session.",
          timestamp: "Yesterday",
          unread: 0
        },
        {
          id: 3,
          name: "Jordan Lee",
          role: "Design Student",
          avatar: "JL",
          status: "away",
          lastMessage: "I've updated my portfolio as you suggested.",
          timestamp: "Apr 19",
          unread: 0
        }
      ];
  
  // Sample messages for the active conversation
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: userType === "student" ? "recipient" : "user",
      content: "Hello! How are you doing with your job search progress?",
      timestamp: "11:30 AM"
    },
    {
      id: 2,
      sender: userType === "student" ? "user" : "recipient",
      content: "Hi! I've applied to several positions this week. Got a call back from one company for an initial interview!",
      timestamp: "11:34 AM"
    },
    {
      id: 3,
      sender: userType === "student" ? "recipient" : "user",
      content: "That's great news! Do you feel prepared for the interview?",
      timestamp: "11:36 AM"
    },
    {
      id: 4,
      sender: userType === "student" ? "user" : "recipient",
      content: "I'm a bit nervous about the technical assessment. Could we go over some common questions?",
      timestamp: "11:38 AM"
    },
    {
      id: 5,
      sender: userType === "student" ? "recipient" : "user",
      content: "Absolutely! Let's schedule a session this week. I can help you practice with some typical technical questions for your field.",
      timestamp: "11:40 AM"
    },
    {
      id: 6,
      sender: userType === "student" ? "recipient" : "user",
      content: "Let's discuss your career goals in our next session.",
      timestamp: "11:42 AM"
    }
  ]);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (messageInput.trim() === "") return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessageInput("");
    
    // Simulate a reply after 1 second
    setTimeout(() => {
      const replyMessage = {
        id: messages.length + 2,
        sender: "recipient",
        content: userType === "student" 
          ? "That's a good question. Let me help you with that."
          : "Thanks for your guidance. I'll work on it.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, replyMessage]);
    }, 1000);
  };

  // Suggested messages/quick replies based on user type
  const suggestedMessages = userType === "student" 
    ? [
        "When can we schedule our next meeting?",
        "Could you review my resume?",
        "I need help with interview preparation",
        "What resources do you recommend for this topic?"
      ]
    : [
        "How is your job search going?",
        "Did you complete the assignment we discussed?",
        "Would you like to schedule a practice interview?",
        "Here are some resources that might help you"
      ];
  
  // Handle selecting a conversation
  const handleSelectConversation = (conversation) => {
    setActiveConversation(conversation);
  };

  return (
    <div className="max-w-screen  bg-gray-50 min-h-screen">
        <Navbar cur_url="chats"/>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">
            {userType === "student" 
              ? "Connect with your mentors" 
              : "Support your students"}
          </p>
        </div>
        
        {/* For demo purposes only */}
        <button
          onClick={toggleUserType}
          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium hover:bg-indigo-200"
        >
          {userType === "student" ? "Switch to Mentor View" : "Switch to Student View"}
        </button>
      </div>
      
      {/* Chat Interface */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex h-[650px]">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200">
            {/* Search Box */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search messages..."
                />
              </div>
            </div>
            
            {/* Conversations */}
            <div className="overflow-y-auto h-[calc(650px-61px)]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    activeConversation && activeConversation.id === conversation.id ? "bg-indigo-50" : ""
                  }`}
                  onClick={() => handleSelectConversation(conversation)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                          {conversation.avatar}
                        </div>
                        <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-1 ring-white ${
                          conversation.status === "online" ? "bg-green-400" : 
                          conversation.status === "away" ? "bg-yellow-400" : "bg-gray-400"
                        }`}></span>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{conversation.name}</p>
                          <p className="text-xs text-gray-500">{conversation.timestamp}</p>
                        </div>
                        <p className="text-xs text-gray-500">{conversation.role}</p>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                    </div>
                    {conversation.unread > 0 && (
                      <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white text-xs">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Area */}
          {activeConversation ? (
            <div className="w-2/3 flex flex-col">
              {/* Chat Header */}
              <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  <button className="mr-3 sm:hidden">
                    <ChevronLeft className="h-5 w-5 text-gray-500" />
                  </button>
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                        {activeConversation.avatar}
                      </div>
                      <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-1 ring-white ${
                        activeConversation.status === "online" ? "bg-green-400" : 
                        activeConversation.status === "away" ? "bg-yellow-400" : "bg-gray-400"
                      }`}></span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{activeConversation.name}</p>
                      <p className="text-xs text-gray-500">
                        {activeConversation.status === "online" ? "Online" : 
                         activeConversation.status === "away" ? "Away" : "Offline"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="text-gray-500 hover:text-gray-600">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-600">
                    <Video className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-600">
                    <Calendar className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[75%] ${
                        message.sender === "user" 
                          ? "bg-indigo-600 text-white rounded-l-lg rounded-br-lg" 
                          : "bg-white text-gray-800 border border-gray-200 rounded-r-lg rounded-bl-lg"
                      } px-4 py-2 shadow-sm`}>
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-indigo-200" : "text-gray-500"
                        }`}>{message.timestamp}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              {/* Quick Reply Suggestions */}
              <div className="px-6 py-2 border-t border-gray-200">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {suggestedMessages.map((msg, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm whitespace-nowrap hover:bg-gray-200"
                      onClick={() => setMessageInput(msg)}
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Message Input */}
              <div className="px-6 py-3 border-t border-gray-200">
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <button type="button" className="text-gray-500 hover:text-gray-600 mr-3">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    className="flex-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
                    disabled={!messageInput.trim()}
                  >
                    <Send className="h-4 w-4 mr-1" />
                    Send
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="w-2/3 flex flex-col items-center justify-center bg-gray-50">
              <div className="text-center p-6">
                <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Select a conversation</h3>
                <p className="text-gray-500 mt-1">
                  {userType === "student" 
                    ? "Choose a mentor to start chatting" 
                    : "Select a student to provide guidance"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      
    </div>
  );
}

export default Chat;