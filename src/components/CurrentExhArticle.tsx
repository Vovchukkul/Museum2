import React from "react";
import { Button } from "./Button.tsx";
import './CurrentExhArticle.scss';

export const CurrentExhArticle = (props: {
  image: string;
  date: string;
  title: string;
  description: string;
}) => {
  const { image, date, title, description } = props;

  return (
    <div className="currentExh">
      <img src={image} alt="img" className="currentExh__image" />
      <span className="currentExh__date">{date}</span>
      <span className="currentExh__title">{title}</span>
      <span className="currenExh__description">{description}</span>
      <div className="currentExh__button">
        <Button
          text="Купити квиток" 
          color="rgba(205, 77, 49, 1)"
          textColor="rgba(241, 245, 244, 1)"
          borderColor="rgba(205, 77, 49, 1)"
        />
      </div>
    </div>
  );
};