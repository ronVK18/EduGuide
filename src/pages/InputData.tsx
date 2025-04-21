import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Save
} from 'lucide-react';
import { redirect, useNavigate } from 'react-router-dom';

export default function InputData() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      bio: ""
    },
    skills: [{ name: "", level: 50 }],
    education: [{ degree: "", institution: "", year: "", description: "" }],
    certifications: [{ name: "", issuer: "", date: "" }],
    careerGoals: [""]
  });
  
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    skills: true,
    education: true,
    certifications: true,
    careerGoals: true
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Toggle section visibility
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  // Handle form input changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value
      }
    });
  };
  
  // Handle array field changes (skills, education, certifications, goals)
  const handleArrayFieldChange = (field, index, subfield, value) => {
    const updatedItems = [...formData[field]];
    updatedItems[index] = { 
      ...updatedItems[index], 
      [subfield]: value 
    };
    
    setFormData({
      ...formData,
      [field]: updatedItems
    });
  };
  
  // Add new item to array fields
  const addArrayItem = (field, defaultValue) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], defaultValue]
    });
  };
  
  // Remove item from array fields
  const removeArrayItem = (field, index) => {
    const updatedItems = [...formData[field]];
    updatedItems.splice(index, 1);
    setFormData({
      ...formData,
      [field]: updatedItems
    });
  };
  
  // Handle form submission
  // Updated handleSubmit function to connect to the backend API
