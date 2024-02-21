
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getCsrfToken } from 'next-auth/react';
import { SiweMessage } from 'siwe';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Ethereum',
            credentials: {
                message: {
                    label: 'Message',
                    type: 'text',
                    placeholder: '0x0',
                },
                signature: {
                    label: 'Signature',
                    type: 'text',
                    placeholder: '0x0',
                },
            },
            async authorize(credentials) {
                try {
                    if (!process.env.NEXTAUTH_URL) {
                        throw 'NEXTAUTH_URL is not set';
                    }
                    const siwe = new SiweMessage(
                        JSON.parse(credentials?.message || '{}')
                    );
                    const nextAuthUrl = new URL(process.env.NEXTAUTH_URL);
                    if (siwe.domain !== nextAuthUrl.host) {
                        return null;
                    }

                    //   if (siwe.nonce !== (await getCsrfToken({ req }))) {
                    //     return null;
                    //   }

                    await siwe.validate(credentials?.signature || '');
                    return {
                        id: siwe.address,
                    };
                } catch (e) {
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        async session({ session, token }) {
            // @ts-ignore
            session.address = token.sub;
            session.user!.name = token.sub;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
