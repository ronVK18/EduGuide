import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  MessageSquare, 
  Video, 
  Star, 
  Calendar, 
  Filter, 
  X,
  Clock,
  BookOpen,
  Award,
  ChevronDown,
  Check,
  Grid,
  List,
  Tag,
  Briefcase,
  MapPin
} from 'lucide-react';
import Navbar from './Navbar';
import { redirect } from 'react-router-dom';

export default function Mentor() {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [activeMentorChat, setActiveMentorChat] = useState(null);
  const [activeVideoCall, setActiveVideoCall] = useState(null);
  
  // Mock mentor data
  const mentors = [
    {
      id: 1,
      name: "Dr. Emily Chen",
      title: "Career Strategist & Tech Leadership Coach",
      rating: 4.9,
      reviewCount: 127,
      specialties: ["Career Transition", "Tech Leadership", "Interview Prep"],
      experience: "10+ years",
      company: "Former Google, Microsoft",
      availability: "High",
      bio: "Former tech executive helping professionals navigate career transitions and leadership roles in the technology sector.",
      price: "$95/hour",
      location: "San Francisco, CA",
      imgUrl: "/api/placeholder/400/400",
      categories: ["career", "tech", "leadership"]
    },
    {
      id: 2,
      name: "Michael Johnson",
      title: "Software Engineering Mentor",
      rating: 4.8,
      reviewCount: 94,
      specialties: ["Full-Stack Development", "System Design", "Coding Interviews"],
      experience: "8 years",
      company: "Senior Engineer at Netflix",
      availability: "Medium",
      bio: "Helping developers level up their technical skills and prepare for software engineering interviews at top companies.",
      price: "$85/hour",
      location: "Remote",
      imgUrl: "/api/placeholder/400/400",
      categories: ["tech", "coding", "interviews"]
    },
    {
      id: 3,
      name: "Sarah Williams",
      title: "UX/UI Design Coach",
      rating: 4.9,
      reviewCount: 78,
      specialties: ["UX Research", "Product Design", "Design Portfolio Review"],
      experience: "7 years",
      company: "Design Lead at Airbnb",
      availability: "Low",
      bio: "Passionate about helping designers create impactful user experiences and build portfolios that showcase their best work.",
      price: "$90/hour",
      location: "New York, NY",
      imgUrl: "/api/placeholder/400/400",
      categories: ["design", "portfolio"]
    },
    {
      id: 4,
      name: "Robert Lee",
      title: "Data Science & AI Specialist",
      rating: 4.7,
      reviewCount: 62,
      specialties: ["Machine Learning", "Data Analysis", "AI Ethics"],
      experience: "12 years",
      company: "AI Researcher, Stanford University",
      availability: "High",
      bio: "Guiding aspiring data scientists through the complexities of machine learning and AI applications in industry.",
      price: "$110/hour",
      location: "Palo Alto, CA",
      imgUrl: "/api/placeholder/400/400",
      categories: ["tech", "data-science", "ai"]
    },
    {
      id: 5,
      name: "Lisa Martinez",
      title: "Product Management Coach",
      rating: 4.8,
      reviewCount: 85,
      specialties: ["Product Strategy", "User Research", "Agile Methodologies"],
      experience: "9 years",
      company: "Product Director at Salesforce",
      availability: "Medium",
      bio: "Helping product managers develop user-centered strategies and navigate the challenges of product development.",
      price: "$100/hour",
      location: "Remote",
      imgUrl: "/api/placeholder/400/400",
      categories: ["product", "leadership", "tech"]
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Startup Advisor & Entrepreneur",
      rating: 4.9,
      reviewCount: 58,
      specialties: ["Fundraising", "Business Strategy", "Pitching to Investors"],
      experience: "15+ years",
      company: "Founded 3 successful startups",
      availability: "Low",
      bio: "Serial entrepreneur sharing insights on building startups, securing funding, and scaling businesses effectively.",
      price: "$150/hour",
      location: "Austin, TX",
      imgUrl: "/api/placeholder/400/400",
      categories: ["entrepreneurship", "business", "leadership"]
    }
  ];

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'career', name: 'Career Development' },
    { id: 'tech', name: 'Technology' },
    { id: 'coding', name: 'Software Development' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product Management' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'business', name: 'Business Strategy' },
    { id: 'entrepreneurship', name: 'Entrepreneurship' },
    { id: 'interviews', name: 'Interview Preparation' },
    { id: 'portfolio', name: 'Portfolio Building' }
  ];

  // Availability options
  const availabilityOptions = [
    { id: '', name: 'Any Availability' },
    { id: 'high', name: 'High Availability' },
    { id: 'medium', name: 'Medium Availability' },
    { id: 'low', name: 'Low Availability' }
  ];

  // Filter mentors based on search and filters
  const filteredMentors = mentors.filter(mentor => {
    // Filter by search term
    const matchesSearchTerm = 
      searchTerm === '' || 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || mentor.categories.includes(selectedCategory);
    
    // Filter by availability
    const matchesAvailability = selectedAvailability === '' || mentor.availability.toLowerCase() === selectedAvailability.toLowerCase();
    
    return matchesSearchTerm && matchesCategory && matchesAvailability;
  });

  // Handle starting a chat
  const handleStartChat = (mentorId) => {
    console.log(`Starting chat with mentor ID: ${mentorId}`);
    redirect('/chat');
    // setActiveMentorChat(mentorId);
    // // In a real app, this would open a chat interface or redirect to a chat page
    // setTimeout(() => {
    //   setActiveMentorChat(null);
    //   alert(`Chat started with mentor ID: ${mentorId}`);
    // }, 1000);
  };

  // Handle starting a video call
  const handleStartVideoCall = (mentorId) => {
    redirect('/video');
    setActiveVideoCall(mentorId);
    // In a real app, this would initialize a video call or redirect to a video call page
    setTimeout(() => {
      setActiveVideoCall(null);
      alert(`Video call initiated with mentor ID: ${mentorId}`);
    }, 1000);
  };

  // Toggle view mode between grid and list
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar cur_url='mentors'/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-3 text-3xl font-bold text-gray-900">Find Your Perfect Mentor</h1>
          </div>
          <p className="mt-2 text-lg text-gray-600">
            Connect with industry experts who can guide your career journey
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative flex-grow md:mr-4 mb-4 md:mb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search by name, expertise, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Toggle & View Toggles */}
            <div className="flex items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
              >
                <Filter className="h-4 w-4 mr-1" />
                Filters
                <ChevronDown className={`ml-1 h-4 w-4 transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => toggleViewMode('grid')}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-l-md focus:outline-none ${
                    viewMode === 'grid' 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => toggleViewMode('list')}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-r-md focus:outline-none ${
                    viewMode === 'list' 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-r border-t border-b border-gray-300'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Specialty Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              {/* Availability Filter */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                  Mentor Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                >
                  {availabilityOptions.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Results Counter */}
        <div className="mb-4 flex items-center text-gray-700">
          <Users className="h-5 w-5 mr-2" />
          <span>
            Showing <span className="font-medium">{filteredMentors.length}</span> mentors
          </span>
        </div>
        
        {/* Mentor Grid/List */}
        {filteredMentors.length > 0 ? (
          viewMode === 'grid' ? (
            // Grid View
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <div key={mentor.id} className="bg-white shadow rounded-lg overflow-hidden">
                  {/* Mentor Image */}
                  <div className="flex justify-center bg-gray-100 pt-6">
                    <img 
                      src={mentor.imgUrl} 
                      alt={mentor.name} 
                      className="h-40 w-40 object-cover rounded-full border-4 border-white shadow-lg" 
                    />
                  </div>
                  
                  {/* Mentor Info */}
                  <div className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {mentor.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{mentor.title}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center text-amber-500 mb-2">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-gray-800 font-medium">{mentor.rating}</span>
                        <span className="ml-1 text-gray-500">({mentor.reviewCount} reviews)</span>
                      </div>
                      
                      {/* Availability Badge */}
                      <div className="mb-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                          ${mentor.availability === 'High' ? 'bg-green-100 text-green-800' : 
                           mentor.availability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                           'bg-red-100 text-red-800'}`}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {mentor.availability} Availability
                        </span>
                      </div>
                      
                      {/* Location and Price */}
                      <div className="flex justify-center items-center space-x-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {mentor.location}
                        </div>
                        <div>|</div>
                        <div className="flex items-center font-medium">
                          {mentor.price}
                        </div>
                      </div>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {mentor.specialties.slice(0, 3).map((specialty, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex mt-4">
                      <button
                        onClick={() => handleStartChat(mentor.id)}
                        className={`flex-1 flex justify-center items-center px-4 py-2 mr-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                          activeMentorChat === mentor.id ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                        disabled={activeMentorChat === mentor.id}
                      >
                        {activeMentorChat === mentor.id ? (
                          <>
                            <span className="animate-pulse">Connecting...</span>
                          </>
                        ) : (
                          <a href='/chat'>
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Chat
                          </a>
                        )}
                      </button>
                      
                      <button
                        
                        className={`flex-1 flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                          activeVideoCall === mentor.id ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                        disabled={activeVideoCall === mentor.id}
                      >
                        {activeVideoCall === mentor.id ? (
                          <>
                            <span className="animate-pulse">Connecting...</span>
                          </>
                        ) : (
                          <div>
                            
                            <a href="/video"><Video className="h-4 w-4 mr-1" /> Call</a>
                          </div>
                        )}
                      </button>
                    </div>
                    
                    {/* View Profile Link */}
                    <div className="mt-3 text-center">
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        View Full Profile
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-4">
              {filteredMentors.map((mentor) => (
                <div key={mentor.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="p-6 flex flex-col md:flex-row">
                    {/* Mentor Image - Only shown in desktop view */}
                    <div className="hidden md:block md:flex-shrink-0 mr-6">
                      <img 
                        src={mentor.imgUrl} 
                        alt={mentor.name} 
                        className="h-32 w-32 object-cover rounded-full border-2 border-white shadow" 
                      />
                    </div>
                    
                    {/* Mentor Info */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {mentor.name}
                          </h3>
                          <p className="text-gray-600">{mentor.title}</p>
                          
                          {/* Company and Experience */}
                          <p className="text-sm text-gray-500 mt-1">
                            <Briefcase className="inline h-3 w-3 mr-1" />
                            {mentor.company} • {mentor.experience} experience
                          </p>
                          
                          {/* Location and Price */}
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {mentor.location}
                            </div>
                            <div>|</div>
                            <div className="flex items-center font-medium">
                              {mentor.price}
                            </div>
                          </div>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex flex-col items-end">
                          <div className="flex items-center text-amber-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="ml-1 text-gray-800 font-medium">{mentor.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">({mentor.reviewCount} reviews)</span>
                          
                          {/* Availability Badge */}
                          <span className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${mentor.availability === 'High' ? 'bg-green-100 text-green-800' : 
                             mentor.availability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                             'bg-red-100 text-red-800'}`}
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {mentor.availability} Availability
                          </span>
                        </div>
                      </div>
                      
                      {/* Bio and Specialties */}
                      <div className="mt-3">
                        <p className="text-gray-600 text-sm">
                          {mentor.bio}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {mentor.specialties.map((specialty, index) => (
                            <span 
                              key={index} 
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex mt-4 space-x-3">
                        <button
                          onClick={() => handleStartChat(mentor.id)}
                          className={`flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                            activeMentorChat === mentor.id ? 'opacity-75 cursor-not-allowed' : ''
                          }`}
                          disabled={activeMentorChat === mentor.id}
                        >
                          {activeMentorChat === mentor.id ? (
                            <>
                              <span className="animate-pulse">Connecting...</span>
                            </>
                          ) : (
                            <>
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Message
                            </>
                          )}
                        </button>
                        
                        <button
                          onClick={() => handleStartVideoCall(mentor.id)}
                          className={`flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                            activeVideoCall === mentor.id ? 'opacity-75 cursor-not-allowed' : ''
                          }`}
                          disabled={activeVideoCall === mentor.id}
                        >
                          {activeVideoCall === mentor.id ? (
                            <>
                              <span className="animate-pulse">Connecting...</span>
                            </>
                          ) : (
                            <>
                              <Video className="h-4 w-4 mr-1" />
                              Video Call
                            </>
                          )}
                        </button>
                        
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          Schedule
                        </button>
                        
                        <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No mentors found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your filters or search terms to find mentors that match your needs.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedAvailability('');
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}