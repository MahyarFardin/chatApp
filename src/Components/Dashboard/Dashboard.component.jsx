import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../menu/menu.component";

function Dashboard(props) {
  const [hamMenu, setHamMenu] = useState(false);
  return (
    <>
      <GiHamburgerMenu
        onClick={() => setHamMenu((prev) => !prev)}
        size={20}
        className="text-gray lg:hidden m-4 hover:cursor-pointer"
      />
      {hamMenu && (
        <div className="flex flex-col bg-white lg:hidden shadow-2xl shadow-gray w-2/3 h-full">
          <div className="w-full h-full flex-col justify-between text-center">
            <img className="rounded-full" src="props" alt="profile picture" />
            <h3>{props.name}</h3>
            <Menu
              setactive={props.setter}
              active={props.active}
              classInfo={"flex flex-col justify-evenly "}
            />
          </div>
        </div>
      )}

      <div className="hidden fixed z-100 bg-white lg:flex lg:flex-col shadow-2xl shadow-gray w-1/5 h-screen">
        <div className="w-full h-full flex-col justify-between text-center">
          <img className="rounded-full" src="props" alt="profile picture" />
          <h3>{props.name}</h3>
          <Menu
            active={props.active}
            setactive={props.setter}
            classInfo={"flex flex-col justify-evenly "}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
