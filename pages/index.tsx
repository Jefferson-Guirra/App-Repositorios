import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as C from '../styles/home'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import {db} from '../services/firebaseConnection'

type Props = {
  donateUsers:string
}

type Data = {      
    donate:boolean,
      lastDonate:Date,
      image:string
}
export default function Home({donateUsers}:Props) {
  const usersVip:Data[] = JSON.parse(donateUsers)
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
        {usersVip.length && <h3>Apoiadores:</h3>}
        {usersVip.length > 0 && <C.donaters>
          {usersVip.map((user,index)=><img key={index} src={user.image} alt='imagem do usuario'/>)}
        </C.donaters>}
      </C.container>
    </>
  )
}

export const getStaticProps:GetStaticProps=async()=>{
  const ref = collection(db, 'users')

  const donateUsers = JSON.stringify(await getDocs(query(ref,orderBy('lastDonate','desc')))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                return newData
          }))
  return {
    props:{
      donateUsers
    },
    revalidate: 60*60 //ATUALIZA A CADA 60 MINUTOS
  }
}
