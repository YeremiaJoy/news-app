import React from "react";
import Link from "next/link";

function News({ news }) {
  return (
    <div className="news-container">
      <h2>Choose Media News</h2>
      <div className="news-content-container">
        {Object.entries(news).map((item, k) => {
          return (
            <Link
              href={`/news/${item[0].toLowerCase().split(" ").join("-")}`}
              key={k}
            >
              <a className="articles-card" style={{textAlign: 'center'}}>
                <div>{item[0]}</div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default News;
