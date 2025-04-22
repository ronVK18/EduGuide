import React, { useState } from "react";
import {
  BookOpen,
  User,
  Settings,
  Youtube,
  Brain,
  Briefcase,
  FileText,
  Target,
  MessageSquare,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function EduGuideLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user=useUser()
  const features = [
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: "Personalized Job Recommendations",
      description:
        "Utilizes AI algorithms to provide job suggestions tailored to individual skills and career aspirations, enhancing job matching efficiency.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-600" />,
      title: "Interactive Assistant Arya",
      description:
        "Offers real-time guidance and feedback during quizzes and job application processes, acting as a personalized tutor.",
    },
    {
      icon: <User className="w-8 h-8 text-indigo-600" />,
      title: "Dynamic User Interface",
      description:
        "Adapts to various screen sizes and orientations to ensure a seamless and engaging user experience across devices.",
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: "Resume Analysis Tools",
      description:
        "Analyze resumes against ATS criteria and compare with job descriptions to offer detailed feedback and improvement suggestions.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Comprehensive Courses Section",
      description:
        "Provides access to a variety of career development courses and interactive quizzes to help users build relevant skills.",
    },
    {
      icon: <User className="w-8 h-8 text-indigo-600" />,
      title: "Profile Management",
      description:
        "Allows users to create and manage profiles, update personal information, and set preferences.",
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-600" />,
      title: "Settings",
      description:
        "Offers customization options to adjust the app's functionality to suit individual user preferences.",
    },
    {
      icon: <Youtube className="w-8 h-8 text-indigo-600" />,
      title: "YouTube Video Summary",
      description:
        "Generates concise and informative summaries of career-related YouTube videos using advanced language models.",
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      title: "YouTube Video Quiz Generator",
      description:
        "Automatically creates interactive quizzes from YouTube video content to reinforce learning and assess understanding.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      title: "Connect with a Mentor",
      description:
        "Facilitates personalized guidance by connecting users with mentors through a tag-based AI agent, ensuring relevant career advice.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-indigo-600">
                  EduGuide
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>

              <SignedOut>
                <div className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium  bg-white hover:bg-gray-100">
                  <SignInButton 
                    forceRedirectUrl={'/input'}
                  />
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center  justify-center space-x-2 bg-white hover:bg-gray-100  py-2 rounded-md text-sm font-medium text-gray-700 ">
                  <UserButton
                    
                    showName={true}
                    showIcon={true}
                    userProfileMode="navigation"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "h-12 w-12",
                        userButtonAvatar: "h-12 w-12",
                      },
                    }}
                  />
                  
                </div>
              </SignedIn>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                About
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200"></div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main>
        <div className="pt-16">
          <div className="relative bg-indigo-50">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-indigo-600">EduGuide</span>
                  <span className="block text-3xl sm:text-4xl mt-2">
                    Your Path to Success
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                  Personalized guidance and problem-solving for students across
                  career planning, health and wellness, exam preparation, and
                  academic subjects.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:flex sm:justify-center md:mt-12">
                  <div className="rounded-md shadow">
                    <a
                      href={user.isSignedIn ?"/home":"https://modern-owl-42.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2F"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                      href="/home"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Features That Empower Your Education
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                EduGuide offers a comprehensive suite of tools to enhance your
                learning experience and career readiness.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
            <div className="lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-indigo-200">
                  Start your journey today.
                </span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-white px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 hover:bg-indigo-50"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="ml-4 inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2 space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2025 EduGuide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
