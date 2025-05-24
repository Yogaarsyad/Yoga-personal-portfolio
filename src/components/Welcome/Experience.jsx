import { useState } from 'react';
import { motion } from 'framer-motion';
import HmiLogo from '../../assets/hmi.svg';
import SsmbLogo from '../../assets/ssmb.svg';
import MpmLogo from '../../assets/mpm.svg';
import ImeLogo from '../../assets/ime.svg';
import ExcerLogo from '../../assets/excer.svg';
import Hmi1 from '../../assets/hmi1.svg';
import Hmi2 from '../../assets/hmi2.svg';
import Ssb1 from '../../assets/ssb1.svg';
import Ssb2 from '../../assets/ssb2.svg';
import Mpm1 from '../../assets/mpm1.svg';
import Mpm2 from '../../assets/mpm2.svg';
import Ime1 from '../../assets/ime1.svg';
import Ime2 from '../../assets/ime2.svg';
import Exer1 from '../../assets/exer1.svg';

const experienceData = [
  {
    role: "Member - Himpunan Mahasiswa Islam (HMI)",
    place: "Faculty of Engineering Commissariat, Universitas Indonesia",
    period: "Aug 2024 - Present · 10 months",
    description: `I am a Computer Engineering student at the University of Indonesia and an active member of HMI, Faculty of Engineering UI Commissariat. Through HMI, I’ve developed skills in public speaking, public relations, and leadership, while expanding my professional network. I continue to grow within this community and am open to opportunities that support both my organizational and career development.`,
    logo: HmiLogo,
    photos: [
      { src: Hmi1, caption: "HMI: Implementation of LK2 HMIUI commissariat" },
      { src: Hmi2, caption: "HMI: LK1 HMI Intelligence by Kanda from FH UI" }
    ]
  },
  {
    role: "BPH Logistics and Accommodation",
    place: "Sasambo UI",
    period: "Jul 2023 - Present · 1 year 11 months",
    description: `Since 2024, I have been part of Sasambo UI—starting as a staff member and currently serving as a BPH (2025–present). I’ve gained hands-on experience in event management, team coordination, and outreach, including promoting higher education to high school students in NTB. This role has strengthened my leadership, communication, and decision-making skills in dynamic organizational settings.`,
    logo: SsmbLogo,
    photos: [
      { src: Ssb1, caption: "Socialization of SMAN 1 Sembalun 2024" },
      { src: Ssb2, caption: "Socialization of SMAN 1 Sembalun 2025" }
    ]
  },
  {
    role: "MPM FT UI Member",
    place: "Electro Faction of MPM FTUI",
    period: "Jul 2023 - Dec 2024 · 1 year 6 months",
    description: `From July 2023 to December 2024, I served as a staff member in the Electro Faction of MPM FTUI, focusing on institutional assessments. I participated in decision-making processes, activity evaluations, and policy discussions. This role enhanced my skills in Microsoft Office, document management, public speaking, and organizational coordination.`,
    logo: MpmLogo,
    photos: [
      { src: Mpm1, caption: "MPM FT UI plenary session practice" },
      { src: Mpm2, caption: "MPM FT UI Colleagues Working Meeting" }
    ]
  },
  {
    role: "IME FT UI Member",
    place: "Ikatan Mahasiswa Elektro FTUI (IME FTUI)",
    period: "Dec 2023 - Nov 2024 · 1 year",
    description: `Actively involved in the Islamic spiritual division of IME FTUI as a mentor and Instagram content manager. Responsible for creating and managing content to promote religious and social activities. This role enhanced my skills in time management, communication, mentoring, teamwork, and social media management.`,
    logo: ImeLogo,
    photos: [
      { src: Ime1, caption: "Part of ILC Retro IME FTUI 2024" },
      { src: Ime2, caption: "Main event MABIM FT UI 2024" }
    ]
  },
  {
    role: "Hardware Intern",
    place: "EXERCISE FTUI",
    period: "Oct 2023 - Feb 2024 · 5 months",
    description: `Worked in the hardware division of FT Exercise, focusing on electronic component design and system integration. Gained hands-on experience in hardware development and improved technical skills in analyzing and implementing electronic systems. Strengthened problem-solving abilities and teamwork in a tech-driven environment.`,
    logo: ExcerLogo,
    photos: [
      { src: Exer1, caption: "Final project: Banker Arduino Uno" }
    ]
  }
];

export default function Experience() {
  const [selectedPhotos, setSelectedPhotos] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleNext = () => {
    if (selectedPhotos) {
      setPhotoIndex((prev) => (prev + 1) % selectedPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotos) {
      setPhotoIndex((prev) => (prev - 1 + selectedPhotos.length) % selectedPhotos.length);
    }
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-3xl font-bold text-center text-black mb-10">Experience</h2>

      {selectedPhotos && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50"
          onClick={() => setSelectedPhotos(null)}
        >
          <div className="flex items-center justify-between w-full max-w-4xl px-4 mb-4">
           <button
  onClick={(e) => {
    e.stopPropagation();
    handlePrev();
  }}
  className="text-white text-base font-medium px-4 border border-white rounded hover:bg-white hover:text-black transition"
>
  Prev
</button>
<button
  onClick={(e) => {
    e.stopPropagation();
    handleNext();
  }}
  className="text-white text-base font-medium px-4 border border-white rounded hover:bg-white hover:text-black transition"
>
  Next
</button>

          </div>
          <div className="text-white text-lg mb-2">
            {selectedPhotos[photoIndex]?.caption}
          </div>
          <img
            src={selectedPhotos[photoIndex]?.src}
            alt="Documentation"
            className="max-h-[75vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex space-x-6"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-gray-100 rounded-lg">
              {item.logo ? (
                <img src={item.logo} alt={`${item.role} logo`} className="max-h-16 max-w-16" />
              ) : (
                <div className="text-xs text-gray-400 font-semibold">Coming Soon</div>
              )}
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-black">{item.role}</h3>
              <p className="text-gray-700 italic mb-1">{item.place}</p>
              <p className="text-sm font-medium text-black mb-3">{item.period}</p>
              <p className="text-gray-800 mb-2">{item.description}</p>
              {item.photos && (
                <div className="flex space-x-2 mt-2">
                  {item.photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo.src}
                      alt={`Doc ${i + 1}`}
                      className="h-16 w-24 object-cover rounded cursor-pointer border hover:scale-105 transition"
                      onClick={() => {
                        setSelectedPhotos(item.photos);
                        setPhotoIndex(i);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
