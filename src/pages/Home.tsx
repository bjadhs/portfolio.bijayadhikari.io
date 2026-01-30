import Stacks from '../components/Stacks';
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {
  return (
    <div className='max-w-9xl mx-auto py-2 px-10'>
      {/* Home */}
      <div id='banner'>
        <Banner />
      </div>
      
      {/* About Section */}
      <div id='about'>
        <About 
          paragraph1="Leveraging my Master's degree in Information Technology from Charles Sturt University, I've spent the past year building production applications including a full-stack ecommerce platform with authentication and admin dashboard."
          paragraph2="I approach development with a DevOps mindset—implementing CI/CD pipelines, Docker containerization, and cloud infrastructure on AWS (EC2, S3, Lambda) while working efficiently in Linux environments. Combining strong CS fundamentals with UI/UX design thinking and exceptional communication skills, I deliver clean, maintainable code that solves real problems and drives measurable impact."
        />
      </div>

      {/* Tech Stack */}
      <Stacks />

      <div id='project'>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
