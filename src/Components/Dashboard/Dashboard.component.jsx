import React from "react";

import Menu from "../menu/menu.component";
import { BsPower } from "react-icons/bs";
import Item from "../menu/Item.listItem";

function Dashboard(props) {
  return (
    <div className="hidden md:flex md:flex-col shadow-2xl shadow-gray w-1/5 h-screen">
      <div className="w-full h-full flex-col justify-between text-center">
        <img className="rounded-full" src="props" alt="profile picture" />
        <h3>{props.name}</h3>
        <Menu />
      </div>
      <Item first={<BsPower size={20}  className="text-gray"/>} second={<BsPower size={20}  className="text-gray"/>} clicked={false} text="logout"/>
    </div>
  );
}

export default Dashboard;
