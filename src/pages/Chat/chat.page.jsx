import React from "react";
import { Chats } from "../../Components/Chats/Chats.component";
import { Button } from "../../Components/Button/Button.component";
export function ChatPage() {
  return (
    <div className="w-full h-full px-5 pt-5 grid grid-cols-4">
      <div className="w-full h-full col-span-1 border-r-[2px] border-zinc-400">
        <Button onChange={()=>0} lable={"create chat"} addOn={"w-1/2"} />
        <Chats />
      </div>
      <div className="w-full h-full col-span-3">tsett</div>
    </div>
  );
}
