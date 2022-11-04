import * as C from './styles'
import Head from 'next/head'
import {FiPlus,FiCalendar,FiEdit2,FiTrash,FiClock} from 'react-icons/fi'
import { SupportButton } from '../../components/SupportButton'
const Board = () => {
  return (
    <>
      <Head>
        <title>Minhas Tarefas</title>
      </Head>
      <C.container>
        <form>
          <input type="text" placeholder="digite sua tarefa..." />
          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>
        <h1>Você tem duas tarefas!</h1>
        <section>
          <C.taskList>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <C.actions>
              <div>
                <div>
                  <FiCalendar size={20} color="#FFB800" />
                  <time> 17 de agosto de 2022</time>
                </div>
                <button>
                  <FiEdit2 size={20} color="FFF" />
                  <span>editar</span>
                </button>
              </div>

              <button>
                <FiTrash size={20} color='#FF3636' />
                <span>Excluir</span>
              </button>
            </C.actions>
          </C.taskList>
        </section>
      </C.container>
      <C.vipContainer>
        <h3>Obrigado por apoiar esse projeto</h3>
        <div>
          <FiClock size={28} color="#FFF"/>
          <time>
            Última doação foi a 3 dias.
          </time>
        </div>
      </C.vipContainer>
      <SupportButton />
    </>
  )
}

export default Board
