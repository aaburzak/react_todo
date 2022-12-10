import React, {useState} from 'react'

function TodoForm() {
const [input, setInput] = useState ('')

  return (
    <form className="todo_form">
        <input type="text" placeholder='Add a todo' value={input} name='text' className ='todo_input'/>
        <button className="todo_button">Add todo</button>
    </form>
  )
}

export default TodoForm