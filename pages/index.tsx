import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as C from '../styles/home'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import {db} from '../services/firebaseConnection'
import homeImg from '../public/images/board-user.svg'
import Image from 'next/image'

type Props = {
  donateUsers:string,
  githubSecret:string,
  urlApi:string,
  githubId:string,
  jwtSecret:string
}

type Data = {      
    donate:boolean,
      lastDonate:Date,
      image:string
}
export default function Home({donateUsers,githubSecret,urlApi,githubId,jwtSecret}:Props) {
  const usersVip:Data[] = JSON.parse(donateUsers)
  return (
    <>
      <Head>
        <title>Board - Organizando suas Tarefas.</title>
      </Head>
      <C.container>
        <div className="img">
          <Image src={homeImg} width={420} alt="ferramenta board" />
        </div>
        <C.callToAction>
          <h1>
            Uma ferramenta para o seu dia a dia Escreva planeje organize-se...
          </h1>
          <p>
            <span>100% gratuita</span> e online.
          </p>
        </C.callToAction>
        {usersVip.length && <h3>Apoiadores:</h3>}
        {usersVip.length > 0 && (
          <C.donaters>
            {usersVip.map((user, index) => (
              <img src={user.image} alt="usuarios" />
            ))}
          </C.donaters>
        )}
      </C.container>
      <p>{githubSecret}</p>
      <p>{urlApi}</p>
      <p>id:{githubId}</p>
      <p>{jwtSecret}</p>
    </>
  )
}

export const getStaticProps:GetStaticProps=async()=>{
  const ref = collection(db, 'users')
  const githubSecret = process.env.GITHUB_SECRET
  const urlApi = process.env.NEXTAUTH_URL
  const githubId = process.env.GITHUB_ID
  const jwtSecret = process.env.SECRET_JWT



  const donateUsers = JSON.stringify(await getDocs(query(ref,orderBy('lastDonate','desc')))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                return newData
          }))
  return {
    props:{
      donateUsers,
      urlApi,
      githubSecret,
      githubId,
      jwtSecret
    },
    revalidate: 60*60 //ATUALIZA A CADA 60 MINUTOS
  }
}
