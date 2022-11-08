import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import * as C from './styles'
import { Login } from "../board"
import { PayPalButtons } from '@paypal/react-paypal-js'
import {useCallback} from 'react'


  type Props = {
  user : {
    nome: string,
    id: string,
    image: string
  }
}
//AcAcqRy0YXQo8w3nLKJBrwz7QUa14gmObIvRDEWI3Rhu_9Ua-8OSzn4tyHxBsv85X-i78aRBCoE9S7Gu
//<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
const donate = ({user}:Props)=>{

  
  
  return (
    <>
      <Head>
        <title>Ajude a plataforma board ficar online!</title>
      </Head>
      <C.container>
        <div className="rocket">
          <img src="/images/rocket.svg" alt="Seja apoaidor" />
        </div>
        <div className="vip">
          <img src={user.image} alt="foto de perfil do usuario" />
          <span>Parabéns você é um novo apoiador</span>
        </div>
        <h1>
          Seja um apoiador deste projeto{' '}
          <span className="thropy">
            <img src="/images/throphy.svg" alt="trofeu" />
          </span>
        </h1>
        <h3>
          Contribua com apenas <span>R$ 1,00</span>
        </h3>
        <strong>
          Apareça na nossa home, tenha funcionalidades exclusivas.
        </strong>
        <div className="paypal">

        <PayPalButtons 
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '1'
                  }
                }
              ]
            })
          }}
          onApprove={(data, actions) => {
            return actions.order?.capture().then(function (details) {
              console.log('Compra aprovada: ' + details)
            })
          }}
        />
        </div>
      </C.container>
    </>
  )

}

export default donate

export const getServerSideProps:GetServerSideProps= async ({req})=>{
  const session = await getSession({req}) as Login | null

  if(!session?.id){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }

  const user = {
    nome:session.user.name,
    id:session.id,
    image:session.user.image
  }


  return{
    props:{
      user
    }
  }
}