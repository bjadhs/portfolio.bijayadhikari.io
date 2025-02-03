import { Mail } from 'lucide-react';
const Header = () => {
  return (
    <header className='sticky top-0 z-50 max-w-7xl mx-auto py-2 px-6 flex justify-between items-center  bg-white shadow-md'>
      {/* Left Logo */}
      <div className='flex items-center space-x-2'>
        <h1 className='flex justify-center items-center bg-indigo-400 text-sm text-white font-extrabold rounded-full w-8 h-8 p-2 shadow-md'>
          BJ
        </h1>
        <div className='flex flex-col items-start'>
          <h2 className='text-sm text-indigo-400'>Bijaya Adhikari</h2>
          <p className='text-[12px] text-gray-400'>
            bijayadhikari107@gmail.com
          </p>
        </div>
      </div>

      {/* Right Navbar */}
      <nav className='flex items-center space-x-4'>
        <ul className='flex justify-center items-center space-x-4 text-gray-500 text-sm'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#project'>Project</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <button className='bg-indigo-400 text-white px-4 py-2 border border-indigo-700 rounded-md flex items-center space-x-2'>
          <Mail size={16} />
          <p className='text-xs'>Send Message</p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
