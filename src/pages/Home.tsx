import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='h-screen max-w-7xl mx-auto py-2 pl-10'>
      {/* Home */}
      <div id='banner' className='h-screen pt-14'>
        <Banner />
      </div>
      <div id='about' className='h-56'>
        About
      </div>
      <div id='project' className='h-56'>
        Project
      </div>
    </div>
  );
};

export default Home;
