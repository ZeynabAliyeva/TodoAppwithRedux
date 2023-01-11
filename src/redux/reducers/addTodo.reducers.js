import { INPUT, DELETE,TOTAL } from "../actions/add.todo";

const initialState = []

const addTodoReducer = (state = initialState, action){
    switch (action.type) {
        case INPUT:
          return {
            
          };
        case DELETE:
          return {
            
          };
    
        case TOTAL: {
          return {
            
          };
        }
        default:
          return state;
      }
}