const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Display loading state (optional)
    //   setIsSubmitting(true);
      
      // Send data to the backend API
      const response = await fetch('http://localhost:5000/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to save profile');
      }
      
      // Show success message
      setFormSubmitted(true);
      console.log("Profile saved successfully:", data);
      navigate('/home')
      // Reset form submission status after 3 seconds
      // setTimeout(() => {
      //   setFormSubmitted(false);
      // }, 3000);
    } catch (error) {
      // Handle errors
      console.error("Error saving profile:", error);
    //   setSubmitError(error.message);
      
      // Clear error after 5 seconds
      setTimeout(() => {
        // setSubmitError(null);
      }, 5000);
    } finally {
      // Reset loading state
    //   setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg mb-5">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">User Profile Registration</h2>
            <p className="mt-1 text-sm text-gray-500">Complete the form below to create your profile</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="bg-white shadow rounded-lg mb-5">
            <div 
              className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('personalInfo')}
            >
              <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
              {expandedSections.personalInfo ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </div>
            
            {expandedSections.personalInfo && (
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.personalInfo.name}
                          onChange={handlePersonalInfoChange}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.personalInfo.email}
                          onChange={handlePersonalInfoChange}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.personalInfo.phone}
                          onChange={handlePersonalInfoChange}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          value={formData.personalInfo.location}
                          onChange={handlePersonalInfoChange}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300"
                          placeholder="New York, NY"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                    <div className="mt-1">
                      <textarea
                        id="bio"
                        name="bio"
                        rows={4}
                        value={formData.personalInfo.bio}
                        onChange={handlePersonalInfoChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                        placeholder="A brief description about yourself, your background, and your career aspirations."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Skills Section */}
          <div className="bg-white shadow rounded-lg mb-5">
            <div 
              className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('skills')}
            >
              <h3 className="text-lg font-medium text-gray-900">Skills</h3>
              {expandedSections.skills ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </div>
            
            {expandedSections.skills && (
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center justify-between">
                      <div className="w-2/5 pr-2">
                        <label htmlFor={`skill-${index}`} className="block text-sm font-medium text-gray-700">
                          Skill Name
                        </label>
                        <input
                          type="text"
                          id={`skill-${index}`}
                          value={skill.name}
                          onChange={(e) => handleArrayFieldChange('skills', index, 'name', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="Python, React, etc."
                        />
                      </div>
                      
                      <div className="w-2/5 pr-2">
                        <label htmlFor={`skill-level-${index}`} className="block text-sm font-medium text-gray-700">
                          Proficiency Level: {skill.level}%
                        </label>
                        <input
                          type="range"
                          id={`skill-level-${index}`}
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => handleArrayFieldChange('skills', index, 'level', parseInt(e.target.value))}
                          className="mt-1 w-full"
                        />
                      </div>
                      
                      <div className="flex items-end pb-1">
                        {formData.skills.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeArrayItem('skills', index)}
                            className="ml-2 text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() => addArrayItem('skills', { name: "", level: 50 })}
                  className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Skill
                </button>
              </div>
            )}
          </div>
          
          {/* Education Section */}
          <div className="bg-white shadow rounded-lg mb-5">
            <div 
              className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('education')}
            >
              <h3 className="text-lg font-medium text-gray-900">Education</h3>
              {expandedSections.education ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </div>
            
            {expandedSections.education && (
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                {formData.education.map((edu, index) => (
                  <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                      <div className="sm:col-span-2">
                        <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700">
                          Degree / Certificate
                        </label>
                        <input
                          type="text"
                          id={`degree-${index}`}
                          value={edu.degree}
                          onChange={(e) => handleArrayFieldChange('education', index, 'degree', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="Bachelor of Science in Computer Science"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor={`institution-${index}`} className="block text-sm font-medium text-gray-700">
                          Institution
                        </label>
                        <input
                          type="text"
                          id={`institution-${index}`}
                          value={edu.institution}
                          onChange={(e) => handleArrayFieldChange('education', index, 'institution', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="University of Example"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor={`year-${index}`} className="block text-sm font-medium text-gray-700">
                          Years
                        </label>
                        <input
                          type="text"
                          id={`year-${index}`}
                          value={edu.year}
                          onChange={(e) => handleArrayFieldChange('education', index, 'year', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="2020-2024"
                        />
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor={`edu-description-${index}`} className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          id={`edu-description-${index}`}
                          value={edu.description}
                          onChange={(e) => handleArrayFieldChange('education', index, 'description', e.target.value)}
                          rows={2}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="Description of your studies, achievements, etc."
                        />
                      </div>
                    </div>
                    
                    {formData.education.length > 1 && (
                      <div className="mt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeArrayItem('education', index)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() => addArrayItem('education', { degree: "", institution: "", year: "", description: "" })}
                  className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Education
                </button>
              </div>
            )}
          </div>
          
          {/* Certifications Section */}
          <div className="bg-white shadow rounded-lg mb-5">
            <div 
              className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('certifications')}
            >
              <h3 className="text-lg font-medium text-gray-900">Certifications</h3>
              {expandedSections.certifications ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </div>
            
            {expandedSections.certifications && (
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                {formData.certifications.map((cert, index) => (
                  <div key={index} className="mb-4">
                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4">
                      <div>
                        <label htmlFor={`cert-name-${index}`} className="block text-sm font-medium text-gray-700">
                          Certification Name
                        </label>
                        <input
                          type="text"
                          id={`cert-name-${index}`}
                          value={cert.name}
                          onChange={(e) => handleArrayFieldChange('certifications', index, 'name', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="AWS Certified Developer"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor={`cert-issuer-${index}`} className="block text-sm font-medium text-gray-700">
                          Issuing Organization
                        </label>
                        <input
                          type="text"
                          id={`cert-issuer-${index}`}
                          value={cert.issuer}
                          onChange={(e) => handleArrayFieldChange('certifications', index, 'issuer', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="Amazon Web Services"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor={`cert-date-${index}`} className="block text-sm font-medium text-gray-700">
                          Date
                        </label>
                        <input
                          type="text"
                          id={`cert-date-${index}`}
                          value={cert.date}
                          onChange={(e) => handleArrayFieldChange('certifications', index, 'date', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="March 2023"
                        />
                      </div>
                    </div>
                    
                    {formData.certifications.length > 1 && (
                      <div className="mt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeArrayItem('certifications', index)}
                          className="inline-flex items-center px-2 py-1 border border-transparent text-xs leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <Trash2 className="h-3 w-3 mr-1" /> Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() => addArrayItem('certifications', { name: "", issuer: "", date: "" })}
                  className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Certification
                </button>
              </div>
            )}
          </div>
          
          {/* Career Goals Section */}
          <div className="bg-white shadow rounded-lg mb-5">
            <div 
              className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('careerGoals')}
            >
              <h3 className="text-lg font-medium text-gray-900">Career Goals</h3>
              {expandedSections.careerGoals ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </div>
            
            {expandedSections.careerGoals && (
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                {formData.careerGoals.map((goal, index) => (
                  <div key={index} className="mb-3 flex items-center">
                    <div className="flex-grow">
                      <input
                        type="text"
                        value={goal}
                        onChange={(e) => {
                          const updatedGoals = [...formData.careerGoals];
                          updatedGoals[index] = e.target.value;
                          setFormData({
                            ...formData,
                            careerGoals: updatedGoals
                          });
                        }}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-sm border-gray-300"
                        placeholder="Enter a career goal"
                      />
                    </div>
                    
                    {formData.careerGoals.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('careerGoals', index)}
                        className="ml-2 text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() => addArrayItem('careerGoals', "")}
                  className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Goal
                </button>
              </div>
            )}
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Profile
            </button>
          </div>
          
          {/* Success Message */}
          {formSubmitted && (
            <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  {/* Success icon could go here */}
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    Profile saved successfully! Data has been stored.
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}