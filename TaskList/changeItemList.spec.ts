import { changeItemList, Item } from './taskList'
type NewList = Item[]
type Function = (list: Item[],change:string, item: Item) => NewList

describe('add', () => {
  it('adicionando items na lista', () => {
    const CreatSuit = (fuction: Function) => fuction
    const suit = CreatSuit(changeItemList)
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

    const newItem:Item = {name:'lucas',idade:22,cor:'vermelho'}
    const newList = suit(list,'Jefferson',newItem)
    /*expect(newList.length).toBe(2)*/
    expect(newList[2].name).toBe('lucas')
  })
})
