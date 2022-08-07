import React, { useState } from "react";
import { addTodo } from "../../store/reducer/todosSlice";
import { useDispatch } from 'react-redux'

const TodoForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('')

  const changeTitle = e => {
    setTitle(e.target.value)
  }

  const addSingleTodo = e => {
    e.preventDefault()

    dispatch(addTodo(title))
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={addSingleTodo}>
        <input type='text' value={title} onChange={changeTitle}></input>
        <input type='submit' value='ADD'></input>
      </form>
    </div>
  )
}

export default TodoForm