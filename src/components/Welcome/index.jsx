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
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-white shadow-md">
            <img src={ProfileImage} alt="Tri Yoga Arsyad" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tri Yoga Arsyad</h1>
          <p className="text-xl text-gray-600">Computer Engineering Student</p>
          <ContactInfo />
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          {['introduction', 'education', 'experience', 'certificates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 font-medium whitespace-nowrap ${
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
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
                        <div className="text-gray-600 space-y-4">
                          <p>Halo, nama saya <strong>Tri Yoga Arsyad</strong>, mahasiswa <strong>Teknik Komputer</strong> di <strong>Departemen Teknik Elektro, Fakultas Teknik, Universitas Indonesia</strong>.</p>
                          <p>Saya memiliki ketertarikan besar pada dunia komputer, khususnya dalam bidang <strong>pemrograman sistem</strong>, <strong>jaringan komputer</strong>, serta <strong>pengembangan perangkat keras dan lunak secara terpadu</strong>.</p>
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
      </div>
    </section>
  );
}