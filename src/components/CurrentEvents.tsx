import React from "react";
import { Arrow } from "./Arrow.tsx";
import { ButtonSmall } from './ButtonSmall.tsx';
import firstEvent from './../image/currEvents-first.svg';
import secondEvent from './../image/currEvents-second.svg';
import './CurrentEvents.scss';
import { CurrentEventArticle } from "./CurrentEventsArticle.tsx";
 
export const CurrentEvents = () => {
  return (
    <div className="currentEvents" id="events">
      <p className="currentEvents__title">
        Найближчі події
      </p>
      <div className="event__article">
        <CurrentEventArticle
          image={firstEvent}
          date="14.08 о 13:00"
          title="Кураторські екскурсії від Павла Гудімова "
          description="Таємниці підготовки, історії експонатів, магія дійства до і в момент вашої присутності – розгортатиметься..."
        />
        <CurrentEventArticle
          image={secondEvent}
          date="16.08 о 13:00"
          title="Майстер-клас “Подорож до Австралії”"
          description="Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія."
        />
      </div>
      <div className="currentEvents__button">
        <ButtonSmall
          text={`Календар подій`}
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