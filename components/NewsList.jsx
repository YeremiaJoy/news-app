import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import moment from "moment";


function NewsList() {
  const baseUrl = `https://newsapi.org/v2/top-headlines?apiKey=ed72e29022624b938e99b863de4a1c33&country=id`;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="news-container">
      <h2>Top News in Indonesia</h2>
      <div className="news-content-container">
        {data.articles?.length > 0 &&
          data.articles.map((val, k) => {
            return (
              <Link href={val.url} key={k}>
                <a target="_blank">
                  <div className="articles-card">
                    <div className="title">{val.title}</div>
                    <img src={val.urlToImage} width="100%" height="100%" />
                    <div className="author">Author: {val.author}</div>
                    <div className="source">{val.source.name}</div>
                    <div className="content">{val.content}</div>
                    <div className="description">{val.description}</div>
                    <div className="publishedAt">published at {moment(val.publishedAt).format("DD MMMM YYYY, H:mm")}</div>
                  </div>
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default NewsList;
