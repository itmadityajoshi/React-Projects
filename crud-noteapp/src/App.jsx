import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState("");
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    alret("Welcome to our App");
  }, []);


  return ( 
      <div>
      <Header  showForm={()=>setShowAddTask(!showAddTask)}/>
      {showAddTask &&  <AddTask onSave={addTask}/>}

      {
        tasks.length >0 ? <Tasks
      }
      <Tasks />

      </div>
     
    </>
  );
};

export default App;
