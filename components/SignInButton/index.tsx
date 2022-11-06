import * as C from './styles'
import {FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import {signIn,signOut,useSession} from 'next-auth/react'

export  const SignInButton = () => {
  const { data: session, status } = useSession()
  return status === 'authenticated' ? (
    <C.button type="button" onClick={() => signOut()}>
      {session.user?.image && <img
        src={session.user?.image}
        alt="foto do usuario"
      />}
      Olá {session.user?.name}
      <FiX color="#737380" className="closeIcon" />
    </C.button>
  ) : (
    <C.button type="button" onClick={() => signIn('github')}>
      <FaGithub color="#FFB800" />
      entrar com github
    </C.button>
  )
}


