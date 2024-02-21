'use client';

import { User } from 'lucide-react';

import DisperseLogo from '../common/logo';
import GeneralSearch from '../common/search';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='w-full flex flex-col gap-0'>
      <section className='w-full flex items-center justify-between py-3'>
        <div className='w-full flex items-center gap-10'>
          <DisperseLogo />
          <GeneralSearch screenWidth={screenWidth} />
        </div>

        <nav className='ml-20 flex items-end'>
          <ul className='w-full flex items-center gap-2'>
            <li>
              <button
                type='button'
                className='px-3 py-2 h-10 rounded-[0.5rem] hover:bg-rose-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-rose-700 active:ring-4 active:bg-rose-800 active:text-white bg-rose-600'
              >
                Connect
              </button>
            </li>
            {isConnected && (
              <li className='border border-gray-300 rounded-full inline-flex w-12 h-12 items-center justify-center'>
                <User size={28} strokeWidth={0.5} />
              </li>
            )}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
{
  /*  



  <div className='block md:hidden'>
          <label className='btn btn-circle swap swap-rotate'>
          
            <input type='checkbox' />

            <svg
              className='swap-off fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>

         
            <svg
              className='swap-on fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
            </svg>
          </label>
        </div>


*/
}
