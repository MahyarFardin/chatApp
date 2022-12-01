import React from "react";
import HomeComp from "../../Components/News/News.component";
import Dashboard from "../../Components/Dashboard/Dashboard.component";

export const Home = () => {
  return (
    <div className="w-full h-screen grid grid-cols-3 gap-0">
      <div className="w-max h-screen">
        <Dashboard />
      </div>
      <div className="w-max h-screen col-span-2">
        <HomeComp />
      </div>
    </div>
  );
};
