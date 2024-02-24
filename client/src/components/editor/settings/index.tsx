import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Settings } from 'lucide-react';

const EditorSettings = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type='button'
          className='px-3 py-2 h-10 rounded-[0.5rem] hover:bg-rose-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-rose-700 active:ring-4 active:bg-rose-800 active:text-white bg-rose-600'
        >
          <Settings size={28} strokeWidth={1} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' value='Pedro Duarte' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input id='username' value='@peduarte' className='col-span-3' />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditorSettings;
