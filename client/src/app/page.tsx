'use client';

import ConnectBtn from '@/components/actions/connect';
import DisperseFeed from '@/components/common/feeds';

const Home = () => {
  return (
    <div className='flex flex-col'>
      {/* Hero */}
      <div className='flex flex-col pt-12 w-full text-lg font-semibold leading-6 text-center whitespace-nowrap bg-opacity-0 max-md:max-w-full bg-white/10 rounded-[0.5rem] p-5'>
        <div className='w-fit text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl'>
          {`'Disperse' a hub for decentralized social platform to connect, and
          engage.`}
        </div>

        <div className='flex gap-4 self-center mt-48 max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
          <p className='grow justify-center px-16 py-6 text-white bg-rose-600 rounded-2xl max-md:px-5'>
            Get Started
          </p>
          <p className='grow justify-center px-16 py-6 tracking-normal text-rose-600 rounded-2xl bg-rose-600 bg-opacity-10 max-md:px-5'>
            Learn More
          </p>
        </div>
      </div>
      <ConnectBtn />
      {/* main */}
      <div className='flex flex-col pt-12 w-full  max-md:max-w-full'>
        {/* feed */}
        <DisperseFeed />
        {/* footer */}
        <div className='flex justify-center items-center px-16 py-12 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full'>
          <div className='flex flex-col mt-2 max-w-full w-[417px]'>
            <div className='text-3xl tracking-normal leading-10 text-center text-rose-600'>
              Get the best content on Mirror,
              <br />
              delivered once a week.
            </div>{' '}
            <div className='flex gap-0 self-center mt-9 max-w-full text-base font-light whitespace-nowrap  text-opacity-40 w-[374px]'>
              <div className='grow justify-center items-start py-5 pr-16 pl-4  rounded-lg border border-solid border-black border-opacity-10 max-md:pr-5'>
                Enter email address
              </div>{' '}
              <div className='h-12 bg-rose-600 rounded-none w-[100px]' />
            </div>
          </div>
        </div>{' '}
        <div className='flex justify-center items-center px-16 py-10 w-full text-sm font-light tracking-normal leading-5 text-center whitespace-nowrap   text-opacity-40 max-md:px-5 max-md:max-w-full'>
          <div className='flex flex-col ml-24 max-w-full w-[319px]'>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/502304047a4d10d9bfce172e7b41d2e073271b0e1cf0f6b894d9170137d681e4?'
              className='ml-11 w-10 aspect-square max-md:ml-2.5'
            />{' '}
            <div className='flex gap-5 justify-between mt-8'>
              <div>Support</div> <div>Twitter</div> <div>Privacy</div>{' '}
              <div className='grow'>Terms & Conditions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
