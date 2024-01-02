import React from "react";
import './Menu.scss';
import { Link } from "react-router-dom";
import logo from './../../image/namu-logo-museum.svg';
import { Button } from "../../components/Button.tsx";
import { Dropdown } from "../../components/Dropdown.tsx";
import menu__image from './../../image/img_menu.svg';

type Props = {
  lang: string,
  handleLangChange: (e: {target: {value: React.SetStateAction<string>;};}) => void,
};

export const Menu: React.FC<Props> = ({ lang, handleLangChange }) => {
  return (
    <div className="menu">
      <div className="menu__top-bar">
        <img src={logo} alt="logo" className="top-bar__logo" />
        <div className="menu__top-bar-right">
          <Dropdown value={lang} func={handleLangChange} />
          <Link to="/" className="close-icon"></Link>
        </div>
      </div>
      <div className="menu__left-right">
        <div className="menu__left-desc">
          <div className="menu__middle">
            <div className="schedule">
              <p className="schedule-text">
                Розклад сьогодні:
              </p>
              <p className="schedule-time">
                12:00 - 19:00
              </p>
            </div>
            <Link 
              to="https://maps.app.goo.gl/k9wJbgnBBhhYTSds7?g_st=ic" 
              className="address"
              target="_blanke"
            >
              <p className="address-text">
                Адреса:
              </p>
              <p className="address-location">
                Київ, вул. М. Грушевського, 6
              </p>
            </Link>
          </div>
          <ul className="menu__list">
            <li className="menu__items">
              <Link to="/#exhibitions" className="menu__link">
                Актуальні виставки
              </Link>
            </li>
            <li className="menu__items">
              <Link to="/#events" className="menu__link">
                Найближчі події
              </Link>
            </li>
            <li className="menu__items">
              <Link to="/#news" className="menu__link">
                Новини
              </Link>
            </li>
          </ul>
          <Button
            text="Купити квиток"
            color="rgba(205, 77, 49, 1)"
            textColor="rgba(241, 245, 244, 1)"
            borderColor="rgba(205, 77, 49, 1)"
          />
        </div>
        <div className="menu__bottom">
          <img
            src={menu__image}
            alt="img"
            className="menu__bottom-img"
          />
        </div>
      </div>
    </div>
  );
};