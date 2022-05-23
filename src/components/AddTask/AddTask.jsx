import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [vale, setVale]= useState([]);
  const addData = (e)=>{
    setVale(e.target.value)
  }
  const addDataToClick = ()=>{
    

  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task....." onChange={addData}/>
      <button data-cy="add-task-button" onClick={addDataToClick}>+</button>
    </div>
  );
};

export default AddTask;
