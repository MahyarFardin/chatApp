import React, {forwardRef} from "react";
export const Input = forwardRef((props,ref) => {
  return (
    <input
	  type={props.type}
      placeholder={props.placeholder}
      className={"h-10 border-[1px] text-sm uppercase pl-2 rounded-sm border-slate-400 mx-auto w-full bg-white m-2 " + props.setting}
      ref={ref}
    />
  );
})
