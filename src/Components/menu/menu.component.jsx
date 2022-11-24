import React, { useState } from "react";
import Item from "./Item.listItem";

import {
  BsFillChatDotsFill,
  BsPersonCheckFill,
  BsPersonCheck,
  BsChatDots,
  BsCalendarWeekFill,
  BsCalendarWeek,
  BsGrid1X2Fill,
  BsGrid1X2,
} from "react-icons/bs";
import { RiBellFill, RiBellLine } from "react-icons/ri";
import { AiOutlineSetting, AiTwotoneSetting } from "react-icons/ai";

export default function Menu() {
  const [active, setActive] = useState;

  return (
    <ul className="flex flex-col justify-evenly ">
      <Item
        first={<BsGrid1X2Fill size={20} className="text-blue" />}
        second={<BsGrid1X2 size={20} className="text-gray" />}
        text="home"
        clicked={false}
        onClick
      />
      <Item
        first={<BsFillChatDotsFill size={20} className="text-blue" />}
        second={<BsChatDots size={20} className="text-gray" />}
        text="chat"
        clicked={false}
      />
      <Item
        first={<BsPersonCheckFill size={20} className="text-blue" />}
        second={<BsPersonCheck size={20} className="text-gray" />}
        text="profile"
        clicked={false}
      />
      <Item
        first={<BsCalendarWeekFill size={20} className="text-blue" />}
        second={<BsCalendarWeek size={20} className="text-gray" />}
        text="calender"
        clicked={false}
      />
      <Item
        first={<RiBellFill size={20} className="text-blue" />}
        second={<RiBellLine size={20} className="text-gray" />}
        text="notification"
        clicked={false}
      />
      <Item
        first={<AiTwotoneSetting size={20} className="text-blue" />}
        second={<AiOutlineSetting size={20} className="text-gray" />}
        text="setting"
        clicked={false}
      />
    </ul>
  );
}
