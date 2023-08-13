import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TaskContext } from "../context/Context";

export default function Add() {
  const [task, setTask] = useState({ title: "", desc: "", labelId: "" });
  const [subTask, setSubTask] = useState({ title: "", taskId: "" });
  const [subTasks, setSubTasks] = useState([]);
  const [label, setLabel] = useState([]);
  const { addTask } = useContext(TaskContext);

  const getLabel = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/label");
      setLabel(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLabel();
  }, []);

  const handelChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handelSubChange = (e) => {
    setSubTask({ ...subTask, [e.target.name]: e.target.value });
  };

  const handelSubTask = () => {
    setSubTasks([...subTasks, { ...subTask }]);
    setSubTask({ title: "", taskId: "" }); // Reset the subTask state
  };

  const Subs = subTasks.map((el, index) => (
    <div key={index}>
      <input
        type="text"
        className="p-2 mb-2 border-2 w-[90%] border-[#353541] bg-[#2c2c38] text-white"
        value={el.title}
      />
    </div>
  ));

  const labels = label.map((el) => (
    <option key={el._id} value={el._id}>
      {el.title}
    </option>
  ));

  const handelCreate = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8080/tasks/create", task);
      const SubTasks = subTasks.map((el) => ({
        ...el,
        taskId: res.data.data._id,
      }));

      const response = await axios.post(
        "http://127.0.0.1:8080/subtasks/create",
        SubTasks
      );
      addTask(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#2c2c38] w-[33%] p-4 border border-gray-400 text-white">
      <div className="grid gap-6 text-[#7b8093]">
        <div>
          <p className="font-semibold">Title</p>
          <input
            type="text"
            className="w-[90%] p-2 bg-gray-200 text-black"
            name="title"
            onChange={handelChange}
            value={task.title}
          />
        </div>
        <div>
          <p className="font-semibold">Description</p>
          <input
            type="text"
            className="w-[90%] p-2 bg-gray-200 text-black"
            name="desc"
            onChange={handelChange}
            value={task.desc}
          />
        </div>
        <div>
          <p className="mb-2 font-semibold">Subtasks</p>
          {Subs}
          <input
            type="text"
            name="title"
            className="w-[90%] p-2 bg-gray-200 text-black"
            onChange={handelSubChange}
            value={subTask.title}
          />
          <button
            onClick={handelSubTask}
            className="w-full mt-3 p-2 bg-white text-[#635ec7] rounded-lg"
          >
            + Add New Subtask
          </button>
          <div className="grid text-black">
            <label htmlFor="task-select" className="text-white mb-2">
              Status
            </label>
            <select
              name="labelId"
              id="task-select"
              onChange={handelChange}
              value={task.labelId}
              className="rounded-md p-1 bg-gray-200"
            >
              {labels}
            </select>
          </div>
        </div>
        <button
          className="w-full p-2 bg-[#635ec7] text-white rounded-lg"
          onClick={handelCreate}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}
