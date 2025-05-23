// src/pages/WriteUps.jsx
import { motion } from 'framer-motion';

const articles = [
  {
    title: "Article 1",
    excerpt: "Brief excerpt of article 1",
    date: "May 2023",
    link: "#"
  },
  {
    title: "Article 2",
    excerpt: "Brief excerpt of article 2",
    date: "April 2023",
    link: "#"
  },
  // Add more articles as needed
];

export default function WriteUps() {
  return (
    <section id="writeups" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Write-Ups
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.date}</span>
                <a 
                  href={article.link}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}