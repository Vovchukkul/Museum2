import React from "react";
import { News } from "./News.tsx";
import { Arrow } from "./Arrow.tsx";
import { ButtonSmall } from "./ButtonSmall.tsx";
import first__new from './../image/news__image-second.svg';
import second__new from './../image/news__image-first.svg';
import './NewsComponent.scss';

export const NewsComponent = () => {
  return (
    <div className="news" id="news">
      <p className="news__titler">
        Новини
      </p>
      <div className="news__articles">
        <News
          image={first__new}
          date="9 серпня 2019"
          title="Оголошення переможця"
          description="Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу..."
        />
        <News
          image={second__new}
          date="9 серпня 2019"
          title="Міжнародний день котів"
          description="Музей з левами не може просто так взяти і пропустити Міжнародний день котів!"
        />
      </div>
      <div className="news__button">
        <ButtonSmall
          text="Усі новини"
          color="rgba(241, 245, 244, 1)"
          textColor="rgba(205, 77, 49, 1)"
          borderColor="rgba(205, 77, 49, 1)"
        >
          <Arrow />
        </ButtonSmall>
      </div>
    </div>
  );
};