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
    <div className="w-max h-max mt-10">
      <h2> News</h2>
      <ul className="grid grid-cols-2 mx-auto gap-8 items-center">
        {news.map((item, idx) => {
          return (
            <li className="w-full h-56 block shadow-2xl">
              <NewsCad key={idx} {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
