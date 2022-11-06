import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { Profile } from 'next-auth'
const id = process.env.GITHUB_ID as string
const secret = process.env.GITHUB_SECRET as string
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: id,
      clientSecret: secret,
      
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        return true
      } catch (err) {
        console.log('DEU ERRO', err)
        return false
      }
    },
    /*async jwt({ token, account, profile }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
    if (account) {
      token.accessToken = account.access_token
      token.sub= profile?.sub
    }
    return token
  },*/
    async session({ session, token, user }) {
      try {
        return {
          ...session,
          id:token.sub
        }
      } catch {
        return {
          ...session,
          id: null
        }
      }
    }
  }
})

