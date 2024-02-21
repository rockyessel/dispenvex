import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils/helpers';
import { useState } from 'react';

interface Props {
  screenWidth: number;
}

const GeneralSearch = ({ screenWidth }: Props) => {
  const breakPoint = 1042;
  const [searchLabel, setSearchLabel] = useState('users');
  return (
    <div className='flex-1 hidden sm:block'>
      <div
        className={cn('relative', screenWidth <= breakPoint ? '' : 'w-[25rem]')}
      >
        <DropdownMenu>
          <DropdownMenuTrigger
            className='absolute inset-y-0 top-2 left-2 rounded-[0.5rem] flex items-center w-fit p-2 h-8 bg-rose-600'
            asChild
          >
            <button>{searchLabel}</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-fit bg-rose-800'>
            <DropdownMenuLabel>Select a label</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={searchLabel}
              onValueChange={setSearchLabel}
            >
              <DropdownMenuRadioItem value='users'>Users</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='posts'>Posts</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='articles'>
                Articles
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <input
          className='w-full pl-[5.5rem] pr-[5.5rem] py-3 outline-none border border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] focus:ring-2 focus:ring-rose-700'
          type='text'
          name={'assets'}
          placeholder='Search for an asset...'
        />

        <button className='h-8 absolute inset-y-0 rounded-[0.5rem] top-2 right-2 flex items-center px-3  hover:bg-rose-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-rose-700 active:ring-4 active:bg-rose-800 active:text-white bg-rose-600'>
          Search
        </button>
      </div>
    </div>
  );
};

export default GeneralSearch;
