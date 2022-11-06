export type Item ={
  name:string,
  idade:number,
  cor:string
}

export const addItemTaskList = (list:Item[],item:Item) =>{
  const newList = [...list,item]
  return newList
}

export const removeItemTaskList = (list:Item[],item:string) =>{
  const newList = list.filter(listItem => listItem.name !== item)
  return newList
}

export const changeItemList = (list:Item[],change:string,item:Item) =>{
  const newList = list.map(listItem=>{
    if(listItem.name === change){
      listItem.name = item.name
      listItem.idade = item.idade
      listItem.cor = item.cor
      return listItem
    }
    else{
      return listItem
    }
  })
  return newList
}