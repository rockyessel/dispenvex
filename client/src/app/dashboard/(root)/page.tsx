import { ChevronRight, MoreVertical } from 'lucide-react';
import React from 'react';

const DisperseDashboard = () => {
  return (
    <div className='flex items-start gap-2'>
      <div className='flex flex-col justify-between border-r border-white/10 w-[280px] h-[90vh] overflow-x-hidden !overflow-y-auto px-2 py-2'>
        <ul className='flex flex-col gap-2'>
          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Articles
          </li>
          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Articles
          </li>
          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Articles
          </li>
          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Articles
          </li>
          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Articles
          </li>
          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Articles
          </li>

          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Articles
          </li>
        </ul>

        <ul className='flex flex-col gap-2'>
          <li className='px-4 py-4 tracking-normal text-rose-600 rounded-[0.5rem] bg-rose-600/10'>
            Settings
          </li>
        </ul>
      </div>
      <div className='w-full h-[90vh] overflow-x-hidden !overflow-y-auto'>
        <div className='border-y border-white/10'>
          <ul className='flex item-center divide-x-2 divide-white/10'>
            <li className='px-4 py-4 border-b-4 border-rose-600 text-rose-600 font-medium'>
              Published
            </li>
            <li className='px-4 py-4'>Draft</li>
            <li className='px-4 py-4'>Hidden</li>
          </ul>
        </div>

        <div className='mt-5'>
          <ul>
            <li
              // onDoubleClick={() => {}}
              className='w-full h-24 bg-rose-600/10 rounded-[0.5rem] inline-flex items-center justify-between px-4 py-2'
            >
              <div className='inline-flex flex-col gap-4'>
                <span className='text-2xl font-bold'>{`Hashnode's Overall Architecture`}</span>
                <span className='inline-flex items-center gap-2'>
                  <span className='bg-white/10 rounded-[0.5rem] px-2 py-1 text-sm'>
                    Feb 23 20:46
                  </span>
                  <span className='bg-white/10 rounded-[0.5rem] p-1 text-sm'>
                    Published
                  </span>
                </span>
              </div>
              <div className='h-full inline-flex items-center gap-2'>
                <span className='w-10 h-10 hover:bg-rose-600/30 inline-flex items-center justify-center active:ring-2 active:border-4  active:border-black cursor-pointer active:ring-rose-500 active:bg-rose-600 rounded-full p-1'>
                  <MoreVertical size={20} strokeWidth={0.5} />
                </span>

                <span className='self-stretch inline-flex items-center rounded-[0.5rem] active:ring-2 active:border-4  active:border-black cursor-pointer active:ring-rose-500 active:bg-rose-600 hover:bg-rose-600/20'>
                  <ChevronRight
                    // className='self-center'
                    size={32}
                    strokeWidth={0.5}
                  />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisperseDashboard;
