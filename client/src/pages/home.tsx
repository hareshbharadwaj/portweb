import { Navbar } from '@/components/navbar';
import { ThreeBackground } from '@/components/three-background';
import { JarvisBackground } from '@/components/jarvis-background';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <ThreeBackground />
      <JarvisBackground />
      <Navbar />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <About />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <Projects />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <Experience />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <Contact />
      </ScrollReveal>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 mb-4">© 2024 Haresh Bharadwaj R. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/haresh-bharadwaj-r-566556229"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/hareshbharadwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:hesh25012006@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
