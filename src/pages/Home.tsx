import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='h-screen'>
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
