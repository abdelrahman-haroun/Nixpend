import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Aside() {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);

  return (
    <>
      <aside className="min-h-screen flex  border-r-4 border-black ">
        <div className="w-64  bg-[#2c2c38] relative ">
          <div className="mt-24 text-[#7b8093]">
            <h2 className="uppercase text-sm px-8">
              All Boards <span className="px-1">(0)</span>
            </h2>
            <ul className="mt-2 pr-6">
              <li
                className={` mb-2 p-2 hover:text-white w-full hover:bg-[#635ec7]  rounded-e-2xl   ${
                  active ? "bg-[#635ec7] text-white" : ""
                }`}
              >
                <span>
                  <i className="fa-solid fa-table-list px-2 "></i>
                </span>
                <Link
                  to="/"
                  onClick={() => (setActive(true), setActive1(false))}
                >
                  {" "}
                  Platform Launch
                </Link>
              </li>
              <li
                className={`p-2 hover:text-white w-full mb-2  hover:bg-[#635ec7]  rounded-e-2xl   ${
                  active1 ? "bg-[#635ec7] text-white" : ""
                }`}
              >
                <span>
                  <i className="fa-solid fa-table-list px-2"></i>
                </span>
                <Link
                  to="/bar-chart"
                  onClick={() => (setActive(false), setActive1(true))}
                >
                  {" "}
                  Marketing Plan
                </Link>
              </li>
              <li className="p-2 mb-2  hover:text-white w-full hover:bg-[#635ec7] rounded-e-2xl">
                <span>
                  <i className="fa-solid fa-table-list px-2"></i>
                </span>
                Roadmap
              </li>
              <li className="p-2 mb-2  text-[#4d4e7a]">
                <span>
                  <i className="fa-solid fa-table-list px-2"></i>
                </span>{" "}
                +Create New Board
              </li>
            </ul>
          </div>
          <div className="bottom-28 absolute w-[100%] px-8   ">
            <div className="bg-[#21212d] flex justify-center items-center gap-8 h-10 rounded">
              <i className="fa-regular fa-moon text- fa-lg"></i>
              <i className="fa-solid fa-toggle-on text-[#6861ba] fa-xl"></i>
              <i className="fa-regular fa-sun text-[#515765] fa-lg"></i>
            </div>
            <div className="pt-2 ">
              <p className="text-[#515765]">
                <span className="px-2 ">
                  <i className="fa-solid fa-eye-slash "></i>
                </span>
                Hide Sidebar
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
