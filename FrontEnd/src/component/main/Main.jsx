import React, { useEffect, useState, useContext } from "react";
import Label from "./Label";
import axios from "axios";
import Create from "../task/Create";
import { TaskContext } from "../context/Context";

export default function Main() {
  const [labels, setLabels] = useState([]);
  const [show, setShow] = useState(false);
  const { addTask } = useContext(TaskContext);
  const handleData = () => {
    getLabels();
  };
  const getLabels = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/label");
      setLabels(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLabels();
  }, [addTask]);

  const handleNewLabel = (newLabel) => {
    setLabels([...labels, newLabel]);
  };

  return (
    <main className="p-5 w-80% bg-[#21212d] min-h-screen">
      <div className="grid grid-cols-4 gap-8">
        {labels.map((label) => (
          <div key={label._id}>
            <Label data1={[label]} onHandleData={handleData} />
          </div>
        ))}

        <div>
          <div className="flex items-center gap-2 h-10 "></div>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="h-full bg-[#2c2b39] text-[#4e5464] max-h-[55%] flex items-center justify-center cursor-pointer"
          >
            + New Column
          </div>
        </div>

        {show && <Create onNewLabel={handleNewLabel} />}
      </div>
    </main>
  );
}
