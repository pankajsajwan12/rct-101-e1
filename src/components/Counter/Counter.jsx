import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const [count, setCount] = useState("0")
  const inCreament = (count) =>{
    setCount(count +1);
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={inCreament}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
