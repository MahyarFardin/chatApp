import React from "react";

export function NewsCad(props) {
  return (
    <div className="w-full h-full relative mx-auto overflow-auto rounded-lg">
      <a href={props.url}>
        <h3 className=" mx-4 absolute top-32 text-white z-50 font-bold hover:underline">{props.title}</h3>
        <div className="absolute top-0 left-0 bg-gradient-to-t from-blue to-transparent w-full h-full z-20"/>
        <img className="w-full h-full z-10 object-cover" src={props.urlToImage} alt="image related to news" loading="lazy"/>
      </a>
    </div>
  );
}
