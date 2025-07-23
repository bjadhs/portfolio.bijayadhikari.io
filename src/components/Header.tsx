// Header.tsx
import { Mail, Menu, XCircle } from 'lucide-react';
import { useState } from 'react';
import MessageModel from './MessageModel';

const Header = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu after clicking a link (nice UX)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className='sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Left Logo */}
            <div className='flex items-center space-x-2'>
              <span className='flex items-center justify-center w-8 h-8 bg-indigo-500 text-white font-extrabold rounded-full shadow-md'>
                BJ
              </span>
              <div className='hidden sm:block'>
                <h2 className='text-sm font-semibold text-indigo-500'>
                  Bijaya Adhikari
                </h2>
                <p className='text-xs text-gray-500'>
                  bijayadhikari107@gmail.com
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className='hidden md:flex items-center space-x-6 text-sm text-gray-600'>
              <a href='#banner' className='hover:text-indigo-500 transition'>
                Home
              </a>
              <a href='#about' className='hover:text-indigo-500 transition'>
                About
              </a>
              <a href='#project' className='hover:text-indigo-500 transition'>
                Projects
              </a>
              <a href='#contact' className='hover:text-indigo-500 transition'>
                Contact
              </a>
            </nav>

            {/* Desktop Send-Message Button */}
            <button
              onClick={() => setIsModelOpen(true)}
              className='hidden md:flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-500 text-white text-xs rounded-md hover:bg-indigo-600 transition'
            >
              <Mail size={14} />
              <span>Send Message</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className='md:hidden text-gray-700'
              onClick={toggleMenu}
              aria-label='Open menu'
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* backdrop */}
        <div
          className='fixed inset-0 bg-black/40'
          onClick={closeMenu}
          aria-hidden='true'
        />

        {/* panel */}
        <nav className='fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-xl flex flex-col'>
          <div className='flex justify-end p-4'>
            <button
              onClick={closeMenu}
              aria-label='Close menu'
              className='text-gray-600 hover:text-indigo-500'
            >
              <XCircle size={24} />
            </button>
          </div>

          <ul className='flex-1 flex flex-col items-center justify-center space-y-8 text-gray-700 font-medium'>
            <li>
              <a href='#banner' onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href='#about' onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href='#project' onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsModelOpen(true);
                  closeMenu();
                }}
                className='flex items-center space-x-2 px-4 py-2 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-600 transition'
              >
                <Mail size={16} />
                <span>Send Message</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Message modal */}
      {isModelOpen && (
        <MessageModel
          isModelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}
        />
      )}
    </>
  );
};

export default Header;
