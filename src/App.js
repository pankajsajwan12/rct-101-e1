import React from "react";
import Counter from "./components/Counter/Counter";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";
function App() {
  return <div>{/* Code Here */}
    <TaskHeader/>
    <AddTask/>
    <Counter/>
    <Task/>
  </div>;
}

export default App;
