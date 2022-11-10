import { GetServerSideProps } from 'next'
import Head from 'next/head'
import * as C from '../../styles/detalhes'
import { getSession } from 'next-auth/react'
import { Login } from '../../types/board'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'
import { Params, Props, TaskType } from '../../types/detailsType'
import { FiCalendar } from 'react-icons/fi'

const Task = ({ data}: Props) => {
  const task = JSON.parse(data) as TaskType
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

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { id } = params as Params
  const session = (await getSession({ req })) as Login | null

  if (!session?.vip) {
    return {
      redirect: {
        destination: '/board',
        permanent: false
      }
    }
  }

  let data
  const ref = doc(db, 'tarefas', id)
  const docSnap = await getDoc(ref)

  if (docSnap.exists()) {
    data = docSnap.data()
    data.id = docSnap.id
    data = JSON.stringify(data)
  } else {
    // doc.data() will be undefined in this case
    return {
      redirect: {
        destination: '/board',
        permanent: false
      }
    }
  }

  return {
    props: {
      data,
    }
  }
}
