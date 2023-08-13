import React, { useEffect, useState } from "react";
import axios from "axios";

export default function View({ value, subs, updateSubs, onStatusChange }) {
  const [sub, setSub] = useState(subs);
  const [label, setLabels] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://127.0.0.1:8080/label`);
    setLabels(res.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = async (subTaskId) => {
    try {
      const subTaskToUpdate = sub.find((subTask) => subTask._id === subTaskId);

      const updatedStatus = !subTaskToUpdate.status;

      await axios.patch(`http://127.0.0.1:8080/subtasks/${subTaskId}`, {
        status: updatedStatus,
      });

      const updatedSubs = sub.map((subTask) =>
        subTask._id === subTaskId
          ? { ...subTask, status: updatedStatus }
          : subTask
      );

      setSub(updatedSubs);
      updateSubs(updatedSubs);
    } catch (error) {
      console.log(error);
    }
  };
  const handelChangeStatus = async (e) => {
    await axios.patch(`http://127.0.0.1:8080/tasks/${value._id}`, {
      labelId: e.target.value,
    });
    onStatusChange();
  };

  const Sub = sub.map((el) => (
    <div
      className="flex items-center border-b border-gray-300 py-2"
      key={el._id}
    >
      <input
        type="checkbox"
        id={el._id}
        className="mt-1 mr-2"
        checked={el.status}
        onChange={() => handleCheckboxChange(el._id)}
      />
      <label htmlFor={el._id}>{el.title}</label>
    </div>
  ));

  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md text-white bg-[#2c2c38] w-[33%] p-4 border border-gray-400">
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{value.title}</p>
          <span>
            <i className="fa-solid fa-ellipsis-vertical px-2 text-[#595866] text-xl"></i>
          </span>
        </div>
        <div>
          <p>{value.desc}</p>
        </div>
        <div>
          {value.subTaskId.length > 0 && (
            <p className="mb-2">Subtasks ({value.subTaskId.length})</p>
          )}
          <form className="grid gap-2">{Sub}</form>

          <div className="grid text-black">
            <label htmlFor="task-select" className="text-white mb-2">
              Status
            </label>
            <select
              name="labelId"
              id="task-select"
              onChange={handelChangeStatus}
              className="rounded-md p-1 bg-gray-200"
            >
              <option value="----">----</option>
              {label?.map((el) => (
                <option key={el._id} value={el._id}>
                  {el.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
