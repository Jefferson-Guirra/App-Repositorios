import * as C from './styles'
import Link from 'next/link'

export const SupportButton = () => {
  return (
    <C.donateContainer>
      <Link href="/donate">
        <button>Apoiar</button>
      </Link>
    </C.donateContainer>
  )
}

