import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'Aprender   a programar com o framework ReactJS.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar JS',
    descricao: 'Aprender   a programar com o JS.',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Descansar',
    descricao: 'Descansar.',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
