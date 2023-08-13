import React from "react";
import { Routes, Route } from "react-router-dom";
import Aside from "./component/aside/Aside";
import Header from "./component/header/Header";
import BarChart from "./component/platform/Markting";
import Main from "./component/main/Main";
import { TaskProvider } from "./component/context/Context";

function App() {
  return (
    <TaskProvider>
      <div className="flex">
        <Aside />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/bar-chart" element={<BarChart />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
