import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async singIn({ profile }) {
      //1. connected to the database
      //2. Check if user exists
      //3. If not , then add user to database
      //4. Return true to allow sign in
    },
    async session({ session }) {
      //1. Get user from DB
      //2. Assing the User ID to the session
      //3 Return the session
    },
  },
};
