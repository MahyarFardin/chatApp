import React, { Suspense, useState } from "react";
import Dashboard from "../../Components/Dashboard/Dashboard.component";
import { ChatPage } from "../Chat/chat.page";
const HomeComp = React.lazy(() =>
  import("../../Components/News/News.component")
);

export const Home = () => {
  const [active, setActive] = useState({
    home: true,
    chat: false,
    setting: false,
    notification: false,
    calender: false,
    profile: false,
  });

  return (
    <div className="w-screen h-screen grid grid-cols-4">
      <div className="h-screen col-span-1">
        <Dashboard active={active} setter={(e) => setActive(e)} />
      </div>
      {active.home && (
        <div className="h-screen col-span-3">
          <Suspense fallback={"... loading"}>
            <HomeComp />
          </Suspense>
        </div>
      )}
      {active.chat && (
        <div className="h-screen col-span-3">
          <ChatPage />
        </div>
      )}
      {active.setting && (
        <div className="h-screen col-span-3">
          <Suspense fallback={"... loading"}>
            <HomeComp />
          </Suspense>
        </div>
      )}
      {active.notification && (
        <div className="h-screen col-span-3">
          <Suspense fallback={"... loading"}>
            <HomeComp />
          </Suspense>
        </div>
      )}
      {active.calender && (
        <div className="h-screen col-span-3">
          <Suspense fallback={"... loading"}>
            <HomeComp />
          </Suspense>
        </div>
      )}
      {active.profile && (
        <div className="h-screen col-span-3">
          <Suspense fallback={"... loading"}>
            <HomeComp />
          </Suspense>
        </div>
      )}
    </div>
  );
};
