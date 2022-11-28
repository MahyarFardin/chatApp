import React from "react";

export function NewsCad(props) {
  return (
    <div className="block w-full h-full relative bg-blue mx-auto">
      <a href={props.url}>
        <h3 className="text-white">{props.title}</h3>
      </a>
    </div>
  );
}
