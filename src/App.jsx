import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch, FiHome, FiCode, FiFileText } from 'react-icons/fi';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import WriteUps from './components/WriteUps';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeSection, setActiveSection] = useState('welcome');

  // Data for search functionality
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce solution with microservices architecture",
      tech: ["React", "Node.js", "MongoDB"],
      id: "projects"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management system with real-time updates",
      tech: ["Next.js", "Firebase", "Tailwind"],
      id: "projects"
    }
  ];

  const articles = [
    {
      title: "Optimizing React Performance",
      excerpt: "Best practices for building high-performance React applications...",
      id: "writeups"
    },
    {
      title: "Cloud Architecture Patterns",
      excerpt: "Designing scalable cloud infrastructure for modern applications...",
      id: "writeups"
    }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    const results = [
      ...projects.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) || 
        project.description.toLowerCase().includes(lowerQuery)
      ).map(item => ({ ...item, type: 'Project' })),
      
      ...articles.filter(article => 
        article.title.toLowerCase().includes(lowerQuery) || 
        article.excerpt.toLowerCase().includes(lowerQuery)
      ).map(item => ({ ...item, type: 'Article' }))
    ];

    setSearchResults(results);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'projects', 'writeups'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded shadow-lg"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar Navigation - Always visible on desktop, toggleable on mobile */}
      <aside className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transform transition-transform duration-300 fixed
        w-64 h-full bg-gray-50 border-r z-20`}>
        <div className="p-6 h-full flex flex-col">
          <h1 className="text-xl font-bold mb-8">Yoga-Arsyad Portfolio</h1>
          
          <nav className="space-y-2 flex-1">
            <button
              onClick={() => handleNavigation('welcome')}
              className={`w-full text-left py-3 px-4 rounded-lg flex items-center ${
                activeSection === 'welcome' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <FiHome className="mr-3" />
              Welcome
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className={`w-full text-left py-3 px-4 rounded-lg flex items-center ${
                activeSection === 'projects' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <FiCode className="mr-3" />
              Projects
            </button>
            <button
              onClick={() => handleNavigation('writeups')}
              className={`w-full text-left py-3 px-4 rounded-lg flex items-center ${
                activeSection === 'writeups' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <FiFileText className="mr-3" />
              Write-Ups
            </button>
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-20 shadow-lg">
        <div className="flex justify-around py-3">
          <button 
            onClick={() => handleNavigation('welcome')}
            className={`flex flex-col items-center p-2 ${activeSection === 'welcome' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <FiHome size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            onClick={() => handleNavigation('projects')}
            className={`flex flex-col items-center p-2 ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <FiCode size={20} />
            <span className="text-xs mt-1">Projects</span>
          </button>
          <button 
            onClick={() => handleNavigation('writeups')}
            className={`flex flex-col items-center p-2 ${activeSection === 'writeups' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <FiFileText size={20} />
            <span className="text-xs mt-1">Write-Ups</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto md:ml-64 pb-16 md:pb-0">
        {/* Fixed Header */}
        <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 md:hidden">
                <h1 className="text-xl font-bold text-gray-900">Yoga-Arsyad</h1>
              </div>
              
              <div className="flex-1 max-w-md ml-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects or articles..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="bg-blue-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <h2 className="text-lg font-semibold mb-2">Search Results ({searchResults.length})</h2>
              <div className="space-y-3">
                {searchResults.map((result, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      handleNavigation(result.id);
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                  >
                    <div className="flex justify-between">
                      <h3 className="font-medium">{result.title}</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {result.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {result.description || result.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <div className="p-6">
          <Welcome id="welcome" className={activeSection !== 'welcome' ? 'hidden md:block' : ''} />
          <Projects id="projects" projects={projects} className={activeSection !== 'projects' ? 'hidden md:block' : ''} />
          <WriteUps id="writeups" articles={articles} className={activeSection !== 'writeups' ? 'hidden md:block' : ''} />
        </div>
      </main>
    </div>
  );
}