import Navbar from '@/components/natives/navbar';
import { RootLayoutProps } from '@/types';
import { Fragment } from 'react';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Fragment>
      <Navbar />
      <main className=''>{children}</main>
    </Fragment>
  );
};

export default RootLayout;
