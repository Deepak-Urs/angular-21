import { useState } from "react"

const ToDoList = () => {
    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList] = useState([{idx: 1, text: 't1', status: false}, {idx: 2, text: 't12', status: true}])

    const toggleCheckbox = (idx: number) => {
        const newTodoList = [...todoList];
        newTodoList.map((item) => {
            if(item.idx === idx) {
                item.status = !item.status;
            }
        })
        setTodoList(newTodoList);
    }

    const createTodo = (e:any) => {
        if(e.key === "Enter" && inputText.trim()){
            const todoObj = {
                idx: todoList.length+1,
                text: inputText,
                status: false
            };
            setTodoList(prev => [...prev, todoObj]);
            setInputText('');
        }
    }

    const deleteTaskItem = (index: number) => {
        console.log(index);
        const originalList = [...todoList];
        const newList = originalList.filter(item => item.idx !== index);
        setTodoList(newList);
    }


  return (
    <div>
      <input type="text" placeholder="Enter the task item" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => createTodo(e)}/>
      <p>Task value: {inputText}</p>
      <div>
        
        <ul>
        {todoList.map((item, index) => <li key={index} className={item.status ? 'striked-text' : ''}>
            <span>
                <input type="checkbox" checked={item.status} onChange={() => toggleCheckbox(item.idx)}/>
            </span> 
            {item.text}
            <span style={{color: "red", cursor: "pointer"}} onClick={() => deleteTaskItem(item.idx)}> x</span>
        </li>)}
        </ul>
        
      </div>
    </div>
  )
}

export default ToDoList
