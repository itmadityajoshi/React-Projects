import React, { useState } from "react";
import Swal from "sweetalert2";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task && !day && !desc) {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Fill in your all your data.",
        timer: 4000,
      });
    } else if (!task && !desc && day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your Task and Description data.",
      });
    } else if (!task && desc && day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your task data.",
      });
    } else if (task && !desc && day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your Descriptions data.",
      });
    } else {
      onSave({ task, desc, day });
    }

    setTask("");
    setDesc("");
    setDay("");
  };

  const onSave= ()=>{

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid tems-center justify-center gap-6 my-8  text-xl mx-auto grid-rows-3"
    >
      <div className="">
        <span>Add Task</span>
        <input
          type="text"
          placeholder="Type Task here"
          className="input input-bordered w-full max-w-xs"
          value={task}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="">
        <span>Add Descriptions</span>
        <input
          type="text"
          placeholder="Type descriptions here "
          className="input input-bordered w-full max-w-xs"
          value={desc}
          onChange={(e) => e.target.value}
        />
      </div>

      <div className="">
        <span>Add Date and Time</span>
        <input
          type="text"
          placeholder="Type Date and Time here "
          className="input input-bordered w-full max-w-xs"
          value={day}
          onChange={(e) => e.target.value}
        />
        
      </div>
      <input type="submit" className="btn btn-primary w-full max-w-xs text-xl text-center" value="Save Task" />      
      
    </form>
  );
};

export default AddTask;
