import { ArrowRight, Download } from 'lucide-react';

const Banner = () => {
  return (
    <div className='flex justify-between '>
      <div className='flex flex-col items-start  w-1/2'>
        <h1 className='text-4xl font-extrabold mt-8'>👋🏼 Hey there, </h1>
        <h2 className='text-3xl text-center font-bold '>
          I am{' '}
          <span className='text-indigo-500 border-b-4 border-indigo-500 inline-block w-fit'>
            BIJAYA ADHIKARI
          </span>
        </h2>
        <p className='text-gray-400 text-sm mt-4 mb-6'>
          Software engineer specializing in front-end and mobile development. I
          leverage React, Next.js, and React Native to craft intuitive and
          performant applications. My focus is on creating solutions that solve
          real-world problems and enhance user engagement.
        </p>
        <div className='flex justify-center align-center gap-2'>
          <button>
            View Projects
            <ArrowRight />
          </button>
          <button>
            <Download />
            Download CV
          </button>
        </div>
      </div>
      <img
        className='absolute z-0 top-0 right-0  border-b-16 border-indigo-500 rounded-b-full'
        src='bj.png'
        alt='Bijaya Adhikari'
        width='480px'
      />
      <img
        src='bg2.png'
        alt='leaf'
        className='absolute -z-10 top-24 left-10 w-40 -rotate-45'
      />
      <img
        src='bg3.png'
        alt='leaf'
        className='absolute -z-10 top-30 right-80 w-60 -rotate-12'
      />
      <img
        src='bg4.png'
        alt='leaf'
        className='absolute -z-10 top-50 right-0  -rotate-12 opacity-15'
      />
    </div>
  );
};

export default Banner;
