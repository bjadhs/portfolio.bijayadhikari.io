import Stacks from '../components/Stacks';
import Banner from '../components/Banner';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className='max-w-9xl mx-auto py-2 px-10'>
      {/* Home */}
      <div id='banner'>
        <Banner />
      </div>
      <div id='about'>
        <Stacks />
      </div>

      <div id='project'>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
