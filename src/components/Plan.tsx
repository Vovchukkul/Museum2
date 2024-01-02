import React from "react";
import { Button } from "./Button.tsx";
import image from './../image/plan-image.svg';
import './Plan.scss';

export const Plan = () => {
  return (
    <div className="plan">
      <div className="plan__desk-left">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={image}
          alt="photo"
          className="plan__image"
        />
      </div>
      <div className="plan__wrap-right">
        <h1 className="plan__title">
          Сплануйте візит до музею
        </h1>
        <p className="plan__text">
          Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом.
        </p>
        <div className="plan__button">
          <Button
            text="Почати"
            color="rgba(205, 77, 49, 1)"
            textColor="rgba(241, 245, 244, 1)"
            borderColor="rgba(205, 77, 49, 1)"
          />
        </div>
      </div>
    </div>
  );
};