import React, { useState } from "react";
import { Code, Map, ChevronRight, BookOpen, Github, Globe, Server, Database, Laptop, Brain, Award, CheckCircle } from "lucide-react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Roadmap() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [url,setUrl] = useState("");
  const fetchData =async (id) => {
    setSelectedLanguage(id);
    const data=programmingLanguages.find((language) => language.id === id);
    setUrl(data.url)
   
  }
  const programmingLanguages = [
    {
      id: "javascript",
      name: "JavaScript",
      icon: <Code className="h-6 w-6 text-yellow-500" />,
      color: "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
      description: "Frontend and backend development with the web's most popular language.",
      url:"http://www.plantuml.com/plantuml/img/PLB1JiCm3BtlAtpkWMyOQwaGGcnQ9-vkQafOQaUkip6-7ZNj1eXJxFVYf-UNh4T3jS5pDs1S5V249soS-cYhee0wSOS3iM4OLqLHG7DXmyzSLcW8XqkacNb5zTY6fIk5JIL0OvgS9SqmFFjMKJsDWDn1hJZGMVGuZ-m9dUNgdliKK6VPH7SVURYY4mM9aniuY2o6NgHRBXJ0SSZd1biAqyY6HeETeZFlRiOwWgtsoFuBpGjdj4xifWQ3jmiq555_o0TLKNX4xeBdVj8jKOaKTcZlisgjmaRSNKsIBaRSyJzQfp05W-xuXu0zZPBqQhGIbtBoDn-7PAB--X9R3fu9IaawpkcMxnW2SRy8R5JE8ocKCaGqt_ffjypiIDz41sH7i8tcXzzHLDIclfyMNHDtoyVu1W00"
    },
    {
      id: "python",
      name: "Python",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-100 border-blue-300 hover:bg-blue-200",
      description: "Versatile language for web, data science, AI, and automation.",
      url:"https://www.plantuml.com/plantuml/img/ZP9DRi9038NtESMi8t47487-Y48aKBjs4eiQPkneuZHDJrzb1a68aDfT_Epu-NsQUQFWrH5N3keaDRcNemVdY8-6sEIzVWedQMgMmYNMsYHfcfeC5CoXhp6MIs7rOitQIXU4TSkbad1ixueJbZhRUK9MhCOUeR_w7ZQJi7a6hcoKpOOA3vuk5jlMvNtuoe4hYE8RQ6r5BHMXt9Tq9frj47mu-I1Yu-1hM_UAtcn5iH0vnqKXctd9Lg5y8atkNMFCVKd89Jvo2CBbhBs2Daug39Rc0mkJuHTQgHsoHYeMccYTdO2FCimjMXK7G_ZGk9LcmNttYHv7jtR4rxCM3BPlg9aokO6wenD_UgUc1Ki_DyCfGeH2BjdoGU-JrAmzEEp4dw_9xfJ7mSRiflF_npZYCTdnDwavSdLvsBy0"
    },
    {
      id: "java",
      name: "Java",
      icon: <Code className="h-6 w-6 text-red-500" />,
      color: "bg-red-100 border-red-300 hover:bg-red-200",
      description: "Enterprise-grade programming with strong typing and cross-platform support.",
      url:"http://www.plantuml.com/plantuml/img/PP7TRe9044RlUOg9bpI-GAyqM6CRZAQqwVN0ViAso-nc6QYyVIDeO-Bbd4dEDpyxH93jI1lGqR7evpwdoXlGoKTQh4lVAxtnm8ld95brob5RAwRba3nDF4bJseArZ-YID4tfK7wZqkKXMeZ2JEpeM4y-jlGg1W5Y83erThPkbZa6ECfPwfvhJFpTbtsdLA3gezLnOZd76fJvjkrbPhGEmTcArNgPmzTYehVcqg3DHUj3UylwGld0DkX-r8TxqSHVH153j1sey2VzvOWfpmmiolLrrIrt-g0iAdPSMdSRU-jmjdVrl9gWkpWeQzWvoCrOA10e1qUnKbFMns4-IERRu72cOXJbyuJsQ7qSQS_2DVxZFve8DbJm2JecAuYv_kiF"
    },
    {
      id: "csharp",
      name: "C#",
      icon: <Code className="h-6 w-6 text-purple-500" />,
      color: "bg-purple-100 border-purple-300 hover:bg-purple-200",
      description: "Microsoft's language for Windows, game, and cross-platform development.",
      url:"https://www.plantuml.com/plantuml/img/PP71JkD038RlUGfBt28j3y29tL3W03GYNSvnCwOr97RayMZ9FZtg95L0tER__8_zU-QUZ80Z-96Wxb7yx-C3T1e8NjK0OM090uw0UqqErSLLKRHjMrn7H_EbM9HGcnuCXu7b02nGNHHb2PLAHwF7eYnBsExVgFDVMsCIf_3rHgxlff6WcQBJa7KpYUD7FcxCrE0U9VHdzsFgdVreX656YnysFGqaoymNDCPzJxEwGSSyPWaqag6hpQfISTCU6hVKUR9iWbl3WVwflKT02V30UqFZfS7bqsQtEbPKgL5Mlvlw1EOTnDcdRtRuGz6XDkoSEph720HREw3mVtHMMUapfKYhRAXBnZwjf2PxLHjGkfCDTghz77lpuIIHLPPNuPZmj6aAh3z9RfRnCyKZsaYMrLEw8o-kISBvszks_GG0"
    },
    {
      id: "golang",
      name: "Go",
      icon: <Code className="h-6 w-6 text-cyan-500" />,
      color: "bg-cyan-100 border-cyan-300 hover:bg-cyan-200",
      description: "Modern language built for simplicity, performance, and concurrency.",
      url:"http://www.plantuml.com/plantuml/img/RLBBJiGm3BptAooEHVm09rPb5uGAL5fMN74RRzVGE9NZ5Fhtg0_n41nd_9Zn9BUa11p1JWHLXsA7-nAQu0YEGU5iKuTaS1EWH6aJjdHscMKlLz5GpRCuZtsM_wndUGuxGajACSlp76vGQsm9Yj1rr1W7cUaYI9DKIPeHzgdlWzhCFuqzmNwCHdx65Uang4TfQ9dJ4ED5rQ5DD1J1zsXSSySsJjg7kEe-aBq7VODAGwleFKixyyzKmpKDr8NUaooYYnvid6VXQ8fVDhU-9kV8hItJQjYu0SMmNOLs60ss7zIahwaolCCz-Q0Z7E8IIWuxPHBNZPDddsJncyFsmqWY3mHxGt6e3agk5NK-vveZ_fRR6r4F9Q4AImj5qc7PNx9dcvmkQSxljqioHuxTdnp-Qt-iNwcnYyV9wLJxFRE4hHpNAv_PJb2DTlg9xt30RrISdsTN96xzAY-V"
    },
    {
      id: "ruby",
      name: "Ruby",
      icon: <Code className="h-6 w-6 text-red-600" />,
      color: "bg-red-50 border-red-200 hover:bg-red-100",
      description: "Developer-friendly language with elegant syntax and powerful web frameworks.",
      url:"http://www.plantuml.com/plantuml/img/NP11Ri9034NtEONNSmfKIgiAAb2I2vZ4Z4onP-HuQ7FxAaE4gcwV_d_-ycPoD1VMKJ0t0Tfodk5aAHgAi4OueCQ2aPeGu8tGYz7KX13WTLOK7g2VCskiw7Y-qk1mD2Pr6Ylh1kFi_qm1EfPy8-XcTVofRaEXxsHV3tlTaHHQvDkqDXJTSCdsAQtmetrvnjz95WZR95AKdTUXLR5DUdaczyYHb-ZkJkf_3duIUSaFi3J8I0UQcWtfkFxe5m00"
    }
  ];

  const roadmaps = {
    javascript: {
      title: "JavaScript Developer Roadmap",
      intro: "A complete path to become a proficient JavaScript developer across frontend and backend technologies.",
      stages: [
        {
          title: "Fundamentals",
          steps: [
            "Basic syntax and variables",
            "Control structures and functions",
            "DOM manipulation",
            "Event handling",
            "ES6+ features (arrow functions, destructuring, etc.)",
            "Asynchronous JavaScript (Promises, async/await)"
          ],
          icon: <BookOpen className="h-8 w-8 text-yellow-500" />
        },
        {
          title: "Frontend Development",
          steps: [
            "Advanced HTML5 & CSS3",
            "CSS frameworks (Bootstrap, Tailwind)",
            "Frontend frameworks (React, Vue, Angular)",
            "State management (Redux, Context API)",
            "Responsive design principles",
            "Web accessibility standards"
          ],
          icon: <Globe className="h-8 w-8 text-yellow-500" />
        },
        {
          title: "Backend Development",
          steps: [
            "Node.js fundamentals",
            "Express.js framework",
            "RESTful API design",
            "Database integration (MongoDB, PostgreSQL)",
            "Authentication & authorization",
            "Server deployment & hosting"
          ],
          icon: <Server className="h-8 w-8 text-yellow-500" />
        },
        {
          title: "Advanced Concepts",
          steps: [
            "TypeScript integration",
            "Testing (Jest, Cypress)",
            "Performance optimization",
            "Progressive Web Apps (PWAs)",
            "CI/CD pipelines",
            "Serverless architecture"
          ],
          icon: <Brain className="h-8 w-8 text-yellow-500" />
        }
      ]
    },
    python: {
      title: "Python Developer Roadmap",
      intro: "A comprehensive guide to mastering Python for various application domains including web, data, and AI.",
      stages: [
        {
          title: "Python Basics",
          steps: [
            "Syntax and data types",
            "Control flow and functions",
            "Object-oriented programming",
            "Modules and packages",
            "File I/O and exception handling",
            "Virtual environments"
          ],
          icon: <BookOpen className="h-8 w-8 text-blue-500" />
        },
        {
          title: "Web Development",
          steps: [
            "Flask and Django frameworks",
            "API development with FastAPI",
            "Database integration (SQLAlchemy)",
            "Template engines",
            "Authentication systems",
            "Deployment strategies"
          ],
          icon: <Globe className="h-8 w-8 text-blue-500" />
        },
        {
          title: "Data Science",
          steps: [
            "NumPy and Pandas",
            "Data visualization (Matplotlib, Seaborn)",
            "Machine learning (scikit-learn)",
            "Deep learning (TensorFlow, PyTorch)",
            "Jupyter notebooks",
            "Statistical analysis"
          ],
          icon: <Database className="h-8 w-8 text-blue-500" />
        },
        {
          title: "Advanced Applications",
          steps: [
            "Automation and scripting",
            "Testing frameworks (pytest)",
            "DevOps integration",
            "Natural language processing",
            "Computer vision",
            "Concurrent programming"
          ],
          icon: <Brain className="h-8 w-8 text-blue-500" />
        }
      ]
    },
    java: {
      title: "Java Developer Roadmap",
      intro: "A structured path to becoming a professional Java developer in enterprise and application development.",
      stages: [
        {
          title: "Core Java",
          steps: [
            "Java syntax and OOP concepts",
            "Collections framework",
            "Exception handling",
            "Generics and lambda expressions",
            "Stream API",
            "Multithreading and concurrency"
          ],
          icon: <BookOpen className="h-8 w-8 text-red-500" />
        },
        {
          title: "Frameworks & Tools",
          steps: [
            "Spring Framework ecosystem",
            "Hibernate ORM",
            "Build tools (Maven, Gradle)",
            "Unit testing (JUnit, Mockito)",
            "Logging frameworks",
            "Dependency injection"
          ],
          icon: <Laptop className="h-8 w-8 text-red-500" />
        },
        {
          title: "Enterprise Development",
          steps: [
            "Microservices architecture",
            "RESTful web services",
            "Spring Boot applications",
            "Database design patterns",
            "Authentication with Spring Security",
            "Message queues (Kafka, RabbitMQ)"
          ],
          icon: <Server className="h-8 w-8 text-red-500" />
        },
        {
          title: "Advanced Topics",
          steps: [
            "JVM tuning and optimization",
            "Design patterns",
            "Integration testing",
            "DevOps practices",
            "Cloud deployment (AWS, Azure)",
            "Reactive programming"
          ],
          icon: <Brain className="h-8 w-8 text-red-500" />
        }
      ]
    },
    csharp: {
      title: "C# Developer Roadmap",
      intro: "A comprehensive guide to becoming a skilled C# developer with expertise in Microsoft technologies.",
      stages: [
        {
          title: "C# Fundamentals",
          steps: [
            "C# syntax and features",
            "Object-oriented principles",
            "LINQ queries",
            "Asynchronous programming",
            "Collections and generics",
            "Exception handling"
          ],
          icon: <BookOpen className="h-8 w-8 text-purple-500" />
        },
        {
          title: ".NET Ecosystem",
          steps: [
            ".NET Framework vs .NET Core",
            "ASP.NET Core MVC",
            "Entity Framework Core",
            "Dependency injection",
            "Web API development",
            "Blazor for web applications"
          ],
          icon: <Globe className="h-8 w-8 text-purple-500" />
        },
        {
          title: "Desktop & Mobile",
          steps: [
            "WPF for desktop applications",
            "Windows Forms",
            "Xamarin for mobile development",
            "MAUI (Multi-platform App UI)",
            "UI/UX best practices",
            "App deployment strategies"
          ],
          icon: <Laptop className="h-8 w-8 text-purple-500" />
        },
        {
          title: "Advanced Development",
          steps: [
            "Design patterns implementation",
            "Unit testing (MSTest, NUnit)",
            "Azure cloud integration",
            "Microservices with .NET",
            "SignalR for real-time applications",
            "CQRS and event sourcing"
          ],
          icon: <Brain className="h-8 w-8 text-purple-500" />
        }
      ]
    },
    golang: {
      title: "Go Developer Roadmap",
      intro: "A guide to becoming a proficient Go developer focused on performance and distributed systems.",
      stages: [
        {
          title: "Go Basics",
          steps: [
            "Go syntax and data types",
            "Functions and methods",
            "Structs and interfaces",
            "Error handling",
            "Goroutines and channels",
            "Packages and modules"
          ],
          icon: <BookOpen className="h-8 w-8 text-cyan-500" />
        },
        {
          title: "Web Development",
          steps: [
            "Standard library (net/http)",
            "Popular frameworks (Gin, Echo)",
            "Middleware concepts",
            "JSON handling and serialization",
            "Database interactions (SQL, GORM)",
            "Authentication implementations"
          ],
          icon: <Globe className="h-8 w-8 text-cyan-500" />
        },
        {
          title: "Systems Programming",
          steps: [
            "Concurrency patterns",
            "Microservices architecture",
            "gRPC implementations",
            "Docker and containerization",
            "Network programming",
            "Performance optimization"
          ],
          icon: <Server className="h-8 w-8 text-cyan-500" />
        },
        {
          title: "Advanced Go",
          steps: [
            "Testing strategies",
            "Code generation",
            "Reflection and unsafe",
            "Memory management",
            "Distributed systems",
            "DevOps integration (CI/CD)"
          ],
          icon: <Brain className="h-8 w-8 text-cyan-500" />
        }
      ]
    },
    ruby: {
      title: "Ruby Developer Roadmap",
      intro: "A path to becoming a skilled Ruby developer with a focus on web development and elegant code.",
      stages: [
        {
          title: "Ruby Fundamentals",
          steps: [
            "Ruby syntax and idioms",
            "Object-oriented programming",
            "Ruby blocks and procs",
            "Collections and enumeration",
            "Metaprogramming concepts",
            "Gem management"
          ],
          icon: <BookOpen className="h-8 w-8 text-red-600" />
        },
        {
          title: "Ruby on Rails",
          steps: [
            "MVC architecture",
            "ActiveRecord ORM",
            "Routes and controllers",
            "View templates (ERB, HAML)",
            "Rails helpers and concerns",
            "Asset pipeline"
          ],
          icon: <Globe className="h-8 w-8 text-red-600" />
        },
        {
          title: "Web Development",
          steps: [
            "API development with Rails",
            "Authentication (Devise)",
            "Authorization (CanCanCan, Pundit)",
            "Background jobs (Sidekiq)",
            "Testing (RSpec, Capybara)",
            "Database management"
          ],
          icon: <Server className="h-8 w-8 text-red-600" />
        },
        {
          title: "Advanced Topics",
          steps: [
            "Performance optimization",
            "Advanced Rails patterns",
            "Hotwire and Stimulus",
            "Service objects and DDD",
            "Deployment strategies",
            "Monitoring and maintenance"
          ],
          icon: <Brain className="h-8 w-8 text-red-600" />
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
        <Navbar cur_url="roadmap"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block text-indigo-600">Programming Career Paths</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Select a programming language below to see a detailed roadmap for becoming a proficient developer.
          </p>
        </div>

        {/* Language Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programmingLanguages.map((language) => (
            <button
              key={language.id}
              className={`p-6 border rounded-lg shadow-sm transition-all duration-300 text-left ${language.color} ${
                selectedLanguage === language.id ? "ring-2 ring-indigo-500" : ""
              }`}
              onClick={() => fetchData(language.id)}
            >
              <div className="flex items-center">
                <div className="mr-4">{language.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{language.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{language.description}</p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>

        {/* Roadmap Display */}
        {selectedLanguage && (
          <div className="bg-white shadow rounded-lg p-6 mb-12 animate-fade-in">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{roadmaps[selectedLanguage].title}</h2>
              <p className="mt-2 text-gray-600">{roadmaps[selectedLanguage].intro}</p>
            </div>

            {/* Roadmap Display */}
            <img src={url}/>
           

            {/* Career Opportunities */}
            <div className="mt-12 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-6 w-6 text-indigo-500 mr-2" />
                Career Opportunities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedLanguage === "javascript" && (
                  <>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Frontend Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build interactive user interfaces and web applications</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Full Stack Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Handle both client and server-side development</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Node.js Backend Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Create scalable server applications and APIs</p>
                    </div>
                  </>
                )}
                {selectedLanguage === "python" && (
                  <>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Data Scientist</h4>
                      <p className="text-sm text-gray-600 mt-1">Analyze data and build machine learning models</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Backend Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Develop server-side logic with Django or Flask</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">ML Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build and deploy machine learning systems</p>
                    </div>
                  </>
                )}
                {selectedLanguage === "java" && (
                  <>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Enterprise Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build robust applications for large organizations</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Android Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Create native mobile applications for Android</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Spring Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build microservices and server applications</p>
                    </div>
                  </>
                )}
                {selectedLanguage === "csharp" && (
                  <>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">.NET Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build applications using Microsoft's .NET platform</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Game Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Create games with Unity or other game engines</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Desktop App Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build Windows applications with WPF or MAUI</p>
                    </div>
                  </>
                )}
                {selectedLanguage === "golang" && (
                  <>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Backend Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">Develop high-performance server applications</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">DevOps Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build infrastructure tools and deployment systems</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Systems Programmer</h4>
                      <p className="text-sm text-gray-600 mt-1">Work on distributed systems and microservices</p>
                    </div>
                  </>
                )}
                {selectedLanguage === "ruby" && (
                  <>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Rails Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Build web applications with Ruby on Rails</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">Full Stack Developer</h4>
                      <p className="text-sm text-gray-600 mt-1">Handle both frontend and backend in Rails apps</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900">DevOps Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">Manage deployment and infrastructure for Ruby apps</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            
          </div>
        )}

       
      </div>
    </div>
  );
}