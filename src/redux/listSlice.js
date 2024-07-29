import {createSlice} from "@reduxjs/toolkit"
const initialState ={
    students:[
        {id:1, name:"jam1", checked:false},
        {id:2, name:"jam2", checked:false},
        {id:3, name:"jam3", checked:false}
    ]
}
const listSlice =createSlice({
    name:"student",
    initialState,
    reducers:{
        addStudent(state,action){
            state.students=[...state.students,{id:4,name:action.payload,checked:false}]
        },
        deleteStudent(state,action){
            state.students= state.students.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addStudent,deleteStudent} = listSlice.actions
export default listSlice.reducer