import Link from 'next/link'
import {SignInButton} from '../SignInButton'
import * as C from './styles'
export const Header = ()=>{
  return (
    <C.headerContainer>
      <C.headerContent>
        <Link href="/">
          <img src="/images/logo.svg" alt="logo meu board" />
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


