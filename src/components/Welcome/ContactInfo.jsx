import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function ContactInfo() {
  const contactInfo = [
    { icon: <MdEmail className="text-xl" />, text: "triyoga@example.com" },
    { icon: <MdPhone className="text-xl" />, text: "+62 812-3456-7890" },
    { icon: <FaLinkedin className="text-xl" />, text: "LinkedIn" },
    { icon: <FaGithub className="text-xl" />, text: "GitHub" },
    { icon: <FaFilePdf className="text-xl" />, text: "Download CV" },
    { icon: <FaInstagram className="text-xl" />, text: "Instagram" }
  ];

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}