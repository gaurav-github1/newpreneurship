import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  
  secret: process.env.AUTH_SECRET,
  trustHost: true, // Critical for production deployments
  
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: '/',
    error: '/',
  },

  cookies: {
    pkceCodeVerifier: {
      name: "authjs.pkce.code_verifier",
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax", // Important for OAuth flow
        path: "/",
      },
    },
  },

  callbacks: {
    async signIn({user,profile}){
      if (!profile?.id) return false;
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id: profile.id
        });

      if(!existingUser){
        await writeClient.create({
          _type: "author",
          id: profile.id,
          name: user?.name,
          username: profile?.login,
          email: user?.email,
          image: user?.image,
          bio: profile?.bio || "",
        })
      }

      return true;
    },

    async jwt({token,profile,account}) {
      if(account && profile){
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
            id: profile.id
          });

        token.id = user?._id;
      }

      return token;
    },

    async session({session,token}){
      Object.assign(session,{id: token.id});
      return session;
    }

  },


});