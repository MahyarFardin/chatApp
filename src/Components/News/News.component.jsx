import axios from "axios";
import React, { useEffect, useState } from "react";
import { NewsCad } from "../NewsCard/NewsCard.component";

export default function HomeComp() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((data) => setNews(data.data.articles));
  }, []);

  return (
    <div className="w-screen h-max px-36 mt-10">
      <ul className="grid grid-cols-2 mx-auto gap-8  items-center">
        {news.map((item, idx) => {
          return (
            <li className="w-2/3 h-48 block">
              <NewsCad key={idx} {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
