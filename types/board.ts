export type VipUser = {
  donate: boolean
  image: string
  lastDonate: Date
}

export type User = {
  name: string
  email: string
  image: string
}
export type Login = {
  user: User
  expires: string
  id: string
  vip: boolean
  lastDonate: string | null
}

export type Data = {
  id: string
  created: string | Date
  createdFormat?: string
  tarefa: string
  userId: string
  nome: string
}
export type LastDonate = {
  seconds: number
  nanoseconds: number
}
export type Props = {
  userLogin: {
    nome: string
    id: string
    vip: boolean | undefined
    lastDonate: LastDonate
  }
  list: string
}
