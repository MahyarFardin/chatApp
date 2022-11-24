import React from "react";
import { AuthBlock } from "./Components/Auth/AuthBlock.component";
import { Home } from "./Components/Home/Home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<AuthBlock />} />
      <Route path={"/home"} element={<Home />} />
    </Routes>
  );
};

export default App;
