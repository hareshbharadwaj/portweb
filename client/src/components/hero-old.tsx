import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image - Left on Desktop */}
          <motion.div
            className="flex-shrink-0 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-80 h-96 overflow-hidden rounded-lg shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://res.cloudinary.com/daajhlxgj/image/upload/v1752134349/WhatsApp_Image_2025-07-08_at_13.00.00_58121156_srgf5p.jpg"
                alt="Haresh Bharadwaj R"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Content - Right on Desktop */}
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Name and Title */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="gradient-text">Haresh Bharadwaj R</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full Stack Developer & AI Enthusiast
            </motion.p>

            {/* Objective/About */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.8 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-indigo-400">Objective</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Passionate about creating innovative web solutions and exploring the frontiers of artificial intelligence. 
                Currently pursuing B.Tech in Computer Science with expertise in modern web technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Seeking opportunities to contribute to cutting-edge projects while continuously learning and growing 
                in the field of software development and AI/ML technologies.
              </p>
            </motion.div>

            {/* Resume Button */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="/attached_assets/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a
                href="https://linkedin.com/in/haresh-bharadwaj-r-566556229"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/hareshbharadwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:hesh25012006@gmail.com"
                className="p-4 rounded-full bg-gray-800 hover:bg-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/haresh-bharadwaj-r-566556229"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 text-2xl"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/hareshbharadwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 text-2xl"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:hesh25012006@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 text-2xl"
              >
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => window.open('https://res.cloudinary.com/daajhlxgj/image/upload/v1752168508/HARESH_CV_page-0001_lbgumj.jpg', '_blank')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
