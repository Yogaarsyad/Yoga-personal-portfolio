import { motion } from 'framer-motion';

export default function WriteUps({ articles }) {
  return (
    <section id="writeups" className="py-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Write-Ups
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{article.date}</span>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}