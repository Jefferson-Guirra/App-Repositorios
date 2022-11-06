import { addItemTaskList, Item } from './taskList'
type NewList = Item[]
type Function = (list: Item[], item: Item) => NewList

describe('add', () => {
  it('adicionando items na lista', () => {
    const CreatSuit = (fuction: Function) => fuction
    const suit = CreatSuit(addItemTaskList)
    const list: Item[] = [
      {
        name: 'Marcos',
        idade: 22,
        cor: 'azul'
      }
    ]
    const addItem: Item = { name: 'Paulo', idade: 27, cor: 'preto' }
    const newList = suit(list, addItem)
    /*expect(newList.length).toBe(2)*/
    expect(newList[0].name).toBe('Marcos')
  })
})
