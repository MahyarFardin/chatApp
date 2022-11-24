import React, {forwardRef} from "react";
export const Input = forwardRef((props,ref) => {
  return (
    <input
	  type={props.type}
      placeholder={props.placeholder}
      className={"h-10 focus:drop-shadow-lg border-[1px] rounded-sm border-slate-400 mx-auto w-full bg-white m-4 " + props.setting}
      ref={ref}
    />
  );
})
