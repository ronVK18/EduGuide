import React, { useState } from "react";
import {
  BookOpen,
  Search,
  ChevronRight,
  Award,
  Clock,
  CheckCircle,
  Star,
  Calendar,
  FileText,
  BookMarked,
  Target,
  Brain,
  TrendingUp,
  Filter
} from "lucide-react";
import Navbar from "./Navbar";

function Course() {
  // State for course filtering
  const [filter, setFilter] = useState("all"); // "all", "in-progress", "completed", "saved"
  
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Python for Data Science",
      category: "Technical",
      level: "Intermediate",
      instructor: "Dr. James Wilson",
      rating: 4.8,
      totalStudents: 3240,
      duration: "8 hours",
      progress: 25,
      status: "in-progress",
      image: "python-data-science",
      description: "Learn Python programming specifically for data analysis, visualization, and machine learning applications.",
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "Resume Building Workshop",
      category: "Career Development",
      level: "Beginner",
      instructor: "Sarah Palmer",
      rating: 4.9,
      totalStudents: 5680,
      duration: "3 hours",
      progress: 0,
      status: "saved",
      image: "resume-building",
      description: "Create a professional resume that stands out to recruiters and hiring managers.",
      lastAccessed: null
    },
    {
      id: 3,
      title: "Interview Skills Mastery",
      category: "Career Development",
      level: "Advanced",
      instructor: "Michael Roberts",
      rating: 4.7,
      totalStudents: 2950,
      duration: "6 hours",
      progress: 50,
      status: "in-progress",
      image: "interview-skills",
      description: "Master the techniques for acing technical and behavioral interviews.",
      lastAccessed: "Yesterday"
    },
    {
      id: 4,
      title: "Web Development Fundamentals",
      category: "Technical",
      level: "Beginner",
      instructor: "Emma Chen",
      rating: 4.6,
      totalStudents: 8740,
      duration: "12 hours",
      progress: 100,
      status: "completed",
      image: "web-development",
      description: "Learn HTML, CSS, and JavaScript to build your first responsive website.",
      lastAccessed: "Last week"
    },
    {
      id: 5,
      title: "Leadership in Tech",
      category: "Professional Development",
      level: "Advanced",
      instructor: "David Rodriguez",
      rating: 4.9,
      totalStudents: 1820,
      duration: "5 hours",
      progress: 75,
      status: "in-progress",
      image: "leadership-tech",
      description: "Develop essential leadership skills specifically for technology teams and organizations.",
      lastAccessed: "3 days ago"
    },
    {
      id: 6,
      title: "Data Visualization with Tableau",
      category: "Technical",
      level: "Intermediate",
      instructor: "Lisa Johnson",
      rating: 4.8,
      totalStudents: 2340,
      duration: "7 hours",
      progress: 100,
      status: "completed",
      image: "tableau",
      description: "Create powerful visualizations and dashboards with Tableau.",
      lastAccessed: "2 weeks ago"
    }
  ];

  // Filter courses based on selected filter
  const filteredCourses = filter === "all" 
    ? courses 
    : courses.filter(course => course.status === filter);

  // Function to render appropriate course action button based on status
  const renderCourseButton = (course) => {
    switch(course.status) {
      case "in-progress":
        return (
          <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
            Continue Learning
          </button>
        );
      case "completed":
        return (
          <button className="mt-4 w-full bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700">
            Review Course
          </button>
        );
      case "saved":
        return (
          <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
            Start Course
          </button>
        );
      default:
        return (
          <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
            View Course
          </button>
        );
    }
  };

  // Function to render appropriate course icon based on category
  const renderCourseIcon = (category) => {
    switch(category) {
      case "Technical":
        return <BookMarked className="h-12 w-12 text-indigo-600" />;
      case "Career Development":
        return <Target className="h-12 w-12 text-indigo-600" />;
      case "Professional Development":
        return <Brain className="h-12 w-12 text-indigo-600" />;
      default:
        return <BookOpen className="h-12 w-12 text-indigo-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
        <Navbar cur_url="courses"/>
      {/* Page Header */}
      <div className="bg-white shadow px-10 py-5 rounded-lg mb-6">


      
      <div className="flex justify-between items-center mb-6">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-1">Track your progress and continue learning</p>
        </div>
        
       
      </div>
      
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <span className="font-medium text-gray-700">Filter Courses:</span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === "all" 
                ? "bg-indigo-100 text-indigo-700 border border-indigo-300" 
                : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            All Courses
          </button>
          <button 
            onClick={() => setFilter("in-progress")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === "in-progress" 
                ? "bg-indigo-100 text-indigo-700 border border-indigo-300" 
                : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            In Progress
          </button>
          <button 
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === "completed" 
                ? "bg-indigo-100 text-indigo-700 border border-indigo-300" 
                : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            Completed
          </button>
          <button 
            onClick={() => setFilter("saved")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === "saved" 
                ? "bg-indigo-100 text-indigo-700 border border-indigo-300" 
                : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            Saved for Later
          </button>
        </div>
      </div>
      
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white shadow rounded-lg overflow-hidden">
            {/* Course Image/Icon Area */}
            <div className="h-40 bg-indigo-100 flex items-center justify-center relative">
              {renderCourseIcon(course.category)}
              {course.status === "in-progress" && (
                <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                  In Progress
                </div>
              )}
              {course.status === "completed" && (
                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  Completed
                </div>
              )}
            </div>
            
            {/* Course Content */}
            <div className="p-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                  {course.category}
                </span>
                <span className="mx-2">•</span>
                <span>{course.level}</span>
              </div>
              
              <h3 className="font-medium text-gray-900 text-lg">{course.title}</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{course.description}</p>
              
              {/* Instructor and Rating */}
              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="text-gray-600">{course.instructor}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                </div>
              </div>
              
              {/* Duration/Progress */}
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  {course.status !== "saved" && (
                    <span>{course.progress}% Complete</span>
                  )}
                </div>
                
                {/* Progress Bar */}
                {course.status !== "saved" && (
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        course.status === "completed" ? "bg-green-600" : "bg-indigo-600"
                      }`} 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
              
              {/* Last Accessed */}
              {course.lastAccessed && (
                <div className="mt-3 text-xs text-gray-500">
                  Last accessed: {course.lastAccessed}
                </div>
              )}
              
              {/* Action Button */}
              {renderCourseButton(course)}
            </div>
          </div>
        ))}
      </div>
      
      {/* No results message */}
      {filteredCourses.length === 0 && (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No courses found</h3>
          <p className="text-gray-500 mb-4">You don't have any courses in this category yet.</p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Browse Course Catalog
          </button>
        </div>
      )}
      
      {/* Recommendations Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recommended For You</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
            View all recommendations <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="h-40 bg-indigo-100 flex items-center justify-center">
              <FileText className="h-12 w-12 text-indigo-600" />
            </div>
            <div className="p-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                  Career Development
                </span>
                <span className="mx-2">•</span>
                <span>Beginner</span>
              </div>
              <h3 className="font-medium text-gray-900 text-lg">Networking for Career Growth</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Learn to build and leverage professional relationships to advance your career.
              </p>
              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="text-gray-600">Amanda Rivera</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.9</span>
                </div>
              </div>
              <div className="flex items-center mt-3 text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>4 hours</span>
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-xs text-green-500">Matches your career interests</span>
              </div>
              <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
                Start Course
              </button>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="h-40 bg-indigo-100 flex items-center justify-center">
              <Brain className="h-12 w-12 text-indigo-600" />
            </div>
            <div className="p-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                  Professional Development
                </span>
                <span className="mx-2">•</span>
                <span>Intermediate</span>
              </div>
              <h3 className="font-medium text-gray-900 text-lg">Critical Thinking in the Workplace</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Develop problem-solving skills and learn to make better decisions.
              </p>
              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="text-gray-600">Dr. Robert Chen</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.7</span>
                </div>
              </div>
              <div className="flex items-center mt-3 text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>5 hours</span>
              </div>
              <div className="flex items-center mt-2">
                <Award className="h-4 w-4 text-amber-500 mr-1" />
                <span className="text-xs text-amber-500">Popular in your field</span>
              </div>
              <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
                Start Course
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Course;