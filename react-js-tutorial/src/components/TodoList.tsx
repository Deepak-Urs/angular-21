import React, { useState } from "react";

interface ModelToDoItem {
  id: number
  text: string
  completed: boolean
}

interface TodoListProps {
  data: ModelToDoItem[],
  updateTodoList: Function,
  deleteTodoItem: Function,
  toggleCheckbox: Function
}

const TodoList = ({data, updateTodoList, deleteTodoItem, toggleCheckbox}: TodoListProps) => { 
    const [toDoData, setToDoData] = useState<string>("");

    return (
      <div className="form-group">
        <div className="input-bar">
          <input type="text" placeholder="Enter todo" className="form-group" value={toDoData} onChange={(e) => setToDoData(e.target.value)}/>
          <button onClick={() => {updateTodoList(toDoData); setToDoData("")}}>Enter</button>
        </div>

        {data.length == 0 ? 
          <h5>ToDo list is empty</h5> : <ul className="list-items">
          {data.map(item => {
            return (
              <div className="todo-item" key={item.id}>
                <input type="checkbox" 
                  checked={item.completed}
                  onChange={() => toggleCheckbox(item.id)}
                />
                <div style={item.completed ? {textDecoration: 'line-through'} : {}}>{item.text}</div>
                <button onClick={() => deleteTodoItem(item.id)}>Delete</button>
              </div>
            )
          })}
        </ul>}
      </div>
    )
  
}

export default TodoList;