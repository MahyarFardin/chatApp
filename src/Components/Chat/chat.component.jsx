import React from "react";

export function Chat(props) {
  return (
    <div className="w-full h-10 flex">
      <img src={props.image} alt="images" />
      <div className="w-full h-full">
        <h4 className="font-bold text-sm">{props.name}</h4>
        <p className="font-light text-sm text-gray">{props.lmsg}</p>
      </div>
    </div>
  );
}
