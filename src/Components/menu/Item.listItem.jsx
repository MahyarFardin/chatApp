import React from "react";

export default function Item(props) {
  const color = props.clicked ? "text-blue" : "text-gray";
  return (
    <li className="w-full flex text-center items-center pl-10 my-4 cursor-pointer">
      {props.clicked ? props.first : props.second}
      <h3 className={"text-sm font-bold " + color + " uppercase ml-4 tracking-wide"}>{props.text}</h3>
    </li>
  );
}
