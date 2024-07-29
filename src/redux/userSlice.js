import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user:{name:"Le Meo",age:1000},
    length:2
}
const userSlice=createSlice({
    name:"user",initialState,reducers:{
        changename(state,action){
            state.user.name=action.payload
        },
        changeage(state,action){
            state.user.age=action.payload
        },
        changelength(state,action){
            state.length=action.payload
        }
    }

})
export const {changename,changeage,changelength}=userSlice.actions
export default userSlice.reducer