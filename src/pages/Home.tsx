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
import Navbar from "./Navbar";
import { useUser } from "@clerk/clerk-react";

export default function HomeDashboard() {
  const user=useUser()
  const name=user?.user?.firstName
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Determines if user is student or mentor for conditional rendering
  const [userType, setUserType] = useState("student"); // Can be 'student' or 'mentor'
  const [ats,setAts]=useState(0);
  const randomAts=()=>{
    const randomValue = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    setAts(randomValue);
  }
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
  const [url,setUrl]=useState("")
  const [content,setContent]=useState("")
    const summarizer=async ()=>{
      const res = await fetch('http://127.0.0.1:9000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question:url
        }),
      });

      const data = await res.json();
      setContent(data.answer)
      console.log(data.answer)
    }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle between student and mentor view (for demo purposes)
  const toggleUserType = () => {
    setUserType(userType === "student" ? "mentor" : "student");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cur_url="home"/>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome banner */}
          <div className="bg-indigo-600 rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-8 sm:p-10">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white rounded-full p-3">
                  {userType === "student" ? (
                    <Target className="h-8 w-8 text-indigo-600" />
                  ) : (
                    <BookMarked className="h-8 w-8 text-indigo-600" />
                  )}
                </div>
                <div className="ml-5">
                  <h2 className="text-xl font-bold text-white">
                     Hii {name}
                    !
                  </h2>
                  <p className="text-indigo-100 mt-1">
                    {userType === "student"
                      ? "Start your journey towards career success"
                      : "You have 3 mentoring sessions scheduled for today"}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {userType === "student"
                    ? "Resume where you left off"
                    : "View your schedule"}
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard content based on user type */}
          {userType === "student" ? (
            /* Student Dashboard */
            <div>
              {/* Stats section */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <BookOpen className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Courses in Progress
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              3
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <Calendar className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Upcoming Sessions
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              2
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <TrendingUp className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Resume Score
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              85%
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-section content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personalized Job Recommendations */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Personalized Job Recommendations
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Based on your skills and preferences
                      </p>
                    </div>
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="divide-y divide-gray-200">
                      {recommendedJobs.map((job) => (
                        <li key={job.id} className="py-4">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="text-md font-medium text-gray-900">
                                {job.title}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {job.company} • {job.location}
                              </p>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {job.match} Match
                            </span>
                          </div>
                          <div className="mt-2 flex">
                            <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium flex items-center">
                              View Details
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View all job recommendations{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Upcoming Sessions
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Your scheduled mentoring sessions
                      </p>
                    </div>
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="divide-y divide-gray-200">
                      {upcomingSessions.map((session) => (
                        <li key={session.id} className="py-4">
                          <div>
                            <h4 className="text-md font-medium text-gray-900">
                              {session.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              With {session.mentor} • {session.date}
                            </p>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mt-2">
                              {session.subject}
                            </span>
                          </div>
                          <div className="mt-2 flex space-x-4">
                            <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                              Join Session
                            </button>
                            <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                              Reschedule
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Schedule a new session{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resume Tools */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Resume Analysis Tools
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Improve your resume and job application
                      </p>
                    </div>
                    <FileText className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-md font-medium text-gray-900">
                          ATS Score Analysis
                        </h4>
                        <div className="mt-2 flex items-center">
                          <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-indigo-600 h-2.5 rounded-full"
                              style={{ width: `${ats}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm font-medium text-gray-700">
                            {ats}/100
                          </span>
                        </div>
                        
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-md font-medium text-gray-900">
                          Resume Checker
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Compare your resume with job descriptions
                        </p>
                        <input type="file" name="file" placeholder="Upload Resume" id="" />
                        <button className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" onClick={randomAts}>
                          Analyze
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Courses */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Recommended Courses
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Continue your learning journey
                      </p>
                    </div>
                    <BookMarked className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="divide-y divide-gray-200">
                      {recommendedCourses.map((course) => (
                        <li key={course.id} className="py-4">
                          <div>
                            <h4 className="text-md font-medium text-gray-900">
                              {course.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {course.level} • {course.duration}
                            </p>
                          </div>
                          <div className="mt-2">
                            {course.progress > 0 ? (
                              <div>
                                <div className="flex items-center justify-between">
                                  <div className="text-xs text-gray-500">
                                    Progress
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {course.progress}%
                                  </div>
                                </div>
                                <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-indigo-600 h-2 rounded-full"
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                                <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                                  Continue Course
                                </button>
                              </div>
                            ) : (
                              <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                                Start Course
                              </button>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Browse all courses{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          ) : (
            /* Mentor Dashboard */
            <div>
              {/* Stats section */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <User className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Active Students
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              12
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <Calendar className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Sessions Today
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              3
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <Award className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Mentor Rating
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              4.9/5.0
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-section content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Student List */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Your Students
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Recent student activity
                      </p>
                    </div>
                    <User className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="divide-y divide-gray-200">
                      {mentorStudents.map((student) => (
                        <li key={student.id} className="py-4">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="text-md font-medium text-gray-900">
                                {student.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                Focus area: {student.subject} • Next session:{" "}
                                {student.nextSession}
                              </p>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              Active
                            </span>
                          </div>
                          <div className="mt-2 flex">
                            <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium flex items-center">
                              View Profile
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View all students <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Upcoming Sessions
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Your scheduled mentoring sessions
                      </p>
                    </div>
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="divide-y divide-gray-200">
                      {mentorSessions.map((session) => (
                        <li key={session.id} className="py-4">
                          <div>
                            <h4 className="text-md font-medium text-gray-900">
                              {session.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              With {session.student} • {session.date}
                            </p>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                session.status === "upcoming"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-indigo-100 text-indigo-800"
                              } mt-2`}
                            >
                              {session.status === "upcoming"
                                ? "Today"
                                : "Scheduled"}
                            </span>
                          </div>
                          <div className="mt-2 flex space-x-4">
                            <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                              {session.status === "upcoming"
                                ? "Start Session"
                                : "View Details"}
                            </button>
                            <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                              Reschedule
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View full schedule{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Session Resources */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Mentoring Resources
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Tools to enhance your sessions
                      </p>
                    </div>
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-md font-medium text-gray-900">
                          Career Planning Templates
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Access customized templates for students at different
                          career stages
                        </p>
                        <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                          Access Templates
                        </button>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-md font-medium text-gray-900">
                          Session Notes Template
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Structured templates for tracking student progress
                        </p>
                        <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                          Create Notes
                        </button>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-md font-medium text-gray-900">
                          AI Session Assistant
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Get real-time suggestions during mentoring sessions
                        </p>
                        <button className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                          Launch Assistant
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messaging Center */}
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Message Center
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Recent communications with students
                      </p>
                    </div>
                    <MessageSquare className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ul className="divide-y divide-gray-200">
                      <li className="py-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-md font-medium text-gray-900">
                              Alex Johnson
                            </h4>
                            <p className="text-sm text-gray-500">
                              Question about resume review feedback
                            </p>
                          </div>
                          <span className="text-sm text-gray-500">
                            10 min ago
                          </span>
                        </div>
                        <div className="mt-2 flex">
                          <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                            Reply
                          </button>
                        </div>
                      </li>
                      <li className="py-4">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-md font-medium text-gray-900">
                              Taylor Smith
                            </h4>
                            <p className="text-sm text-gray-500">
                              Interview preparation materials
                            </p>
                          </div>
                          <span className="text-sm text-gray-500">
                            Yesterday
                          </span>
                        </div>
                        <div className="mt-2 flex">
                          <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                            Reply
                          </button>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View all messages <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Creation Tools */}
              <div className="mt-8 bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Content Creation Tools
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Create personalized resources for your students
                    </p>
                  </div>
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-indigo-600" />
                        <h4 className="ml-2 text-md font-medium text-gray-900">
                          Lesson Plan Generator
                        </h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Create customized session plans based on student needs
                      </p>
                      <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                        Create Plan
                      </button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center">
                        <Brain className="h-5 w-5 text-indigo-600" />
                        <h4 className="ml-2 text-md font-medium text-gray-900">
                          Resource Builder
                        </h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Build custom worksheets and exercises for students
                      </p>
                      <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                        Create Resources
                      </button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center">
                        <Youtube className="h-5 w-5 text-indigo-600" />
                        <h4 className="ml-2 text-md font-medium text-gray-900">
                          Video Recommendations
                        </h4>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Find relevant videos to share with your students
                      </p>
                      <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                        Find Videos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Help Center</span>
                <span className="text-sm text-gray-500 hover:text-gray-900">
                  Help Center
                </span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Privacy Policy</span>
                <span className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Terms of Service</span>
                <span className="text-sm text-gray-500 hover:text-gray-900">
                  Terms of Service
                </span>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-sm text-gray-500">
                &copy; 2025 EduGuide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
