import React from "react";

export default function edit() {
  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md  text-white bg-[#2c2c38] w-[33%]">
      <div className="grid p-5 gap-8">
        <div className="flex justify-between">
          <input type="text" value={title} />
          <span>
            <i className="fa-solid fa-ellipsis-vertical px-2 text-[#595866] fa-xl"></i>
          </span>
        </div>
        <div>
          <input type="" />
        </div>
        <div>
          <p className="mb-2">subtask()</p>
          <form className="grid gap-2">
            <label htmlFor="1">
              <input type="checkbox" id="1" />
              asdsadsdasdsadsad
            </label>
            <label htmlFor="2">
              <input type="checkbox" id="2" />
              asdsadsdasdsadsad
            </label>
            <label htmlFor="3">
              <input type="checkbox" id="3" />
              asdsadsdasdsadsad
            </label>
          </form>
          <div className="grid text-black">
            <label for="task-select " className="text-white mb-2">
              Status
            </label>

            <select name="pets" id="task-select">
              <option value="TODO">TODO</option>
              <option value="DOING">DOING</option>
              <option value="DONE">DONE</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
