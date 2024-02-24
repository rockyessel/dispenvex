import Navbar from '@/components/natives/navbar';
import '@/styles/globals.css';
import { RootLayoutProps } from '@/types';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Disperse - Home',
  description: 'Social & Publishing hub for decentralization.',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} w-full h-full px-4 lg:px-20 relative'`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
