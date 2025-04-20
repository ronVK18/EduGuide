import React, { useState } from "react";
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
} from "lucide-react";
function Navbar({cur_url}:{cur_url:string}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Determines if user is student or mentor for conditional rendering
    const [userType, setUserType] = useState("student"); // Can be 'student' or 'mentor'
  
    // Mock data for dashboard elements
    const recommendedJobs = [
      {
        id: 1,
        title: "Junior Software Developer",
        company: "TechCorp",
        match: "95%",
        location: "Remote",
      },
      {
        id: 2,
        title: "Data Analyst",
        company: "Analytics Inc.",
        match: "87%",
        location: "New York, NY",
      },
      {
        id: 3,
        title: "UX Designer",
        company: "DesignHub",
        match: "82%",
        location: "San Francisco, CA",
      },
    ];
  
    const upcomingSessions = [
      {
        id: 1,
        title: "Career Strategy Session",
        mentor: "Dr. Emily Chen",
        date: "Today, 3:00 PM",
        subject: "Career Planning",
      },
      {
        id: 2,
        title: "Interview Preparation",
        mentor: "Michael Johnson",
        date: "Tomorrow, 10:00 AM",
        subject: "Job Search",
      },
    ];
  
    const recommendedCourses = [
      {
        id: 1,
        title: "Python for Data Science",
        level: "Intermediate",
        duration: "8 hours",
        progress: 25,
      },
      {
        id: 2,
        title: "Resume Building Workshop",
        level: "Beginner",
        duration: "3 hours",
        progress: 0,
      },
      {
        id: 3,
        title: "Interview Skills Mastery",
        level: "Advanced",
        duration: "6 hours",
        progress: 50,
      },
    ];
  
    const mentorStudents = [
      {
        id: 1,
        name: "Alex Johnson",
        subject: "Career Planning",
        nextSession: "Today, 3:00 PM",
      },
      {
        id: 2,
        name: "Taylor Smith",
        subject: "Interview Skills",
        nextSession: "Tomorrow, 10:00 AM",
      },
      {
        id: 3,
        name: "Jordan Lee",
        subject: "Resume Review",
        nextSession: "Apr 22, 1:00 PM",
      },
    ];
  
    const mentorSessions = [
      {
        id: 1,
        title: "Career Strategy Session",
        student: "Alex Johnson",
        date: "Today, 3:00 PM",
        status: "upcoming",
      },
      {
        id: 2,
        title: "Interview Preparation",
        student: "Taylor Smith",
        date: "Tomorrow, 10:00 AM",
        status: "upcoming",
      },
      {
        id: 3,
        title: "Resume Review",
        student: "Jordan Lee",
        date: "Apr 22, 1:00 PM",
        status: "scheduled",
      },
    ];
  
    const notifications = [
      {
        id: 1,
        text: "Your resume analysis is complete",
        time: "10 min ago",
        unread: true,
      },
      {
        id: 2,
        text: "New job matches available",
        time: "1 hour ago",
        unread: true,
      },
      {
        id: 3,
        text: "Upcoming session reminder: Career Strategy",
        time: "3 hours ago",
        unread: false,
      },
    ];
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    // Toggle between student and mentor view (for demo purposes)
    const toggleUserType = () => {
      setUserType(userType === "student" ? "mentor" : "student");
    };
  return (
       <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <BookOpen className="h-8 w-8 text-indigo-600" />
                    <span className="ml-2 text-xl font-bold text-indigo-600">
                      EduGuide
                    </span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a
                      href="/home"
                      className={cur_url=='home'?`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium `:"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                    >
                      Dashboard
                    </a>
                    <a
                      href="/courses"
                      className={cur_url=='courses'?`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium `:"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                    >
                      {userType === "student" ? "My Courses" : "My Students"}
                    </a>
                    <a
                      href="/jobs"
                      className={cur_url=='jobs'?`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium `:"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                    >
                      {userType === "student" ? "Job Search" : "Schedule"}
                    </a>
                    <a
                      href="/mentors"
                      className={cur_url=='mentors'?`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium `:"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                    >
                      {userType === "student" ? "My Mentors" : "Resources"}
                    </a>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  {/* For demo purposes only */}
                  <button
                    onClick={toggleUserType}
                    className="mr-4 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium hover:bg-indigo-200"
                  >
                    {userType === "student"
                      ? "Switch to Mentor View"
                      : "Switch to Student View"}
                  </button>
    
                  {/* Search button */}
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Search</span>
                    <Search className="h-6 w-6" />
                  </button>
    
                  {/* Notification dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">View notifications</span>
                        <Bell className="h-6 w-6" />
                        {notifications.some((n) => n.unread) && (
                          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                        )}
                      </button>
                    </div>
                  </div>
    
                  {/* Profile dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <User className="h-5 w-5" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
    
                {/* Mobile menu button */}
                <div className="flex items-center sm:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open main menu</span>
                    {isMobileMenuOpen ? (
                      <X className="block h-6 w-6" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
    
            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  <a
                    href="#"
                    className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    {userType === "student" ? "My Courses" : "My Students"}
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    {userType === "student" ? "Job Search" : "Schedule"}
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    {userType === "student" ? "My Mentors" : "Resources"}
                  </a>
                  <button
                    onClick={toggleUserType}
                    className="w-full text-left border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    {userType === "student"
                      ? "Switch to Mentor View"
                      : "Switch to Student View"}
                  </button>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <User className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {userType === "student" ? "Alex Johnson" : "Dr. Emily Chen"}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        alex@example.com
                      </div>
                    </div>
                    <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">View notifications</span>
                      <Bell className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            )}
          </nav>
  )
}

export default Navbar