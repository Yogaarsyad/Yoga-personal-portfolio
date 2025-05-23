import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiCode, FiFileText, FiMenu, FiX } from 'react-icons/fi';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded shadow-lg"
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transform transition-transform duration-300 fixed
        w-64 h-full bg-white border-r z-40 shadow-sm`}
      >
        <div className="p-6 h-full flex flex-col">
          <h1 className="text-xl font-bold mb-8">Yoga-Arsyad</h1>
          
          <nav className="space-y-2 flex-1">
            <NavLink 
              to="/" 
              icon={<FiHome />} 
              label="Welcome"
              isActive={location.pathname === '/'}
              onClick={() => setIsSidebarOpen(false)}
            />
            <NavLink 
              to="/projects" 
              icon={<FiCode />} 
              label="Projects"
              isActive={location.pathname === '/projects'}
              onClick={() => setIsSidebarOpen(false)}
            />
            <NavLink 
              to="/writeups" 
              icon={<FiFileText />} 
              label="Write-Ups"
              isActive={location.pathname === '/writeups'}
              onClick={() => setIsSidebarOpen(false)}
            />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto md:ml-64">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavLink({ to, icon, label, isActive, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center p-3 rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-100 text-blue-700' 
          : 'text-gray-700 hover:bg-gray-200'
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  );
}