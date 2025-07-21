export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}



export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    imageUrl: '/projects/ecommerce.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management platform with drag-and-drop functionality and team collaboration features.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    imageUrl: '/projects/task.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description:
      'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
    technologies: ['Swift', 'Core Location', 'WeatherKit'],
    imageUrl: '/projects/weather.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description:
      'Analytics dashboard for social media performance tracking with detailed insights and reporting.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js'],
    imageUrl: '/projects/twitter.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 5,
    title: 'Youtube Video Player',
    description:'A simple Youtube clone deployed on AWS',
    technologies: ['Next.js', 'AWS', 'Devops', 'Node.js'],
    imageUrl: '/projects/youtube.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  }
];