import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { db } from '../../../services/firebaseConnection'
import { doc,getDoc} from 'firebase/firestore'

type VipUser = {
  donate: boolean
  image: string
  lastDonate: {
    seconds:number,
    nanoseconds:number
  }
  id?: string
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        return true
      } catch (err) {
        console.log('ERRO:', err)
        return false
      }
    },
    async session({ session, token, user }) {
      try {
        const refUser = doc(db, 'users', String(token.sub))
        const dataDonate = await getDoc(refUser)
        const vipUser = dataDonate.data() as VipUser | undefined

        return {
          ...session,
          id: token.sub,
          vip: vipUser?.donate ? vipUser.donate : false,
          lastDonate: vipUser?.lastDonate ? vipUser.lastDonate : null
        }
      } catch {
        return {
          ...session,
          id: null,
          vip: false,
          lastDonate: null
        }
      }
    }
  }
})

