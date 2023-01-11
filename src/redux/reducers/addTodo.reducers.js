import { ADD, DELETE } from "../actions/add.todo";

const initialState = []

const addTodoReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD:
          return [...state,{id:new Date().getTime(),text:action.payload}]
        case DELETE:
          return state.filter((todo)=>todo.id !==action.payload.id)
        default:
          return state;
      }
}
export default addTodoReducer;