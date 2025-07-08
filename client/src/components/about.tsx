import { Brain, Eye, Code, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const skills = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI / ML Solutions',
      color: 'text-indigo-400'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: '| OpenCV | MediaPipe | pycharm ',
      color: 'text-purple-400'
    },
    {
      icon: Code,
      title: 'Web Design',
      description: '| React | Streamlit | MySQL | MongoDB ',
      color: 'text-green-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Android studio & Flutter',
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            About Me
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            I'm a technically driven Information Technology undergraduate with a passion for solving real-world challenges through innovative technology solutions. My expertise spans across Machine Learning, AI, Computer Vision, and Web Development, with a focus on building AI-based solutions that enhance user experiences.
          </p>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors border-gray-700">
                <CardContent className="p-6 text-center">
                  <skill.icon className={`h-12 w-12 mx-auto mb-4 ${skill.color}`} />
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Education</h3>
              <div className="text-left space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-silver-400 mb-2">Bachelor of Technology – Information Technology</h4>
                  <p className="text-gray-400 mb-1">Saveetha School of Engineering, Thandalam</p>
                  <p className="text-gray-400 mb-1"> 2023-2027  | <span className="text-yellow-500 font-semibold">CGPA: 9.3</span></p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Senior Secondary Education</h4>
                  <p className="text-gray-400 mb-1">GK Shetty Vivekananda Vidyalaya Senior Secondary School</p>
                  <p className="text-gray-400">2021-2023 | <span className="text-yellow-500 font-semibold">83%</span></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
