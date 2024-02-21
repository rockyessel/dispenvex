import { Frame, Hexagon } from 'lucide-react';
import Link from 'next/link';

const DisperseLogo = () => {
  return (
    <Link href='/'>
      <span className='inline-flex items-center'>
        <span className='relative top- left-0 right-0'>
          <Hexagon size={48} strokeWidth={0.5} className='text-rose-500' />
          <span className='absolute top-0 right-0 mr-[.4rem] mt-[0.5rem] text-rose-800'>
            <Frame size={34} strokeWidth={0.5} />
          </span>
        </span>
        <span className='font-extrabold'>Disperse</span>
      </span>
    </Link>
  );
};

export default DisperseLogo;
