import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='container mx-auto px-10 py-16'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Featured Projects
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Here are some of my recent works that showcase my skills in web and
            mobile development, Devops and AI.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group relative bg-white rounded-2xl shadow-lg overflow-hidden 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out
                flex flex-col h-full'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
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
                      className='p-2 bg-white/90 rounded-full hover:bg-white hover:scale-110 
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
                      className='p-2 bg-white/90 rounded-full hover:bg-white hover:scale-110 
                        transition-all duration-200 shadow-lg'
                    >
                      <Github size={18} className='text-gray-700' />
                    </a>
                  )}
                </div>
              </div>

              <div className='p-6 flex-1 flex flex-col'>
                <h3
                  className='text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 
                  transition-colors duration-300'
                >
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed flex-1 text-sm lg:text-base'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='px-2 lg:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs lg:text-sm font-medium
                        hover:bg-blue-100 transition-colors duration-200 cursor-default
                        group-hover:animate-pulse'
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
            className='px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
            text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 
            hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
