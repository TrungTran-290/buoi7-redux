import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { countDown, countUp } from "../redux/countSlice";
import { changename, changeage, changelength } from "../redux/userSlice";

export default function Exam() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  const info = useSelector((state) => state.user.user);
  const length = useSelector((state) => state.user.length);
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(countDown())}>DOWN-</button>
        <button onClick={() => dispatch(countUp())}>UP+</button>
      </div>
      <div>
        <h1>User: {info.name}</h1>
        <h1>User: {info.age}</h1>
        <h1>User: {length}</h1>
        <button onClick={() => dispatch(changename("Buoi"))}>Name change</button>
        <button onClick={() => dispatch(changeage(12))}>Age change</button>
        <button onClick={() => dispatch(changelength(3))}>Length change</button>
      </div>
    </>
  );
}
