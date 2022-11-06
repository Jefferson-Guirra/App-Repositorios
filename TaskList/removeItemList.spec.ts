import { removeItemTaskList, Item } from './taskList'
type NewList = Item[]
type Function = (list: Item[], item:string) => NewList

describe('add', () => {
  it('adicionando items na lista', () => {
    const CreatSuit = (fuction: Function) => fuction
    const suit = CreatSuit(removeItemTaskList)
    const list: Item[] = [
      {
        name: 'Marcos',
        idade: 22,
        cor: 'azul'
      },
       {
        name: 'guilherme',
        idade: 22,
        cor: 'azul'
      },
      {
        name: 'Jefferson',
        idade: 22,
        cor: 'azul'
      }
    ]
    const newList = suit(list, 'Jefferson')
    /*expect(newList.length).toBe(2)*/
    expect(newList[2]).toBe(undefined)
  })
})