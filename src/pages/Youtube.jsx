import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Bell, 
  User, 
  MenuIcon, 
  X, 
  FileText, 
  BookMarked,
  Briefcase, 
  MessageSquare, 
  Youtube, 
  Brain, 
  Calendar, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Award,
  Loader,
  CheckCircle,
  AlertCircle 
} from 'lucide-react';

// Add these new components to handle the YouTube video summarization functionality
const VideoSummaryGenerator = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [content, setContent] = useState('');
    const summarizer=async ()=>{
      const res = await fetch('http://127.0.0.1:9000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question:youtubeUrl
        }),
      });

      const data = await res.json();
      setSummary(data.answer)
      // console.log(data.answer)
    }
  // Function to extract YouTube video ID from URL
  const extractVideoId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSummary('');
    setSuccess(false);
    
    const videoId = extractVideoId(youtubeUrl);
    
    if (!videoId) {
      setError('Invalid YouTube URL. Please enter a valid URL.');
      setLoading(false);
      return;
    }

    try {
      // Make API request to your backend service
      const response = await fetchVideoSummary(videoId);
      setSummary(response.summary);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError('Failed to generate summary. Please try again.');
      setLoading(false);
    }
  };

  // This function would connect to your actual backend API
  const fetchVideoSummary = async (videoId) => {
    // In a real implementation, this would be an actual API call
    // For demonstration, we'll simulate a delay and return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          videoId,
          summary: `This is a summarized version of the YouTube video with ID: ${videoId}. 
          
The video covers key career development strategies including:
          
1. How to build a strong professional network
2. Tips for creating a standout resume
3. Effective interview techniques
4. Negotiation skills for job offers
5. Long-term career planning strategies
          
The presenter emphasizes the importance of continuous learning and staying current with industry trends. They also discuss how to leverage social media for professional development.`
        });
      }, 2000); // Simulating API call delay
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Youtube className="h-6 w-6 text-indigo-600" />
        <h3 className="ml-2 text-lg font-medium text-gray-900">YouTube Video Summarizer</h3>
      </div>
      
      <p className="text-sm text-gray-500 mb-4">
        Enter a YouTube URL to generate a concise summary of the video content.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="youtube-url" className="block text-sm font-medium text-gray-700 mb-1">
            YouTube Video URL
          </label>
          <div className="flex rounded-md shadow-sm">
            <input
              type="text"
              id="youtube-url"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
              required
            />
            <button
              type="submit"
              disabled={loading}
              onClick={summarizer}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              {loading ? (
                <>
                  <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Processing
                </>
              ) : (
                'Generate Summary'
              )}
            </button>
          </div>
        </div>
      </form>
      
      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {success && (
        <div className="rounded-md bg-green-50 p-2 mb-4">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <div className="ml-2">
              <p className="text-sm text-green-700">Summary generated successfully!</p>
            </div>
          </div>
        </div>
      )}
      
      {summary && (
        <div className="mt-4">
          <h4 className="text-md font-medium text-gray-900 mb-2">Video Summary</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-700 whitespace-pre-line">{summary}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
              Save Summary
            </button>
            <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
              Share Summary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// For the quiz generation functionality
const VideoQuizGenerator = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const summarizer=async ()=>{
    const res = await fetch('http://127.0.0.1:9000/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question:youtubeUrl
      }),
    });

    const data = await res.json();
    // setSummary(data.answer)
    return data.answer
    console.log(data.answer)
  }
  // Function to extract YouTube video ID from URL
  const extractVideoId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setQuiz(null);
    setSuccess(false);
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    
    const videoId = extractVideoId(youtubeUrl);
    
    if (!videoId) {
      setError('Invalid YouTube URL. Please enter a valid URL.');
      setLoading(false);
      return;
    }

    try {
      // Make API request to your backend service
      const response = await summarizer();
      setQuiz(response);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError('Failed to generate quiz. Please try again.');
      setLoading(false);
    }
  };

  // This function would connect to your actual backend API
  const fetchVideoQuiz = async (videoId) => {
    // In a real implementation, this would be an actual API call
    // For demonstration, we'll simulate a delay and return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          videoId,
          quiz: {
            title: "Career Development Quiz",
            questions: [
              {
                question: "What is the first step in building a professional network according to the video?",
                options: [
                  "Cold calling potential employers",
                  "Creating a LinkedIn profile",
                  "Identifying your career goals",
                  "Attending networking events"
                ],
                correctAnswer: 2
              },
              {
                question: "Which resume format did the presenter recommend for most job seekers?",
                options: [
                  "Chronological",
                  "Functional",
                  "Combination",
                  "Visual"
                ],
                correctAnswer: 0
              },
              {
                question: "What interview technique was emphasized as most important?",
                options: [
                  "Memorizing answers to common questions",
                  "Researching the company thoroughly",
                  "Dressing professionally",
                  "Following up after the interview"
                ],
                correctAnswer: 1
              },
              {
                question: "What negotiation strategy was suggested in the video?",
                options: [
                  "Always accept the first offer",
                  "Focus only on salary",
                  "Consider the entire compensation package",
                  "Demand a higher salary than you expect"
                ],
                correctAnswer: 2
              }
            ]
          }
        });
      }, 2000); // Simulating API call delay
    });
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption+1 === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Brain className="h-6 w-6 text-indigo-600" />
        <h3 className="ml-2 text-lg font-medium text-gray-900">YouTube Quiz Generator</h3>
      </div>
      
      <p className="text-sm text-gray-500 mb-4">
        Create an interactive quiz based on YouTube video content to test knowledge retention.
      </p>
      
      {!quiz || showScore ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="quiz-youtube-url" className="block text-sm font-medium text-gray-700 mb-1">
              YouTube Video URL
            </label>
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                id="quiz-youtube-url"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                required
              />
              <button
                type="submit"
                disabled={loading}
                onClick={summarizer}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Creating Quiz
                  </>
                ) : (
                  'Generate Quiz'
                )}
              </button>
            </div>
          </div>
        </form>
      ) : null}
      
      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {quiz && !showScore && (
        <div className="mt-4">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <h4 className="text-md font-medium text-gray-900">{quiz.title}</h4>
              <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {quiz.questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h5 className="text-md font-medium text-gray-900 mb-3">
              {quiz.questions[currentQuestion].question}
            </h5>
            <div className="space-y-2">
              {quiz.questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {showScore && (
        <div className="mt-4">
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold text-indigo-800 mb-2">Quiz Completed!</h4>
            <p className="text-lg text-indigo-700">
              Your score: {score} out of {quiz.questions.length}
            </p>
            <p className="text-md text-indigo-600 mt-1">
              ({Math.round((score / quiz.questions.length) * 100)}%)
            </p>
            
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => {
                  setQuiz(null);
                  setYoutubeUrl('');
                }}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                New Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function HomeDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Determines if user is student or mentor for conditional rendering
  const [userType, setUserType] = useState('student'); // Can be 'student' or 'mentor'
  
  // Add a new state for the active youtube tool
  const [activeYouTubeTool, setActiveYouTubeTool] = useState('summary'); // Can be 'summary' or 'quiz'
  
  // Mock data for dashboard elements
  // ... [keep all the existing mock data as is]
  
  const recommendedJobs = [
    { id: 1, title: 'Junior Software Developer', company: 'TechCorp', match: '95%', location: 'Remote' },
    { id: 2, title: 'Data Analyst', company: 'Analytics Inc.', match: '87%', location: 'New York, NY' },
    { id: 3, title: 'UX Designer', company: 'DesignHub', match: '82%', location: 'San Francisco, CA' },
  ];
  
  const upcomingSessions = [
    { id: 1, title: 'Career Strategy Session', mentor: 'Dr. Emily Chen', date: 'Today, 3:00 PM', subject: 'Career Planning' },
    { id: 2, title: 'Interview Preparation', mentor: 'Michael Johnson', date: 'Tomorrow, 10:00 AM', subject: 'Job Search' },
  ];
  
  const recommendedCourses = [
    { id: 1, title: 'Python for Data Science', level: 'Intermediate', duration: '8 hours', progress: 25 },
    { id: 2, title: 'Resume Building Workshop', level: 'Beginner', duration: '3 hours', progress: 0 },
    { id: 3, title: 'Interview Skills Mastery', level: 'Advanced', duration: '6 hours', progress: 50 },
  ];
  
  const mentorStudents = [
    { id: 1, name: 'Alex Johnson', subject: 'Career Planning', nextSession: 'Today, 3:00 PM' },
    { id: 2, name: 'Taylor Smith', subject: 'Interview Skills', nextSession: 'Tomorrow, 10:00 AM' },
    { id: 3, name: 'Jordan Lee', subject: 'Resume Review', nextSession: 'Apr 22, 1:00 PM' },
  ];
  
  const mentorSessions = [
    { id: 1, title: 'Career Strategy Session', student: 'Alex Johnson', date: 'Today, 3:00 PM', status: 'upcoming' },
    { id: 2, title: 'Interview Preparation', student: 'Taylor Smith', date: 'Tomorrow, 10:00 AM', status: 'upcoming' },
    { id: 3, title: 'Resume Review', student: 'Jordan Lee', date: 'Apr 22, 1:00 PM', status: 'scheduled' },
  ];

  const notifications = [
    { id: 1, text: 'Your resume analysis is complete', time: '10 min ago', unread: true },
    { id: 2, text: 'New job matches available', time: '1 hour ago', unread: true },
    { id: 3, text: 'Upcoming session reminder: Career Strategy', time: '3 hours ago', unread: false },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle between student and mentor view (for demo purposes)
  const toggleUserType = () => {
    setUserType(userType === 'student' ? 'mentor' : 'student');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* ... [keep header code as is] */}
      
      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome banner */}
          {/* ... [keep welcome banner code as is] */}

          {/* Dashboard content based on user type */}
          {userType === 'student' ? (
            /* Student Dashboard */
            <div>
              {/* Stats section */}
              {/* ... [keep stats section as is] */}

              {/* Multi-section content */}
              {/* ... [keep multi-section content as is] */}

              {/* YouTube Features - Replace with new improved version */}
              <div className="mt-8 bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Video Learning Tools</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Get summaries and quizzes from YouTube videos</p>
                  </div>
                  <Youtube className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="border-t border-gray-200">
                  {/* Tool Selection Tabs */}
                  <div className="flex border-b border-gray-200">
                    <button
                      className={`px-4 py-2 text-sm font-medium ${
                        activeYouTubeTool === 'summary'
                          ? 'border-b-2 border-indigo-500 text-indigo-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveYouTubeTool('summary')}
                    >
                      Video Summary
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium ${
                        activeYouTubeTool === 'quiz'
                          ? 'border-b-2 border-indigo-500 text-indigo-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveYouTubeTool('quiz')}
                    >
                      Quiz Generator
                    </button>
                  </div>
                  
                  {/* Tool Content */}
                  <div className="px-4 py-5 sm:px-6">
                    {activeYouTubeTool === 'summary' ? (
                      <VideoSummaryGenerator />
                    ) : (
                      <VideoQuizGenerator />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1></h1>
          ) }
        </div>
      </main>

      {/* Footer */}
      {/* ... [keep footer as is] */}
    </div>
  );
}