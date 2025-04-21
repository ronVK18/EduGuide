import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  ChevronRight, 
  BookOpen,
  X,
  ChevronDown,
  Target,
  DollarSign,
  Sliders
} from 'lucide-react';
import Navbar from './Navbar';

export default function JobSearch() {
  // User input states
  const [searchPhase, setSearchPhase] = useState('questions'); // 'questions', 'results'
  const [formInputs, setFormInputs] = useState({
    jobTitle: '',
    location: '',
    experienceLevel: '',
    workType: '',
    salaryRange: '',
    skills: []
  });
  
  const [skillInput, setSkillInput] = useState('');
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Job results state
  const [jobResults, setJobResults] = useState([]);
  
  // Experience levels for dropdown
  const experienceLevels = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior Level (6+ years)' },
    { value: 'executive', label: 'Executive Level' }
  ];
  
  // Work types for dropdown
  const workTypes = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
    { value: 'remote', label: 'Remote' }
  ];
  
  // Salary ranges for dropdown
  const salaryRanges = [
    { value: 'entry', label: 'Up to $50,000' },
    { value: 'mid', label: '$50,000 - $80,000' },
    { value: 'high', label: '$80,000 - $120,000' },
    { value: 'top', label: '$120,000+' }
  ];
  
  // Common skills for suggestions
  const commonSkills = [
    'JavaScript', 'React', 'Python', 'SQL', 'Data Analysis', 
    'Project Management', 'Marketing', 'UX Design', 'Java',
    'NodeJS', 'Communication', 'Leadership', 'Figma', 'AWS'
  ];

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value
    });
  };
  
  // Add skill to the array
  const addSkill = (skill) => {
    if (skill && !formInputs.skills.includes(skill)) {
      setFormInputs({
        ...formInputs,
        skills: [...formInputs.skills, skill]
      });
      setSkillInput('');
    }
  };
  
  // Remove skill from the array
  const removeSkill = (skillToRemove) => {
    setFormInputs({
      ...formInputs,
      skills: formInputs.skills.filter(skill => skill !== skillToRemove)
    });
  };
  
  // Handle skill input keypress (for Enter key)
  const handleSkillKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(skillInput);
    }
  };
  
  // Fetch jobs from the API
  const fetchJobs = async (searchQuery) => {
    try {
      
      setIsLoading(true);
      
      // Create the search query based on user inputs
      const query = encodeURIComponent(searchQuery);
      console.log(query);
      // In a real app, this API call should be made through a backend service to protect your API key
      const response = await fetch(`http://127.0.0.1:5000/jobs/jobs?q=${query}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      
      const data = await response.json();
      return data.jobs || [];
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };
  
  // Format SerpAPI job results to match our UI structure
  const formatJobResults = (apiJobs) => {
    return apiJobs.map((job, index) => {
      // Extract salary information if available
      const salary = job.detected_extensions?.salary || 'Salary not specified';
      
      // Calculate a "match" percentage based on skills (simulated)
      // In a real app, you would implement a proper matching algorithm
      const matchPercentage = Math.floor(Math.random() * 20) + 80; // Random score between 80-99%
      
      return {
        id: index,
        title: job.title || 'Job Title Not Available',
        company: job.company_name || 'Company Not Specified',
        location: job.location || 'Location Not Specified',
        salary: salary,
        match: `${matchPercentage}%`,
        postedDate: job.detected_extensions?.posted_at || 'Recently',
        type: job.detected_extensions?.schedule_type || 'Not Specified',
        description: job.description || 'No description available',
        requirements: job.job_highlights?.[0]?.items || 
                      job.job_highlights?.requirements?.[0]?.items || 
                      ['Requirements not specified'],
        applyLink: job.apply_options[0]['link'] || '#'
      };
    });
  };
  
  // Submit the form and show results
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    let searchQuery = formInputs.jobTitle || 'jobs';
    
    if (formInputs.location) {
      searchQuery += ` in ${formInputs.location}`;
    }
    
    if (formInputs.workType) {
      const workTypeLabel = workTypes.find(type => type.value === formInputs.workType)?.label;
      if (workTypeLabel) searchQuery += ` ${workTypeLabel}`;
    }
    
    // Add top skills to search query (limited to 3 to keep query focused)
    if (formInputs.skills.length > 0) {
      searchQuery += ` ${formInputs.skills.slice(0, 3).join(' ')}`;
    }
    
    // Fetch jobs based on search query
    const apiJobs = await fetchJobs(searchQuery);
    console.log(apiJobs)
    const formattedJobs = formatJobResults(apiJobs);
    console.log(formattedJobs)
    
    setJobResults(formattedJobs);
    setSearchPhase('results');
  };
  
  // Go back to questions form
  const handleBackToSearch = () => {
    setSearchPhase('questions');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cur_url='jobs'/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Job</h1>
          <p className="mt-2 text-lg text-gray-600">
            Let us help you discover opportunities that match your skills and preferences
          </p>
        </div>
        
        {searchPhase === 'questions' ? (
          /* Job Search Questionnaire */
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <h2 className="ml-2 text-xl font-semibold text-gray-800">Tell us what you're looking for</h2>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                    What role are you looking for?
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="e.g. Software Developer, Project Manager"
                      value={formInputs.jobTitle}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Where would you like to work?
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="City, State or Remote"
                      value={formInputs.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                {/* Experience Level */}
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">
                    What is your experience level?
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={formInputs.experienceLevel}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level) => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>
                
                {/* Work Type */}
                <div>
                  <label htmlFor="workType" className="block text-sm font-medium text-gray-700">
                    What type of work are you looking for?
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={formInputs.workType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select work type</option>
                    {workTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                {/* Salary Range */}
                <div>
                  <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
                    What is your expected salary range?
                  </label>
                  <select
                    id="salaryRange"
                    name="salaryRange"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={formInputs.salaryRange}
                    onChange={handleInputChange}
                  >
                    <option value="">Select salary range</option>
                    {salaryRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
                
                {/* Skills */}
                <div className="md:col-span-2">
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                    What skills do you have? (Add up to 10)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="skills"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Type a skill and press Enter"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={handleSkillKeyPress}
                    />
                  </div>
                  
                  {/* Skills tags */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formInputs.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                        <button
                          type="button"
                          className="ml-2 text-indigo-500 hover:text-indigo-700"
                          onClick={() => removeSkill(skill)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  
                  {/* Skill suggestions */}
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Suggested skills:</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {commonSkills
                        .filter(skill => !formInputs.skills.includes(skill))
                        .slice(0, 8)
                        .map((skill, index) => (
                          <button
                            type="button"
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                            onClick={() => addSkill(skill)}
                          >
                            + {skill}
                          </button>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Searching..."
                  ) : (
                    <>
                      Find Matching Jobs
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Job Search Results */
          <div>
            {/* Search Controls */}
            <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex items-center mb-4 sm:mb-0">
                  <button
                    onClick={handleBackToSearch}
                    className="mr-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                  >
                    <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
                    Back to Search
                  </button>
                  <span className="text-gray-700 font-medium">
                    {jobResults.length} jobs found
                  </span>
                </div>
                
                <button
                  onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <Sliders className="h-5 w-5 mr-1" />
                  Filters
                  <ChevronDown className={`h-4 w-4 ml-1 transform ${isFiltersExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Expanded filters */}
              {isFiltersExpanded && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="filter-location" className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      id="filter-location"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="City or Remote"
                      value={formInputs.location}
                      onChange={(e) => setFormInputs({...formInputs, location: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="filter-type" className="block text-sm font-medium text-gray-700">
                      Job Type
                    </label>
                    <select
                      id="filter-type"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={formInputs.workType}
                      onChange={(e) => setFormInputs({...formInputs, workType: e.target.value})}
                    >
                      <option value="">All Job Types</option>
                      {workTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-end">
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Applying..." : "Apply Filters"}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Job Listings */}
            <div className="space-y-4">
              {isLoading ? (
                <div className="bg-white shadow rounded-lg p-6 text-center">
                  <p className="text-gray-500 text-lg">Loading jobs...</p>
                </div>
              ) : jobResults.length > 0 ? (
                jobResults.map((job) => (
                  <div key={job.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-bold text-gray-900">
                            {job.title}
                          </h2>
                          <p className="text-gray-600 mt-1">{job.company} • {job.location}</p>
                          
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <Target className="h-3 w-3 mr-1" />
                              {job.match} Match
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <Clock className="h-3 w-3 mr-1" />
                              {job.postedDate}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {job.type}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <DollarSign className="h-3 w-3 mr-1" />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-700">
                          {job.description}
                        </p>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-900">Requirements:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-gray-500 list-disc list-inside">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-5 flex justify-end">
                        <a 
                          href={job.applyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white shadow rounded-lg p-6 text-center">
                  <p className="text-gray-500 text-lg">No matching jobs found. Try adjusting your search criteria.</p>
                  <button
                    onClick={handleBackToSearch}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Refine Search
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}