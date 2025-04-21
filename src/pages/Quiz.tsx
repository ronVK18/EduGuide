import { useState } from "react";

const VideoQuizGenerator = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

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
      const response = await fetchVideoQuiz(videoId);
      setQuiz(response.quiz);
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
    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
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