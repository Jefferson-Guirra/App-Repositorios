import { GetServerSideProps } from "next"
import Head from "next/head"
import * as C from './task'
import { getSession } from "next-auth/react"
import { Login } from "./index"
import { getDoc,doc } from "firebase/firestore"
import { db } from "../../services/firebaseConnection"
import {
  FiPlus,
  FiCalendar,
  FiEdit2,
  FiTrash,
  FiClock,
  FiX
} from 'react-icons/fi'

type Params={
  id:string
}
type Props = {
  data: string 
}
type Task = {
  id: string
  created: string | Date
  createdFormat?: string
  tarefa: string
  userId: string
  nome: string
}
const Task = ({data}:Props)=>{
  const task = JSON.parse(data) as Task
  return (
    <>
      <Head>
        <title>Detalhes da sua Tarefa</title>
      </Head>
      <C.Container>
        <div>
          <div>
            <FiCalendar size={30} color="FFB800" />
            <span>Tarefa criada:</span>
            <time className="time">{task.createdFormat}</time>
          </div>
        </div>
        <p>{task.tarefa}</p>
      </C.Container>
    </>
  )
}

export default Task

export const getServerSideProps:GetServerSideProps = async ({req,params})=>{
  const {id} = params as  Params
  const session = await getSession({req}) as Login | null

  
  if(!session?.id){
    return{
      redirect:{
        destination:'/board',
        permanent:false
      }
    }
  }

  let data
  const ref = doc(db, 'tarefas',id)
  const docSnap = await  getDoc(ref)
  
  if (docSnap.exists()) {
    data =docSnap.data()
    data.id = docSnap.id
    data = JSON.stringify(data)
    console.log(docSnap.id)
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!')
  }

 
  return{
    props:{
      data

    }
  }
}