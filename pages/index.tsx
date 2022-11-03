import Head from 'next/head'
import Image from 'next/image'
import * as C from '../styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas Tarefas.</title>
      </Head>
      <C.container>
        <h1>primeiro projeto com Nextjs</h1>
      </C.container>
    </>
  )
}
