import React from "react";

export default function Item(props) {
  const color = props.clicked===true ? " text-blue border-l-4 duration-300 " : "text-gray";
  console.log(props);
  return (
    <li onClick={props.onclick} className={`w-full flex text-center items-center py-4 pl-10 my-1 cursor-pointer ${color}`}>
      {props.clicked ? props.first : props.second}
      <h3 className={"text-sm font-bold uppercase ml-4 tracking-wide"}>{props.text}</h3>
    </li>
  );
}
