import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa";

const project1 = {
  title: "Project 1 - Tailwind CSS",
  image: "/twl.svg",
  link: "https://tailwindcss-com.translate.goog/docs/installation/using-vite?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc&_x_tr_hist=true",
  description:
    "This is a Tailwind CSS project. Through the link, you can access the official documentation that explains how to install and use Tailwind CSS with Vite quickly and easily. It's perfect for beginners who want to start a web project efficiently!",
};

export default function WriteUps() {
  return (
    <section id="writeups" className="py-20 px-6 md:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <FaPenNib className="text-4xl text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-800">Write-Ups 🚀</h2>
        </motion.div>

        {/* Section Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mb-12 leading-relaxed"
        >
          Here, I share the sources and references I use, including lecture notes, links,
          and key takeaways that help me understand a particular topic. Hopefully, this will be
          helpful for those of you who are studying too! ✨📘
        </motion.p>

        {/* Resource Table */}
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow"
        >
          <tbody>
            <tr>
              {/* Image & Link Column */}
              <td className="border border-gray-300 p-4 w-1/2 text-center align-top">
                <img
                  src={project1.image}
                  alt={project1.title}
                  className="mx-auto h-40 object-contain mb-4"
                />
                <a
                  href={project1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Guide ↗
                </a>
              </td>

              {/* Description Column */}
              <td className="border border-gray-300 p-6 w-1/2 align-top text-gray-700 text-lg">
                {project1.description}
              </td>
            </tr>
          </tbody>
        </motion.table>

        {/* Bottom Spacer */}
        <div className="my-12" />
      </div>
    </section>
  );
}
