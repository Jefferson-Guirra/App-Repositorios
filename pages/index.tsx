import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as C from '../styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas Tarefas.</title>
      </Head>
      <C.container>
        <div>
          <img src="/images/board-user.svg" alt="ferramenta board" />
        </div>
        <C.callToAction>
          <h1>
            Uma ferramenta para o seu dia a dia Escreva planeje organize-se...
          </h1>
          <p>
            <span>100% gratuita</span> e online.
          </p>
        </C.callToAction>
        <C.donaters>
          <img src="https://sujeitoprogramador.com/steve.png" alt="usuario 1" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="usuario 2" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="usuario 3" />
          <img src="https://sujeitoprogramador.com/steve.png" alt="usuario 4" />
        </C.donaters>
      </C.container>
    </>
  )
}

export const getStaticProps:GetStaticProps=async()=>{
  return {
    props:{
      
    },
    revalidate: 60*60 //ATUALIZA A CADA 60 MINUTOS
  }
}
