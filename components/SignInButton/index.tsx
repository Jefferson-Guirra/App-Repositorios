import * as C from './styles'
import {FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import {signIn,signOut,useSession} from 'next-auth/react'
import Image from 'next/image'


export  const SignInButton = () => {
  const { data: session, status } = useSession()
  return (
      <>

      {status === 'authenticated' ? (
        <C.button type="button" onClick={() => signOut()}>
          {session.user?.image && (
            <div>
              <Image
                objectFit="fill"
                width={35}
                height={35}
                src={session.user?.image}
                alt="foto do usuario"
              />
            </div>
          )}
          <p>Olá {session.user?.name}</p>
          <FiX color="#737380" className="closeIcon" />
        </C.button>
      ) : (
        <C.button type="button" onClick={() => signIn('github')}>
          <FaGithub color="#FFB800" />
          <p>entrar com github</p>
        </C.button>
      )}
    </>
  )
}



