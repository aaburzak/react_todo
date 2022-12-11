import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // eliminates unecessary spaces from input
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo,...todos);
    }



  return (
    <div>
        <h1>To Do List</h1>
        <TodoForm onSubmit={addTodo} />
    </div> 
  )
}

export default TodoList