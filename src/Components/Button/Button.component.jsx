import React from "react"
export const Button =(props)=>{
  return(
	<button
            onClick={props.onChange}
            className={"hover:drop-shadow h-14 bg-gradient-to-r from-blue to-lblue text-white flex align-middle justify-between px-6 "+ props.addOn }>
            {props.children}
            <span className="my-auto font-bold text-lg"> {props.lable}</span>
    </button>

  )
}
