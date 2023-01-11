import { createStore } from 'redux';
import addTodoReducer from '../reducers/addTodo.reducers';
const store = createStore(addTodoReducer)
export default store
