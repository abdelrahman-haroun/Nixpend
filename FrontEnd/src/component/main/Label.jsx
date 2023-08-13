import React from "react";
import Card from "./Card";

export default function Label({ data1, onHandleData }) {
  const handleDataChange = async () => {
    onHandleData();
  };
  return (
    <div>
      {data1.map((el) => (
        <div key={el._id}>
          <div className="flex items-center gap-2 text-[#7b8093]">
            <div className={`w-3 rounded-full bg-[${el.color}] h-3`}></div>
            <p className="text-lg">
              {el.title}
              <span> ({el.taskId.length})</span>
            </p>
          </div>
          <Card data={el} data1={data1} onHandelData={handleDataChange} />{" "}
        </div>
      ))}
    </div>
  );
}
