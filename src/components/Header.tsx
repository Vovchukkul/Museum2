import React from "react";
import logo from './../image/namu-logo-museum.svg';
import main from './../image/header-main-image.svg';
import { Link } from "react-router-dom";
import './Header.scss';
import { Button } from "./Button.tsx";
import { Dropdown } from "./Dropdown.tsx";

type Props = {
  lang: string;
  handleLangChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Header: React.FC<Props> = ({ lang, handleLangChange }) => {
  return (
    <div className="header">
      <div className="top-bar">
        <img src={logo} alt="logo" className="top-bar__logo" />
        <div className="top-bar__wrap">
          <Link to="/menu" className="menu-icon"></Link>
          <div className="dropdown__wrap">
            <Dropdown value={lang} func={handleLangChange} />
          </div>
        </div>
      </div>
      <div className="header__left-right">
        <div className="header__mid">
          <span className="header__date">
            10 серпня - 10 листопада
          </span>
          <h1 className="header__title">
            Мистецтво ХІХ - ХХ ст.
          </h1>
          <div className="header__subtitle">
            Внесок українських митців у світову культуру 19-20 ст.
          </div>
          <div className="header__button">
            <Button
              text="Купити квиток"
              color="rgba(205, 77, 49, 1)"
              textColor="rgba(241, 245, 244, 1)"
              borderColor="rgba(205, 77, 49, 1)"
            />
          </div>
          <div className="header__bottom-date">
            <p className="header__bottom-date-text">10.08 - 10.10</p>
          </div>
        </div>
        <div className="header__bottom">
          <img src={main} alt="main-img" className="header__img" />
        </div>
      </div>
    </div>
  );
};