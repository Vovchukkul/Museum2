import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

export const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer__wrap">
        <div className="footer__top">
          <p className="footer__top-title">
            Контакти
          </p>
          <p className="footer__top-text">
            <Link 
              to='https://maps.app.goo.gl/k9wJbgnBBhhYTSds7?g_st=ic' 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__top-item"
            >
              Київ, <br />
              вул. М. Грушевського, 6 <br />
            </Link>
            <Link 
              to='tel:0680490904' 
              rel="noopener noreferrer"
              className="footer__top-item"
            >
              тел. 278-13-57, 278-74-54 <br />
            </Link>
            <Link 
              to='mailto:info@namu.kiev.ua' 
              rel="noopener noreferrer"
              className="footer__top-item"
            >
              info@namu.kiev.ua <br />
            </Link>
          </p>
          <div className="footer__top-socials">
            <Link 
              to="https://www.facebook.com/"
              className="facebook icons"
              target="_blanked"
            >
            </Link>
            <Link 
              to="https://twitter.com/?lang=uk"
              className="twiter icons"
              target="_blanked"
            >
            </Link>
            <Link 
              to="https://web.telegram.org/a/"
              className="telegram icons"
              target="_blanked"
            >
            </Link>
            <Link 
              to="https://www.instagram.com/"
              className="instagram icons"
              target="_blanked"
            >
            </Link>
          </div>
        </div>
        <div className="footer__middle">
          <p className="footer__middle-title">
            Розклад роботи
          </p>
          <p className="footer__middle-text">
            ПН: вихідний <br />
            ВТ: вихідний <br />
            СР: 10:00 - 17:00 <br />
            ЧТ: 10:00 - 17:00 <br />
            ПТ: 12:00 - 19:00 <br />
            СБ: 11:00 - 18:00 <br />
            НД: 10:00 - 17:00 <br />
          </p>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom-title">
            Головна
          </p>
          <ul className="footer__bottom-list">
            <li className="footer__bottom-item">
              <a href="#exhibitions" className="footer__bottom-link">
                Виставки
              </a>
            </li>
            <li className="footer__bottom-item">
              <a href="#events" className="footer__bottom-link">
                Події
              </a>
            </li>
            <li className="footer__bottom-item">
              <a href="#news" className="footer__bottom-link">
                Новини
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright-wrap">
          <div className="footer__copyright-date">
            &copy; 2010 — 2020
          </div>
          <div className="footer__copyright-privacy">
            Privacy — Terms
          </div>
        </div>
        <a href="#" className="arrow-to-top"></a>
      </div>
    </div>
  );
};