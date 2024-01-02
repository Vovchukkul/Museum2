import React from "react";
import { CurrentExhArticle } from "./CurrentExhArticle.tsx";
import { Arrow } from "./Arrow.tsx";
import first__image from './../image/currExh-first.svg';
import second__image from './../image/currExh-second.svg';
import './CurrentExhibition.scss';
import { ButtonSmall } from "./ButtonSmall.tsx";   

export const CurrentExhibitions = () => {
  return (
    <div className="currentExhibitions" id="exhibitions">
      <p className="currentExhibitions__title">
        Актуальні виставки
      </p>
      <div className="articles">   
        <CurrentExhArticle
          image={first__image}
          date="11.07 - 22.09"
          title="Кураторська виставка “Ангели”"
          description="Виставковий проект «Ангели» – знакова подія для української культури і водночас наймасштабніший..."
        />
        <CurrentExhArticle
          image={second__image}
          date="Діє постійно"
          title="Мистецтво ХХ ст. — XXI ст."
          description="Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців."
        />
      </div>
      <div className="currentExhibitions__button">
        <ButtonSmall
          text={`Архів виставок`}
          color="white"
          textColor="rgba(205, 77, 49, 1)"
          borderColor="rgba(205, 77, 49, 1)"
        >
          <Arrow />
        </ButtonSmall>
      </div>
    </div>
  );
};