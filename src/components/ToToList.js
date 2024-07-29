import { useState } from "react";
import React from "react"
import { useSelector,useDispatch } from "react-redux";
import {addStudent,deleteStudent} from '../redux/listSlice'
import Add from "./Add";


export default function ToToList() {
    const students = useSelector(state=>state.students.students)
    const dispatch = useDispatch()
    const handle_add=(text)=>{
        dispatch(addStudent(text))
    }
  return (
    <div>
        <Add handle_add={handle_add}/>
      {
        students.map((item,index)=>
        <div key={index}>{item.name}
    <button onClick={()=>dispatch(deleteStudent(item.id))}>delete</button>
        </div>)
      }
    </div>
  )
}
