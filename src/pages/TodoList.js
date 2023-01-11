import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { dlt } from '../redux/actions/addTodoCreate'
function TodoList() {
  const todos = useSelector((state)=>state)
  const dispatch = useDispatch()
  return (
    <>
    {todos.map((todo)=>(<li key={todo.id}>{todo.text}<button onClick={()=>dispatch(dlt(todo))}>Delete</button></li>))}
    </>
  )
}

export default TodoList