import EditorNavbar from '@/components/natives/editor-nav';
import { RootLayoutProps } from '@/types';
import { Fragment } from 'react';

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Fragment>
      <EditorNavbar />
      <div className=''>{children}</div>
    </Fragment>
  );
};

export default RootLayout;
