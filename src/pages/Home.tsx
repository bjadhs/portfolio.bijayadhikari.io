import Stacks from '../components/Stacks';
import Banner from '../components/Banner';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto py-2 pl-10'>
      {/* Home */}
      <div id='banner' className='h-screen pt-14'>
        <Banner />
      </div>
      <div id='about' className='h-56'>
        <Stacks />
      </div>

      <div id='project' className='h-56'>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
