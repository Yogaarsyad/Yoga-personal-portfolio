import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactInfo from './ContactInfo';
import Education from './Education';
import Experience from './Experience';
import Certificates from './Certificates';
import ProfileImage from '../../assets/image1.svg';

export default function Welcome() {
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <section id="welcome" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-6 overflow-hidden border-8 border-white shadow-lg">
            <img src={ProfileImage} alt="Tri Yoga Arsyad" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Tri Yoga Arsyad</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            I am a <strong>Computer Engineering student</strong>.
          </p>

          {/* Animated Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Hi, welcome! I'm <strong>Tri Yoga Arsyad</strong>, but you can just call me Yoga. This is where I keep various things about myself — from projects, experiences, to works I've created.<br /><br />
            Feel free to explore as you like. I hope you find something interesting here! 😄
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto px-4">
          {['introduction', 'education', 'experience', 'certificates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 font-medium whitespace-nowrap transition-colors duration-300 ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden px-4 md:px-8">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-bold text-gray-700">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === 'introduction' && (
                        <div className="text-gray-600 space-y-4 text-justify">
                          <p>
                            I am a 4th-semester <strong>Computer Engineering student</strong> at the University of Indonesia, passionate about learning and exploring new things in the tech world. I am interested in website development, both frontend and backend, and I enjoy learning about databases and data processing.
                          </p>
                          <p>
                            I enjoy creating simple programs using the <strong>C programming language</strong> and often work on small projects to sharpen my skills. One of the projects I've built is <strong>Student Courier</strong>, a delivery system based on <strong>Arduino</strong> that I developed during my Embedded System course and tested using Proteus.
                          </p>
                          <p>
                            I also love learning about <strong>embedded systems</strong> and other new areas in technology. I believe that technology is constantly evolving, and I want to continue learning so I can grow along with it.
                          </p>
                        </div>
                      )}
                      {activeTab === 'education' && <Education />}
                      {activeTab === 'experience' && <Experience />}
                      {activeTab === 'certificates' && <Certificates />}
                    </motion.div>
                  </AnimatePresence>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Info below content */}
        <div className="mt-10 px-4">
          <ContactInfo />
        </div>

      </div>
    </section>
  );
}
