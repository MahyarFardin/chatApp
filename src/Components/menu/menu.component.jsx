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
  BsPower,
} from "react-icons/bs";
import { RiBellFill, RiBellLine } from "react-icons/ri";
import { AiOutlineSetting, AiTwotoneSetting } from "react-icons/ai";

export default function Menu(props) {
  const [active, setActive] = useState({
    home: false,
    chat: true,
    setting: false,
    notification: false,
    calender: false,
    profile: false,
  });

  const scheme = {
    home: false,
    chat: false,
    setting: false,
    notification: false,
    calender: false,
    profile: false,
  };

  console.log(active);
  return (
    <ul className={props.classInfo}>
      <Item
        first={<BsGrid1X2Fill size={20} className="text-blue" />}
        second={<BsGrid1X2 size={20} className="text-gray" />}
        text="home"
        clicked={active.home}
        onclick={() =>
          setActive(() => {
            return { ...scheme, home: true };
          })
        }
      />
      <Item
        first={<BsFillChatDotsFill size={20} className="text-blue" />}
        second={<BsChatDots size={20} className="text-gray" />}
        text="chat"
        clicked={active.chat}
        onclick={() =>
          setActive(() => {
            return { ...scheme, chat: true };
          })
        }
      />
      <Item
        first={<BsPersonCheckFill size={20} className="text-blue" />}
        second={<BsPersonCheck size={20} className="text-gray" />}
        text="profile"
        clicked={active.profile}
        onclick={() =>
          setActive(() => {
            return { ...scheme, profile: true };
          })
        }
      />
      <Item
        first={<BsCalendarWeekFill size={20} className="text-blue" />}
        second={<BsCalendarWeek size={20} className="text-gray" />}
        text="calender"
        clicked={active.calender}
        onclick={() =>
          setActive(() => {
            return { ...scheme, calender: true };
          })
        }
      />
      <Item
        first={<RiBellFill size={20} className="text-blue" />}
        second={<RiBellLine size={20} className="text-gray" />}
        text="notification"
        clicked={active.notification}
        onclick={() =>
          setActive(() => {
            return { ...scheme, notification: true };
          })
        }
      />
      <Item
        first={<AiTwotoneSetting size={20} className="text-blue" />}
        second={<AiOutlineSetting size={20} className="text-gray" />}
        text="setting"
        clicked={active.setting}
        onclick={() =>
          setActive(() => {
            return { ...scheme, setting: true };
          })
        }
      />
      <div className="pt-8">
        <Item
          first={<BsPower size={20} className="text-gray" />}
          second={<BsPower size={20} className="text-gray" />}
          clicked={false}
          text="logout"
        />
      </div>
    </ul>
  );
}
