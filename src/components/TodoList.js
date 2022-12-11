import React, {useState} from 'react'
import Todo from './Todo'
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


const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if (todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos);
}


  return (
    <div>
        <h1>To Do List</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodos={completeTodo} />
    </div> 
  )
}

export default TodoList