import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
const id = process.env.GITHUB_ID as string
const secret = process.env.GITHUB_SECRET as string
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: id,
      clientSecret: secret,
    })
  ]
}
export default NextAuth(authOptions)
