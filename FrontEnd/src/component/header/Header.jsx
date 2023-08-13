import React, { useState } from "react";
import Add from "../task/Add";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className=" min-w-0 h-20 bg-[#2c2c38]  border-b-4 border-black  ">
        <div className="flex justify-between items-center h-full p-8 text-white">
          <h1 className="text-2xl">Platform Launch</h1>
          <div>
            <button
              className="rounded-2xl px-4 py-2  bg-[#635ec7] "
              onClick={() => {
                setShow(!show);
              }}
            >
              + Add New Task
            </button>
            <i className="fa-solid fa-ellipsis-vertical px-2 text-[#595866] fa-xl"></i>
          </div>
        </div>
      </header>
      {show && <Add />}
    </>
  );
}
