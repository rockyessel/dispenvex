'use client';

import { GalleryThumbnails, Settings, User } from 'lucide-react';

import DisperseLogo from '../common/logo';
import GeneralSearch from '../common/search';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import EditorSettings from '../editor/settings';

const EditorNavbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <header className='top-0 sticky bg-black w-full flex flex-col gap-0'>
      <section className='w-full flex items-center justify-between py-3'>
        <div className='w-full flex items-center gap-10'>
          <DisperseLogo />
        </div>

        <nav className='flex items-end'>
          <ul className='w-full flex items-center gap-2'>
            <li>
              <EditorSettings />
         
            </li>

            <li>
              <button
                type='button'
                className='px-3 py-2 h-10 rounded-[0.5rem] hover:bg-rose-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-rose-700 active:ring-4 active:bg-rose-800 active:text-white bg-rose-600'
              >
                <GalleryThumbnails size={28} strokeWidth={1} />
              </button>
            </li>

            <li className='border inline-flex w-[10rem] border-gray-300 p-2 rounded-[0.5rem] gap-1'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png'
                className='w-10 h-10 rounded-[0.5rem] p-1 bg-white'
              />
              <span className='inline-flex flex-col'>
                <span>0x60...2cd</span>
                <span className='text-xs font-bold text-gray-400 self-start'>
                  0.000 tBNB
                </span>
              </span>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default EditorNavbar;
