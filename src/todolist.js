import crypto from 'crypto'

class ToDoList {
  constructor() {
    this.toDos = []
  }

  createToDo(text) {
    const toDo = {
      id: crypto.randomUUID(),
      text,
      complete: false
    }

    this.toDos.push(toDo)
    return toDo
  }

  getAllToDos() {
    return this.toDos
  }

  setToDo(id) {
    
  }
}

export default ToDoList
