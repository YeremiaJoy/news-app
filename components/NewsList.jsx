import React from "react";
import Link from "next/link";
import moment from "moment";

function NewsList({ news }) {
  const [postNum, setPostNum] = React.useState(6);

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 12);
  }

  return (
    <div className="news-container">
      <h2>{news.messages}</h2>
      <div className="news-content-container">
        {news.data.length > 0 &&
          news.data.slice(0, postNum).map((val, k) => {
            return (
              <Link href={val.link} key={k}>
                <a target="_blank">
                  <Articles {...val} />
                </a>
              </Link>
            );
          })}
      </div>
      {postNum < news.data.length && (
        <div className="loadMore-container">
          <div onClick={handleClick} className="LoadMore">
            Load More
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsList;

const Articles = ({ ...val }) => {
  return (
    <div className="articles-card">
      <div className="title">{val.title}</div>
      {val.image && (
        <img src={val.image.small} alt={val.title} width="100%" height="100%" />
      )}
      {/* <div className="author">Author: {val.author}</div> */}
      {/* <div className="source">{val.source.name}</div> */}
      <div className="content">
        {val.contentSnippet
          ? val.contentSnippet
          : val.description
          ? val.description
          : val.content}
      </div>
      {/* <div className="description">{val.description}</div> */}
      <div className="publishedAt">
        published at {moment(val.isoDate).format("DD MMMM YYYY, H:mm")}
      </div>
    </div>
  );
};
