import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changname,changeage,changeclass } from "../redux/studentSlice";

export default function Exam2() {
  const dispatch = useDispatch();
  const studentinformation = useSelector((state) => state.student.studentinfo);
  const studentclassinformation = useSelector((state) => state.student.studentclass);
  return (
    <>
      <div>
        <h1>User: {studentinformation.name}</h1>
        <h1>User: {studentinformation.age}</h1>
        <h1>User: {studentclassinformation.class}</h1>
        <button onClick={() => dispatch(changname("Name new"))}>Name change</button>
        <button onClick={() => dispatch(changeage(12))}>Age change</button>
        <button onClick={() => dispatch(changeclass("B"))}>Length change</button>
      </div>
    </>
  );
}
