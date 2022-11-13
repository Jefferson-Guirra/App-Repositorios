import Link from 'next/link'
import {SignInButton} from '../SignInButton'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import * as C from './styles'
import { useState } from 'react'

export const Header = ()=>{
  const [menuMob, setMenuMob] = useState(false)

  console.log(menuMob)


  return (
    <C.headerContainer>
      <C.headerContent>
        <Link href="/">
          <a>
            <Image src={Logo} alt="logo meu board" />
          </a>
        </Link>
        <C.hamburguer
          className="hamburger"
          activeMenu={menuMob}
          onClick={() => setMenuMob(state => !state)}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </C.hamburguer>
        <C.actions activeMenu={menuMob}>
          <nav>
            <Link href="/">
              <a onClick={() => setMenuMob(state => !state)}>Home</a>
            </Link>
            <Link  href="/board">
              <a onClick={() => setMenuMob(state => !state)}>Meu Board</a>
            </Link>
          </nav>
          <SignInButton />
        </C.actions>
      </C.headerContent>
    </C.headerContainer>
  )
}


