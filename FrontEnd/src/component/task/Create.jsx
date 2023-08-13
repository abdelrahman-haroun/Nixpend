import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Create({ onNewLabel }) {
  const [data, setData] = useState({ color: "#000" });

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/label/create",
        data
      );

      onNewLabel(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed border border-gray-400 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#2c2c38] w-[33%] p-5 text-white">
      <h2 className="text-center mb-2 text-2xl">Create New Label</h2>
      <form className="grid gap-5 justify-center">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="title"
          className="w-full p-2 bg-gray-200 text-black rounded-md"
          onChange={handelChange}
        />
        <label htmlFor="color" className="text-white">
          Color
        </label>
        <input
          type="color"
          id="color"
          name="color"
          className="w-full p-2 bg-gray-200 text-black rounded-md"
          onChange={handelChange}
        />
        <button
          onClick={handelClick}
          className="w-full p-2 bg-[#635ec7] text-white rounded-lg"
        >
          Create
        </button>
      </form>
    </div>
  );
}
