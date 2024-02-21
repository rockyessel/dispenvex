'use client';

import { SessionProvider } from 'next-auth/react';

// Defining the interface for the component's props
interface Props {
  children: React.ReactNode; // The child components that will be wrapped by the NextAuthProvider
}
/**
 * Component for providing Next.js authentication context.
 * Wrapping the provided child components with the SessionProvider.
 * @SessionProvider The SessionProvider manages the authentication state and provides it to the child components.
 */
//
export const NextAuthProvider = (props: Props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
