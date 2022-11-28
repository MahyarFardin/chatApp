import React from "react";
import HomeComp from "../../Components/News/News.component";
import Dashboard from "../../Components/Dashboard/Dashboard.component";

export const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/5 h-screen">
        <Dashboard />
      </div>
      <div className="w-4/5 h-screen">
        <HomeComp />
      </div>
    </div>
  );
};
