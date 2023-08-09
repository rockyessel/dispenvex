// Import necessary types and modules
import { NextAuthOptions, Session } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
// Define the authentication options object
export const authOptions: NextAuthOptions = {
  // Configure the authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  // Configure the JWT (JSON Web Token) encoding and decoding functions
  jwt: {
    // Encoding function: Signs the token with specified data, secret, and expiration
    encode: ({ secret, token }) => {
      // console.log('jsonwebtoken', token);
      // console.log('jsonwebtoken secret', secret);

      return jsonwebtoken.sign(
        {
          ...token,
          iss: 'nextauth', // The issuer of the token
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60, // Expiration time (1 hour from now)
        },
        secret
      );
    },

    // Decoding function: Verifies the token's integrity and returns the decoded data
    decode: async ({ secret, token }) => {
      // console.log('decode secret', secret);
      // console.log('decode', token);
      return jsonwebtoken.verify(token!, secret) as JWT;
    },
  },

  // Configure the authentication callbacks
  callbacks: {
    // JWT callback: Executed whenever a JSON Web Token is created or updated
    async jwt({ profile, token }) {
      // console.log('profile outside', profile); // Log the profile outside the conditional block
      // console.log('token outside jwt', token); // Log the profile outside the conditional block

      // Check if the profile exists and has a 'login' property
      if (profile && 'login' in profile) {
        // console.log('profile inside', profile); // Log the profile inside the conditional block

        // Set the 'username' property of the token to the 'login' value from the profile
        token.username = profile.login as string;
        // console.log('token inside', token); // Log the token inside the conditional block
      }

      // console.log('token outside', token); // Log the token outside the conditional block
      return token; // Return the modified token
    },

    // Session callback: Executed whenever a new session is created or updated
    session({ session, token }) {
      // console.log('session outside', session); // Log the session outside the conditional block
      // console.log('token in session outside', token); // Log the token inside the session callback

      // Check if the token has a 'username' property and if the session object exists
      if (token.username) {
        // Set the 'username' property of the session to the 'username' value from the token
        session.username = token?.username as string;
        // console.log('session inside', session); // Log the session inside the conditional block
      }

      // console.log('token in session outside end', token); // Log the token outside the conditional block
      // console.log('session outside end', session); // Log the session outside the conditional block
      return session; // Return the modified session
    },
  },
};

export const isSession = async (): Promise<boolean> => {
  const response = await fetch('http://localhost:3000/api/auth/session');
  const userSession = (await response.json()) as Session;
  console.log('userSession', userSession);
  if (userSession.user) {
    return true;
  }
  return false;
};
