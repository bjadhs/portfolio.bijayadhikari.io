const Banner = () => {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col '>
        <h1>👋🏼 Hey there, I am </h1>
        <h2> Bijaya Adhikari</h2>
        <p>
          Software engineer specializing in front-end and mobile development. I
          leverage React, Next.js, and React Native to craft intuitive and
          performant applications. My focus is on creating solutions that solve
          real-world problems and enhance user engagement.
        </p>
        <div>
          <button>View Projects</button>
          <button>Download CV</button>
        </div>
      </div>
      <img src='bj.png' alt='Bijaya Adhikari' />
    </div>
  );
};

export default Banner;
