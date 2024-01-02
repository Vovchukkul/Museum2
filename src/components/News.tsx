import React from "react";
import './News.scss';

export const News = (props: {
  image: string;
  date: string;
  title: string;
  description: string;
}) => {
  const { image, date, title, description } = props;

  return (
    <div className="news_article">
      <img src={image} alt="img" className="news__image" />
      <p className="news__date">{date}</p>
      <p className="news__title">{title}</p>
      <p className="news__description">{description}</p>
    </div>
  );
};