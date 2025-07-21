import {
  ArrowRight,
  Download,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';

const Banner = () => {
  return (
    <section className='relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-gray-50'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          src='/bg2.png'
          alt=''
          className='absolute -left-10 top-1/4 w-40 -rotate-45 opacity-25 blur-sm'
        />
        <img
          src='/bg3.png'
          alt=''
          className='absolute right-1/4 top-1/3 w-60 -rotate-12 opacity-20 blur-sm'
        />
        <img
          src='/bg4.png'
          alt=''
          className='absolute -bottom-20 right-0 w-96 -rotate-12 opacity-15'
        />
        <div className='absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-100 opacity-50 blur-3xl'></div>
        <div className='absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-blue-100 opacity-50 blur-3xl'></div>
      </div>

      <div className='container mx-auto px-6 lg:px-8'>
        <div className='relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
          {/* Left Column - Text Content */}
          <div className='z-10 flex flex-col items-start space-y-6 md:pr-6'>
            <div className='flex items-center gap-2'>
              <div className='h-1.5 w-16 rounded bg-indigo-500'></div>
              <span className='font-medium text-gray-600'>
                Software Engineer
              </span>
            </div>

            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
              <span className='inline-block'>👋🏼 Hey there,</span>
              <br />
              <span>
                I am{' '}
                <span className='relative inline-block text-indigo-600'>
                  BIJAYA ADHIKARI
                  <span className='absolute bottom-0 left-0 h-3 w-full bg-indigo-200 opacity-40'></span>
                </span>
              </span>
            </h1>

            <p className='max-w-2xl text-lg text-gray-600'>
              Software engineer specializing in front-end and mobile
              development. I leverage React, Next.js, and React Native to craft
              intuitive and performant applications. My focus is on creating
              solutions that solve real-world problems and enhance user
              engagement.
            </p>

            <div className='flex flex-wrap items-center gap-4'>
              <a
                href='#projects'
                className='group flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-indigo-200/50'
              >
                View Projects
                <ArrowRight
                  size={18}
                  className='transition-transform group-hover:translate-x-1'
                />
              </a>
              <a
                href='/resume.pdf'
                className='group flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md'
              >
                <Download
                  size={18}
                  className='transition-transform group-hover:-translate-y-1'
                />
                Download CV
              </a>
            </div>

            <div className='mt-8 flex items-center gap-6 pt-4'>
              <a
                href='https://github.com'
                className='rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-md'
              >
                <GithubIcon size={22} />
              </a>
              <a
                href='https://linkedin.com'
                className='rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-md'
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href='https://twitter.com'
                className='rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-md'
              >
                <TwitterIcon size={22} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className='relative z-10 hidden md:block'>
            <div className='relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-8 border-white bg-indigo-50 shadow-2xl'>
              <img
                className='h-full w-full object-cover object-center'
                src='/bj.png'
                alt='Bijaya Adhikari'
              />
            </div>
            <div className='absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-full bg-indigo-200 opacity-30'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
