import { useState } from "react";
import React from "react"
import { useSelector,useDispatch } from "react-redux";
import {addStudent,deleteStudent} from '../redux/listSlice'
import Add from "./Add";


export default function ToToList() {
    const students = useSelector(state=>state.students.students)
    const dispatch = useDispatch()
    const [flag,setFlag]=useState("")
    const filterList=(list,flag)=>{
      if (flag=="Checked"){
        return list.filter(item=>item.checked)
      }
      else if (flag=="Checked"){
        return list.filter(item=>!item.checked)
      }
      else {
          return list
      }
    }
    const handle_add=(text)=>{
        dispatch(addStudent(text))
    }
  return (
    <div>
        <Add handle_add={handle_add}/>
      {
        filterList(students,flag).map((item,index)=>
        <div key={index}>{item.name}
    <button onClick={()=>dispatch(deleteStudent(item.id))}>delete</button>
        </div>)
      }
      <button onClick={()=>{setFlag("Checked")}}>Checked</button>
      <button onClick={()=>{setFlag("UnChecked")}}>UnChecked</button>
      <button onClick={()=>{setFlag("Clear")}}>Clear</button>
    </div>
  )
}
