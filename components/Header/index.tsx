import Link from 'next/link'
import {SignInButton} from '../SignInButton'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import * as C from './styles'
export const Header = ()=>{

  return (
    <C.headerContainer>
      <C.headerContent>
        <Link href="/">
          <a>
            <Image src={Logo} alt="logo meu board" />
          </a>
        </Link>
        <nav>
          <Link href="/">
            Home
          </Link>
          <Link href='/board'>
            Meu board
          </Link>
        </nav>
        <SignInButton/>
      </C.headerContent>
    </C.headerContainer>
  )
}


