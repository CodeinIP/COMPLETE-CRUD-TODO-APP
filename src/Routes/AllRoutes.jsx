import React from "react";
import { Routes, Route } from "react-router-dom";
import AllTasks from "../Pages/AllTasks";
import SingleTask from "../Pages/SingleTask";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/task/:taskId" element={<SingleTask />} />
        <Route path="/" element={"summary"} />
        <Route path="*" element={"404"} />
      </Routes>
    </>
  );
};

export default AllRoutes;
