import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "../task/View";

export default function Card({ data, data1, onHandelData }) {
  const [tasks, setTasks] = useState([]);
  const [subTask, setSubTask] = useState([]);
  const [showView, setShowView] = useState([]);

  const updateSubs = (updatedSubs) => {
    setSubTask(updatedSubs);
  };
  useEffect(() => {
    getTask();
  }, [data]);

  const getTask = async () => {
    console.log("1");
    try {
      const res = await axios.get(`http://127.0.0.1:8080/tasks/${data._id}`);
      setTasks(res.data.data);
      const response = await axios.get(`http://127.0.0.1:8080/subtasks/`);
      setSubTask(response.data.data);
      setShowView(new Array(res.data.data.length).fill(false));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleView = (index) => {
    setShowView((prevShowView) => {
      const newShowView = [...prevShowView];
      newShowView[index] = !newShowView[index];
      return newShowView;
    });
  };
  const handleStatusChange = (async) => {
    onHandelData();
  };

  const card = tasks.map((el, index) => {
    const subs = subTask.filter((element) => {
      return element.taskId === el._id;
    });
    const subsTrue = subs.filter((el) => {
      return el.status === true;
    });

    return (
      <div key={el._id}>
        <li
          onClick={() => {
            toggleView(index);
          }}
          className="bg-[#2c2b39] rounded-lg p-5 cursor-pointer"
        >
          <p className="text-white text-l pb-2">{el.title}</p>
          <p className="text-[#4e5464] ">
            {subsTrue.length} of subtask {subs.length}
          </p>
        </li>
        {showView[index] && (
          <View
            key={el._id}
            value={el}
            subs={subs}
            updateSubs={updateSubs}
            onStatusChange={handleStatusChange}
            data1={data1}
          />
        )}
      </div>
    );
  });

  return <ul className="grid gap-4 mt-4 ">{card}</ul>;
}
