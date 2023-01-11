import { INPUT,DELETE, TOTAL} from "./add.todo";

export const input = () =>{
    return {
        type:INPUT,
        payload:""
    }
}
export const delete = () =>{
    return {
        type:DELETE,
        payload:""
    }
}
export const total = () =>{
    return {
        type:TOTAL,
        payload:""
    }
}