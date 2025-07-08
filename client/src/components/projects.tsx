import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShoppingCart, Eye, Satellite, Utensils, Smartphone, Code, Brain } from 'lucide-react';
import { ProjectModal } from './project-modal';
import type { Project } from '@shared/schema';

const iconMap = {
  'shopping-cart': ShoppingCart,
  'eye': Eye,
  'satellite': Satellite,
  'utensils': Utensils,
  'android': Smartphone,
  'code': Code,
};

const colorMap = {
  'web-development': 'from-indigo-500 to-purple-500',
  'computer-vision': 'from-purple-500 to-pink-500',
  'machine-learning': 'from-blue-500 to-cyan-500',
  'mobile-development': 'from-orange-500 to-red-500',
};

const categoryInfo = {
  'web-development': {
    title: 'Web Development',
    icon: Code,
    description: '',
    color: 'text-indigo-400'
  },
  'computer-vision': {
    title: 'Computer Vision',
    icon: Eye,
    description: '',
    color: ''
  },
  'machine-learning': {
    title: 'ML Research',
    icon: Brain,
    description: '',
    color: 'text-blue-400'
  },
  'mobile-development': {
    title: 'App Development',
    icon: Smartphone,
    description: '',
    color: 'text-orange-400'
  }
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-gray-800/50 animate-pulse">
                <CardContent className="p-6">
                  <div className="h-48 bg-gray-700 rounded-lg mb-6"></div>
                  <div className="h-6 bg-gray-700 rounded mb-3"></div>
                  <div className="h-20 bg-gray-700 rounded mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                    <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Group projects by category
  const groupedProjects = projects?.reduce((acc, project) => {
    const category = project.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, Project[]>) || {};

  const categoryOrder = ['web-development', 'computer-vision', 'machine-learning', 'mobile-development'];

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey);
  };

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Click on each category to explore my projects
            </p>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {categoryOrder.map((categoryKey) => {
              const categoryProjects = groupedProjects[categoryKey];
              if (!categoryProjects || categoryProjects.length === 0) return null;
              
              const category = categoryInfo[categoryKey as keyof typeof categoryInfo];
              const CategoryIcon = category.icon;
              const isExpanded = expandedCategory === categoryKey;
              
              return (
                <Card 
                  key={categoryKey} 
                  className={`bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer border-gray-700 ${
                    isExpanded ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  onClick={() => toggleCategory(categoryKey)}
                >
                  <CardContent className="p-6 text-center">
                    <CategoryIcon className={`h-12 w-12 mx-auto mb-4 ${category.color} animate-bounce-gentle`} />
                    <h3 className="font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{category.description}</p>
                    <Badge variant="secondary" className="bg-gray-600/20 text-gray-300 animate-pulse-slow">
                      {categoryProjects.length} project{categoryProjects.length > 1 ? 's' : ''}
                    </Badge>
                    <div className="mt-3">
                      <ArrowRight className={`h-4 w-4 mx-auto transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      } animate-bounce-gentle`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expanded Category Projects */}
          {expandedCategory && groupedProjects[expandedCategory] && (
            <div className="animate-slide-up">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-indigo-400 mb-4">
                  {categoryInfo[expandedCategory as keyof typeof categoryInfo].title} Projects
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedProjects[expandedCategory].map((project) => {
                  const IconComponent = iconMap[project.image as keyof typeof iconMap] || Code;
                  const gradientColor = colorMap[project.category as keyof typeof colorMap] || 'from-indigo-500 to-purple-500';
                  
                  return (
                    <Card
                      key={project.id}
                      className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer border-gray-700 group"
                      onClick={() => setSelectedProject(project)}
                    >
                      <CardContent className="p-6">
                        <div className={`h-48 bg-gradient-to-br ${gradientColor} rounded-lg mb-6 flex items-center justify-center`}>
                          <IconComponent className="h-16 w-16 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(project.technologies as string[]).slice(0, 3).map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {(project.technologies as string[]).length > 3 && (
                            <Badge variant="secondary" className="bg-gray-600/20 text-gray-400">
                              +{(project.technologies as string[]).length - 3} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Click to view details</span>
                          <ArrowRight className="h-4 w-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
