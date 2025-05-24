import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiDownload, FiInstagram } from 'react-icons/fi';

export default function ContactInfo() {
  const contacts = [
    { name: 'Email', link: 'mailto:08trioga08@gmail.com', display: '08trioga08@gmail.com', icon: <FiMail /> },
    { name: 'Phone', link: 'tel:+6287765527489', display: '087765527489', icon: <FiPhone /> },
    { name: 'LinkedIn', link: 'https://bit.ly/tri-yoga-arsyad', display: 'https://bit.ly/tri-yoga-arsyad', icon: <FiLinkedin /> },
    { name: 'GitHub', link: 'https://bit.ly/Yogaarsyad', display: 'https://bit.ly/Yogaarsyad', icon: <FiGithub /> },
    { name: 'Download CV', link: '#', display: '(coming soon)', icon: <FiDownload /> },
    { name: 'Instagram', link: 'https://bit.ly/43zydfD', display: 'https://bit.ly/43zydfD', icon: <FiInstagram /> },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-black pb-2">
        Contact Information
      </h2>

      <motion.table
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="min-w-full border border-black rounded-md table-fixed"
      >
        <tbody>
          {contacts.map(({ name, link, display, icon }, i) => (
            <motion.tr
              key={name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
              className="border-b border-black last:border-b-0 hover:bg-gray-100"
            >
              <td className="py-3 px-6 border-r border-black flex items-center gap-3 text-gray-800 font-medium text-base">
                <span className="text-black text-lg">{icon}</span>
                <span>{name}</span>
              </td>

              <td className="py-3 px-6 border-r border-black text-blue-600 font-medium text-base break-all">
                <a
                  href={link}
                  target={link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:') ? '_blank' : undefined}
                  rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="hover:underline"
                >
                  {display}
                </a>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
