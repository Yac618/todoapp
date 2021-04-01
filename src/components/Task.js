import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../js/action";
import EditFrom from "./EditFrom";

const Task = ({ tasks }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((el) => (
        <div className="card">
          <h1 id={el.isDone ? "done" : ""}> {el.task} </h1>
          <button onClick={() => dispatch(completeTask(el.id))}>
            {" "}
            {el.isDone ? "Undo" : "Complete"}{" "}
          </button>
          <EditFrom oldTask={el} />
          <button id="del" onClick={() => dispatch(deleteTask(el.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;