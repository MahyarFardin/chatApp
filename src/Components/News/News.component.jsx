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
    <div className="w-full h-max px-5">
      <h2 className="font-bold text-2xl my-10">News</h2>

      <ul className="w-full h-max grid grid-cols-2 gap-8 items-center">
        {news.map((item, idx) => {
          return (
            <li className="w-full h-64 block shadow-2xl">
              <NewsCad key={idx} {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
