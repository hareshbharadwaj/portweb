import { X, ExternalLink, CheckCircle, User, Cog, Settings, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Project } from '@shared/schema';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const links = project.links as Record<string, string> || {};

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-indigo-400">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Description */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && (
            <div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(project.features as string[]).map((feature, index) => (
                  <div key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-projects */}
          {project.projects && (
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Project Components</h3>
              <div className="space-y-4">
                {(project.projects as Array<{ name: string; description: string; features?: string[] }>).map((proj, index) => (
                  <Card key={index} className="bg-gray-700 border-gray-600">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-indigo-400 mb-2">{proj.name}</h4>
                      <p className="text-gray-300 mb-2">{proj.description}</p>
                      {proj.features && (
                        <div className="space-y-1">
                          {proj.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start text-sm text-gray-400">
                              <CheckCircle className="h-3 w-3 text-green-400 mr-2 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          {project.applications && (
            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4">Applications</h3>
              <div className="space-y-4">
                {(project.applications as Array<{ name: string; description: string; features: string[] }>).map((app, index) => (
                  <Card key={index} className="bg-gray-700 border-gray-600">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">{app.name}</h4>
                      <p className="text-gray-300 mb-3">{app.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {app.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* User & Admin Features */}
          {project.userFeatures && project.adminFeatures && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  User Features
                </h3>
                <div className="space-y-2">
                  {(project.userFeatures as string[]).map((feature, index) => (
                    <div key={index} className="flex items-start text-gray-300">
                      <User className="h-4 w-4 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Admin Features
                </h3>
                <div className="space-y-2">
                  {(project.adminFeatures as string[]).map((feature, index) => (
                    <div key={index} className="flex items-start text-gray-300">
                      <Cog className="h-4 w-4 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Methodology */}
          {project.methodology && (
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Methodology</h3>
              <div className="space-y-2">
                {(project.methodology as string[]).map((method, index) => (
                  <div key={index} className="flex items-start text-gray-300">
                    <Settings className="h-4 w-4 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {(project.technologies as string[]).map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-purple-600/20 text-purple-400 hover:bg-purple-600/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Video Section for Computer Vision Projects */}
          {project.category === 'computer-vision' && (
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Project Demo</h3>
              <div className="bg-gray-700 rounded-lg p-4">
                {(() => {
                  const links = project.links as Record<string, string>;
                  const videoUrl = links.video;
                  return videoUrl && videoUrl !== "" ? (
                    <video 
                      controls 
                      className="w-full max-h-96 rounded-lg"
                      preload="metadata"
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="text-gray-400 text-center py-8">
                      <Eye className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Video Demo Coming Soon</p>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Video Section for Web Development Projects */}
          {project.category === 'web-development' && (
            <div>
              {(() => {
                const links = project.links as Record<string, string>;
                const videoUrl = links.demo || links.video;
                return videoUrl && videoUrl !== "" && videoUrl.includes('.mp4') ? (
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Project Demo</h3>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <video 
                        controls 
                        className="w-full max-h-96 rounded-lg"
                        preload="metadata"
                      >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          )}

          {/* Links Section */}
          <div className="pt-4 border-t border-gray-700">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Project Links</h3>
            
            {/* ML Research - Only LinkedIn */}
            {project.category === 'machine-learning' && (
              <div className="flex justify-center">
                <div className="bg-gray-700 rounded-lg p-4 w-full max-w-md">
                  <h4 className="font-semibold text-blue-400 mb-2 text-center">LinkedIn Post</h4>
                  {links.linkedin && links.linkedin !== "" ? (
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Research Post
                      </a>
                    </Button>
                  ) : (
                    <div className="text-gray-400 text-sm text-center py-2">
                      Research post coming soon
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* App Development - Only GitHub Release/APK Download */}
            {project.category === 'mobile-development' && (
              <div className="flex justify-center">
                <div className="bg-gray-700 rounded-lg p-4 w-full max-w-md">
                  <h4 className="font-semibold text-green-400 mb-2 text-center">Download App</h4>
                  {(links.apk || links.github) && (links.apk !== "" || links.github !== "") ? (
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <a href={links.apk || links.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {links.apk ? 'Download APK' : 'View on GitHub'}
                      </a>
                    </Button>
                  ) : (
                    <div className="text-gray-400 text-sm text-center py-2">
                      Download link coming soon
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Web Development & Computer Vision - All Links */}
            {(project.category === 'web-development' || project.category === 'computer-vision') && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* LinkedIn Post */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">LinkedIn Post</h4>
                  {links.linkedin && links.linkedin !== "" ? (
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Post
                      </a>
                    </Button>
                  ) : (
                    <div className="text-gray-400 text-sm text-center py-2">
                      Link to be added soon
                    </div>
                  )}
                </div>

                {/* GitHub Repository */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-300 mb-2">GitHub Repo</h4>
                  {links.github && links.github !== "" ? (
                    <Button asChild className="w-full bg-gray-600 hover:bg-gray-700">
                      <a href={links.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  ) : (
                    <div className="text-gray-400 text-sm text-center py-2">
                      Repository link coming soon
                    </div>
                  )}
                </div>

                {/* Live Demo/Video */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">
                    {project.category === 'computer-vision' ? 'Video Demo' : 'Live Demo'}
                  </h4>
                  {(() => {
                    const demoLink = links.live || links.demo || links.video;
                    return demoLink && demoLink !== "" ? (
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                        <a href={demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.category === 'computer-vision' ? 'Watch Demo' : 'View Demo'}
                        </a>
                      </Button>
                    ) : (
                      <div className="text-gray-400 text-sm text-center py-2">
                        {project.category === 'computer-vision' ? 'Video demo coming soon' : 'Demo link coming soon'}
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
