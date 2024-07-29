import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    studentinfo:{
        name:"Name1",
        age:100
    },
    studentclass:{
        class:"A"
    }
}
const studentSlice=createSlice({
name:"student",initialState,reducers:{
    changname(state,action){
        state.studentinfo.name=action.payload
    },
    changeage(state,action){
        state.studentinfo.age=action.payload
    },
    changeclass(state,action){
        state.studentclass.class=action.payload
    }
}

})
export const {changname,changeage,changeclass}=studentSlice.actions
export default studentSlice.reducer