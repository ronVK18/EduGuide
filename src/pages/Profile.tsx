import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  Award, 
  BookOpen, 
  Briefcase, 
  Edit, 
  ChevronRight, 
  Settings, 
  LogOut,
  Clock,
  Star
} from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "January 2023",
    bio: "Recent computer science graduate passionate about data science and software development. Looking to leverage my technical skills and educational background to launch my career in tech.",
    resumeScore: 85,
    profileCompletion: 90,
    skills: [
      { name: "Python", level: 80 },
      { name: "Data Analysis", level: 75 },
      { name: "React", level: 65 },
      { name: "Machine Learning", level: 60 },
      { name: "SQL", level: 70 }
    ],
    education: [
      { 
        degree: "Bachelor of Science in Computer Science", 
        institution: "University of New York", 
        year: "2020-2024",
        description: "Specialized in AI and Data Analysis. Graduated with honors."
      },
      { 
        degree: "High School Diploma", 
        institution: "Westview High School", 
        year: "2016-2020",
        description: "Advanced placement in Mathematics and Computer Science."
      }
    ],
    certifications: [
      { name: "Data Science Fundamentals", issuer: "DataCamp", date: "March 2023" },
      { name: "React Developer Certificate", issuer: "Udemy", date: "August 2023" },
      { name: "Machine Learning Basics", issuer: "Coursera", date: "December 2023" }
    ],
    careerGoals: [
      "Secure an entry-level position as a Data Analyst or Junior Developer",
      "Develop expertise in big data technologies within 2 years",
      "Move into a leadership role within 5 years"
    ],
    recentCourses: [
      { title: "Python for Data Science", progress: 75, lastAccessed: "2 days ago" },
      { title: "Interview Skills Mastery", progress: 50, lastAccessed: "1 week ago" },
      { title: "Resume Building Workshop", progress: 100, lastAccessed: "3 weeks ago" }
    ],
    mentorSessions: [
      { title: "Career Strategy Session", mentor: "Dr. Emily Chen", date: "April 18, 2025", feedback: "Great progress on defining career goals." },
      { title: "Technical Interview Prep", mentor: "Michael Johnson", date: "April 10, 2025", feedback: "Need more practice with algorithm problems." },
      { title: "Resume Review", mentor: "Sarah Williams", date: "March 30, 2025", feedback: "Excellent improvements to resume structure." }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with profile summary */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <User className="h-10 w-10" />
              </div>
              <div className="ml-5">
                <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                <p className="text-md text-gray-500">Student</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </button>
            </div>
          </div>
          
          {/* Profile completion bar */}
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Profile Completion</span>
              <span className="text-sm font-medium text-gray-700">{userData.profileCompletion}%</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${userData.profileCompletion}%` }}
              ></div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`${
                  activeTab === 'overview'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`${
                  activeTab === 'education'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              >
                Education & Skills
              </button>
              <button
                onClick={() => setActiveTab('career')}
                className={`${
                  activeTab === 'career'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              >
                Career Planning
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`${
                  activeTab === 'activity'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              >
                Activity
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-1">
              {/* Personal Information */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-y-4">
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 flex items-center">
                        <Mail className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                        Email
                      </dt>
                      <dd className="ml-auto text-sm text-gray-900">{userData.email}</dd>
                    </div>
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 flex items-center">
                        <Phone className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                        Phone
                      </dt>
                      <dd className="ml-auto text-sm text-gray-900">{userData.phone}</dd>
                    </div>
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 flex items-center">
                        <MapPin className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                        Location
                      </dt>
                      <dd className="ml-auto text-sm text-gray-900">{userData.location}</dd>
                    </div>
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 flex items-center">
                        <Calendar className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                        Member Since
                      </dt>
                      <dd className="ml-auto text-sm text-gray-900">{userData.joinDate}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Skills</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-900">
                    Edit Skills
                  </button>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="space-y-4">
                    {userData.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-2">
              {/* Bio Section */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">About Me</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <p className="text-sm text-gray-700">{userData.bio}</p>
                </div>
              </div>

              {/* Recent Courses */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Courses</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    View all courses
                  </a>
                </div>
                <div className="border-t border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    {userData.recentCourses.map((course) => (
                      <li key={course.title} className="px-4 py-4 sm:px-6">
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">{course.title}</h4>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {course.progress === 100 ? "Completed" : "In Progress"}
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-indigo-600 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center text-xs text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            Last accessed {course.lastAccessed}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recent Mentor Sessions */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Mentor Sessions</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Schedule a session
                  </a>
                </div>
                <div className="border-t border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    {userData.mentorSessions.map((session) => (
                      <li key={session.title} className="px-4 py-4 sm:px-6">
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">{session.title}</h4>
                            <span className="text-sm text-gray-500">{session.date}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            With {session.mentor}
                          </p>
                          <div className="mt-2 text-sm text-gray-700">
                            <div className="flex items-start">
                              <Star className="h-4 w-4 text-yellow-400 mt-0.5 mr-1" />
                              <span>{session.feedback}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Education History */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Education History</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-900">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <div className="border-t border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    {userData.education.map((edu) => (
                      <li key={edu.degree} className="px-4 py-4 sm:px-6">
                        <div>
                          <h4 className="text-md font-medium text-gray-900">{edu.degree}</h4>
                          <p className="text-sm text-indigo-600 mt-1">{edu.institution}</p>
                          <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                          <p className="text-sm text-gray-700 mt-2">{edu.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Certifications</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-900">
                    Add Certification
                  </button>
                </div>
                <div className="border-t border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    {userData.certifications.map((cert) => (
                      <li key={cert.name} className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-md font-medium text-gray-900">{cert.name}</h4>
                            <p className="text-sm text-gray-500 mt-1">Issued by {cert.issuer} • {cert.date}</p>
                          </div>
                          <Award className="h-5 w-5 text-indigo-600" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Skills Analytics */}
            <div className="lg:col-span-1">
              {/* Skills Radar */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Skills Overview</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="flex flex-col items-center justify-center p-4">
                    {/* Simplified skills visualization */}
                    <div className="relative w-full h-64 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <div className="text-center text-sm text-gray-500">
                        Skills Visualization Chart
                        <p className="mt-2 text-xs">(Skill distribution visual would appear here)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recommended Skills */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Recommended Skills</h3>
                  <p className="mt-1 text-sm text-gray-500">Based on your career goals</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                      <span className="text-sm text-gray-700">SQL Database Management</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                      <span className="text-sm text-gray-700">Data Visualization with Tableau</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                      <span className="text-sm text-gray-700">AWS Cloud Services</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                      <span className="text-sm text-gray-700">Project Management</span>
                    </li>
                  </ul>
                  <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Find Courses to Build Skills
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'career' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Career Goals */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Career Goals</h3>
                    <p className="mt-1 text-sm text-gray-500">Define and track your professional objectives</p>
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-900">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="space-y-4">
                    {userData.careerGoals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-600 mr-3 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Job Match Assessment */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Job Match Assessment</h3>
                  <p className="mt-1 text-sm text-gray-500">How well your profile matches with different roles</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Data Analyst</span>
                        <span className="text-sm font-medium text-green-600">85% Match</span>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Junior Software Developer</span>
                        <span className="text-sm font-medium text-green-600">78% Match</span>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Business Intelligence Analyst</span>
                        <span className="text-sm font-medium text-yellow-600">65% Match</span>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">UX Designer</span>
                        <span className="text-sm font-medium text-yellow-600">45% Match</span>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    See detailed analysis
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resume and Career Resources */}
            <div className="lg:col-span-1">
              {/* Resume Analysis */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Resume Score</h3>
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="flex justify-center">
                    <div className="relative h-32 w-32">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-indigo-600">{userData.resumeScore}%</span>
                      </div>
                      {/* This would be replaced with an actual chart in a real implementation */}
                      <div className="absolute inset-0 bg-indigo-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600" 
                          style={{ 
                            clipPath: `polygon(0 0, 100% 0, 100% ${userData.resumeScore}%, 0 ${userData.resumeScore}%)`,
                            transform: 'rotate(180deg)' 
                          }}>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">Your resume is performing well but could use some improvements</p>
                    <button className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Get optimization tips
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Career Resources */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Career Resources</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-3 flex">
                      <Briefcase className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                      <div>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Job Search Strategy Guide
                        </a>
                        <p className="text-xs text-gray-500 mt-1">Learn effective techniques for finding opportunities</p>
                      </div>
                    </li>
                    <li className="py-3 flex">
                      <BookOpen className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                      <div>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Technical Interview Handbook
                        </a>
                        <p className="text-xs text-gray-500 mt-1">Prepare for coding challenges an </p>
                        <p className="text-xs text-gray-500 mt-1">Prepare for coding challenges and technical questions</p>
                      </div>
                    </li>
                    <li className="py-3 flex">
                      <Award className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                      <div>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Negotiation Skills Workshop
                        </a>
                        <p className="text-xs text-gray-500 mt-1">Master salary and benefit negotiations</p>
                      </div>
                    </li>
                  </ul>
                  <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Access Career Library
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Learning Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Learning Activity</h3>
                  <p className="mt-1 text-sm text-gray-500">Your recent educational progress</p>
                </div>
                <div className="border-t border-gray-200">
                  {/* This would be a chart in a real implementation */}
                  <div className="p-6 bg-white">
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Activity Chart (Hours spent learning per week)</p>
                    </div>
                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                      <div>Past 30 Days</div>
                      <div className="font-medium text-gray-700">42 Hours Completed</div>
                    </div>
                  </div>
                  
                  {/* Activity Timeline */}
                  <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
                    <h4 className="text-md font-medium text-gray-900 mb-4">Recent Activity</h4>
                    <div className="flow-root">
                      <ul className="space-y-4">
                        <li className="relative pb-4">
                          <div className="relative flex items-start space-x-3">
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-gray-900">Completed "Resume Building Workshop"</div>
                              <p className="mt-1 text-sm text-gray-500">3 days ago</p>
                            </div>
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Award className="h-5 w-5 text-green-600" />
                            </div>
                          </div>
                        </li>
                        <li className="relative pb-4">
                          <div className="relative flex items-start space-x-3">
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-gray-900">Attended mentor session with Dr. Emily Chen</div>
                              <p className="mt-1 text-sm text-gray-500">1 week ago</p>
                            </div>
                            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-indigo-600" />
                            </div>
                          </div>
                        </li>
                        <li className="relative pb-4">
                          <div className="relative flex items-start space-x-3">
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-gray-900">Started "Python for Data Science" course</div>
                              <p className="mt-1 text-sm text-gray-500">2 weeks ago</p>
                            </div>
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                        </li>
                        <li className="relative">
                          <div className="relative flex items-start space-x-3">
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-gray-900">Updated resume and cover letter</div>
                              <p className="mt-1 text-sm text-gray-500">3 weeks ago</p>
                            </div>
                            <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                              <FileText className="h-5 w-5 text-yellow-600" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Achievements</h3>
                  <p className="mt-1 text-sm text-gray-500">Badges and milestones you've earned</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                        <BookOpen className="h-8 w-8 text-indigo-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">Fast Learner</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <Award className="h-8 w-8 text-green-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">Course Master</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                        <Calendar className="h-8 w-8 text-blue-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">30-Day Streak</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                        <div className="text-gray-400 text-xs">Locked</div>
                      </div>
                      <span className="text-xs font-medium text-gray-400 text-center">Job Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Settings and Notifications */}
            <div className="lg:col-span-1">
              {/* Settings */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Settings</h3>
                  <Settings className="h-5 w-5 text-gray-400" />
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Email Notifications</div>
                        <div className="ml-4 flex-shrink-0">
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" name="email-notifications" id="email-notifications" defaultChecked className="sr-only" />
                            <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                            <div className="absolute w-5 h-5 bg-white rounded-full shadow -left-0.5 -top-0.5 transition"></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Show Profile to Employers</div>
                        <div className="ml-4 flex-shrink-0">
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" name="visible-to-employers" id="visible-to-employers" defaultChecked className="sr-only" />
                            <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                            <div className="absolute w-5 h-5 bg-white rounded-full shadow -left-0.5 -top-0.5 transition"></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">Weekly Progress Reports</div>
                        <div className="ml-4 flex-shrink-0">
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" name="weekly-reports" id="weekly-reports" className="sr-only" />
                            <div className="w-10 h-5 bg-gray-200 rounded-full shadow-inner"></div>
                            <div className="absolute w-5 h-5 bg-white rounded-full shadow -left-0.5 -top-0.5 transition"></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      View all settings
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Connected Accounts */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Connected Accounts</h3>
                  <p className="mt-1 text-sm text-gray-500">Link your professional profiles</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">in</span>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">LinkedIn</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Connected</span>
                    </li>
                    <li className="py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-bold text-sm">GH</span>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">GitHub</span>
                      </div>
                      <button className="text-xs text-indigo-600 hover:text-indigo-500 font-medium">
                        Connect
                      </button>
                    </li>
                    <li className="py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-bold text-sm">P</span>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">Portfolio Website</span>
                      </div>
                      <button className="text-xs text-indigo-600 hover:text-indigo-500 font-medium">
                        Add URL
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}