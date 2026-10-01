import React, { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

// an input bar to get input-text(non-empty) with an enter btn
// a div to display the list of to-do items
  // each item needs to have a checkbox and a delete button
    // checkbox checked will make text strikethrough text
    // delete btn click must remove the to-do item
  
// NOTE: case insensitive duplicates are allowed

interface ModelToDoItem {
  id?: number,
  text: string,
  completed: boolean
}

function App() {
  const [todoItems, setTodoItems] = useState<ModelToDoItem[]>([
    {id: 1, text: 'hi', completed: false},
    {id: 2, text: 'hello', completed: true}]);
  
  const updateTodoItems = (toDoData: string) => {
    if(toDoData.trim() === "") return;
    const toDoObj: ModelToDoItem = {
      id: todoItems.length+1,
      text: toDoData,
      completed: false
    }
    setTodoItems(prevObj => [...prevObj, toDoObj])
  }

  const removeTodoItem = (id: number) => {
    
    const newTodoListItems = todoItems.filter(item => item.id != id);
    setTodoItems(newTodoListItems)
  }

  const updateToDoCheckBox = (id: number) => {
    console.log('toDoData', id);
    setTodoItems(
      todoItems.map(item => {
        if(item.id == id) {
          return {
            ...item, completed: !item.completed
          }
        }
        else {
          return item
        }
      })
    )
  }

  

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList 
        data={todoItems} 
        updateTodoList={updateTodoItems} 
        deleteTodoItem={removeTodoItem}
        toggleCheckbox={updateToDoCheckBox}
      />

    </div>
  )
}

export default App
