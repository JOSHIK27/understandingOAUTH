import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { Provider } from "next-auth/providers/index"
import type { NextAuthOptions } from 'next-auth'
export const authOptions :NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ] as Provider[],
  secret : process.env.NEXTAUTH_SECRET,
  session: {
    strategy : 'jwt',
    maxAge : 30*24*60*60
  },
  jwt : {
    encryption : true
  }
}

export default NextAuth(authOptions)