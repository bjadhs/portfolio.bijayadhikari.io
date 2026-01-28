import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className='min-h-screen bg-gradient-to-br from-bg-secondary via-bg-tertiary to-bg-secondary text-text-primary'>
      <div className='container mx-auto px-10 py-16'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-6'>
            Featured Projects
          </h2>
          <p className='text-xl text-text-secondary max-w-3xl mx-auto'>
            Here are some of my recent works that showcase my skills in web and
            mobile development, Devops and AI.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group relative glass-strong rounded-2xl shadow-lg overflow-hidden
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out
                flex flex-col h-full border border-border/50'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-64 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-110'
                />
                <div
                  className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                />

                <div
                  className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 
                  translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100'
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-white/90 rounded-full hover:bg-cyan-400 hover:text-white hover:scale-110
                        transition-all duration-200 shadow-lg'
                    >
                      <ExternalLink size={18} className='text-gray-700' />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 bg-white/90 rounded-full hover:bg-cyan-400 hover:text-white hover:scale-110
                        transition-all duration-200 shadow-lg'
                    >
                      <Github size={18} className='text-gray-700' />
                    </a>
                  )}
                </div>
              </div>

              <div className='p-6 flex-1 flex flex-col'>
                <h3
                  className='text-xl lg:text-2xl font-bold text-text-primary mb-3 group-hover:text-cyan-400
                  transition-colors duration-300'
                >
                  {project.title}
                </h3>
                <p className='text-text-secondary mb-4 leading-relaxed flex-1 text-sm lg:text-base'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='px-2 lg:px-3 py-1 glass text-text-primary rounded-full text-xs lg:text-sm font-medium
                        hover:bg-cyan-400/20 transition-colors duration-200 cursor-default
                        border border-border/30'
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.featured && (
                <div className='absolute top-4 left-4'>
                  <span
                    className='px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 
                    text-white text-xs font-bold rounded-full shadow-lg'
                  >
                    FEATURED
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <button
            onClick={() => {
              navigate('/projects');
            }}
            className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500
            text-white font-semibold rounded-full hover:brightness-110
            hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-cyan-500/25'
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
