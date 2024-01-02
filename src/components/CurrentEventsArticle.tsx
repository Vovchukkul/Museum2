import React from "react";
import { Button } from "./Button.tsx";
import './CurrentEventsArticle.scss';

export const CurrentEventArticle = (props: { 
  image: string;
  date: string;
  title: string;
  description: string;
}) => {
  const { image, date, title, description } = props;

  return (
    <div className="currentEve">
      <img src={image} alt="img" className="currentEve__image" />
      <div className="currentEvents__wrap">
        <p className="currentEve__date">{date}</p>
        <p className="currentEve__title">{title}</p>
        <p className="currentEve__description">{description}</p>
        <div className="currentEve__button">
          <Button
            text="Зареєструватись"
            color="rgba(205, 77, 49, 1)"
            textColor="rgba(241, 245, 244, 1)"
            borderColor="rgba(205, 77, 49, 1)"
          />
        </div>
      </div>
    </div>
  );
};