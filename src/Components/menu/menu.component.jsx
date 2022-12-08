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
  const scheme = {
    home: false,
    chat: false,
    setting: false,
    notification: false,
    calender: false,
    profile: false,
  };

  return (
    <ul className={props.classInfo}>
      <Item
        first={<BsGrid1X2Fill size={20} className="text-blue" />}
        second={<BsGrid1X2 size={20} className="text-gray" />}
        text="home"
        clicked={props.active.home}
        onclick={() =>
          props.setactive(() => {
            return { ...scheme, home: true };
          })
        }
      />
      <Item
        first={<BsFillChatDotsFill size={20} className="text-blue" />}
        second={<BsChatDots size={20} className="text-gray" />}
        text="chat"
        clicked={props.active.chat}
        onclick={() =>
          props.setactive(() => {
            return { ...scheme, chat: true };
          })
        }
      />
      <Item
        first={<BsPersonCheckFill size={20} className="text-blue" />}
        second={<BsPersonCheck size={20} className="text-gray" />}
        text="profile"
        clicked={props.active.profile}
        onclick={() =>
          props.setactive(() => {
            return { ...scheme, profile: true };
          })
        }
      />
      <Item
        first={<BsCalendarWeekFill size={20} className="text-blue" />}
        second={<BsCalendarWeek size={20} className="text-gray" />}
        text="calender"
        clicked={props.active.calender}
        onclick={() =>
          props.setactive(() => {
            return { ...scheme, calender: true };
          })
        }
      />
      <Item
        first={<RiBellFill size={20} className="text-blue" />}
        second={<RiBellLine size={20} className="text-gray" />}
        text="notification"
        clicked={props.active.notification}
        onclick={() =>
          props.setactive(() => {
            return { ...scheme, notification: true };
          })
        }
      />
      <Item
        first={<AiTwotoneSetting size={20} className="text-blue" />}
        second={<AiOutlineSetting size={20} className="text-gray" />}
        text="setting"
        clicked={props.active.setting}
        onclick={() =>
          props.setactive(() => {
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
