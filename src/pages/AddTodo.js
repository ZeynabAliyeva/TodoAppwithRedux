import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { add } from '../redux/actions/addTodoCreate'
function AddTodo() {
    const [value,setValue]=useState("");
    const dispatch = useDispatch()
    const submitForm = (event) => {
		event.preventDefault();
		dispatch(add(value));
		setValue('');
	};
  return (
    <>
    <form onSubmit={(event) => submitForm(event)}>
    <input type="text" placeholder='bura yaz' value={value} onChange={(e) => setValue(e.target.value)}/>
    <button>Add</button>
    </form>
    </>
  )
}
export default AddTodo