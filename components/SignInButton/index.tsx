import * as C from './styles'
import {FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export const SignInButton = () => {
  const session = false
  return session ? (
    <C.button type="button" onClick={() => {}}>
      <img
        src="https://sujeitoprogramador.com/steve.png"
        alt="foto do usuario"
      />
      Olá Rafael
      <FiX color="#737380" className='closeIcon' />
    </C.button>
  ) : (
    <C.button type="button" onClick={() => {}}>
      <FaGithub color="#FFB800" />
      entrar com github
    </C.button>
  )
}

