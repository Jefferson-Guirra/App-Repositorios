import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { db } from '../../../services/firebaseConnection'
import { doc,getDoc} from 'firebase/firestore'
const id = process.env.GITHUB_ID as string
const secret = process.env.GITHUB_SECRET as string

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
      const refUser = doc(db, 'users', String(token.sub))
      const dataDonate = await getDoc(refUser)
      const vipUser = dataDonate.data() as VipUser | undefined





        return {
          ...session,
          id:token.sub,
          vip:vipUser?.donate ? vipUser.donate : false,
          lastDonate:vipUser?.lastDonate ? vipUser.lastDonate : null
        }
      } catch {
        return {
          ...session,
          id: null,
          vip:false,
          lastDonate:null
        }
      }
    }
  }
})

