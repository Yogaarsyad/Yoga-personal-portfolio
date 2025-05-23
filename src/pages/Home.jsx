import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactInfo from '../components/ContactInfo';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import ProfileImage from '../assets/image1.svg';

export default function Home() {
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <section id="welcome">
      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-white shadow-md">
          <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tri Yoga Arsyad</h1>
        <p className="text-xl text-gray-600">Computer Engineering Student</p>
        <ContactInfo />
      </motion.div>

      {/* Content Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b border-gray-200">
          {['introduction', 'education', 'experience', 'certificates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 font-medium ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'introduction' && (
                <div className="text-gray-600 space-y-4">
                  <p>Hello, I'm <strong>Tri Yoga Arsyad</strong>, a <strong>Computer Engineering</strong> student at <strong>University of Indonesia</strong>.</p>
                  <p>I'm passionate about <strong>system programming</strong>, <strong>computer networks</strong>, and <strong>integrated hardware-software development</strong>.</p>
                </div>
              )}
              {activeTab === 'education' && <Education />}
              {activeTab === 'experience' && <Experience />}
              {activeTab === 'certificates' && <Certificates />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}