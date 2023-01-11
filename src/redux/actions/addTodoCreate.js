import {ADD,DELETE} from "./add.todo";

export const add = (todo) =>{
    return {
        type:ADD,
        payload:todo
    }
}
export const dlt = (todo) =>{
    return {
        type:DELETE,
        payload:todo
    }
}
