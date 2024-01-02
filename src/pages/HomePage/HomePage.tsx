import React from "react";
import './HomePage.scss';
import { Header } from "../../components/Header.tsx";
import { CurrentExhibitions } from '../../components/CurrentExhibitions.tsx';
import { CurrentEvents } from '../../components/CurrentEvents.tsx';
import { Plan } from '../../components/Plan.tsx';
import { NewsComponent } from '../../components/NewsComponent.tsx';
import { Subscribe } from '../../components/Subscribe.tsx';
import { Footer } from '../../components/Footer.tsx';

type Props = {
  lang: string,
  handleLangChange: (e: {target: {value: React.SetStateAction<string>;};}) => void,
};

export const HomePage: React.FC<Props> = ({ lang, handleLangChange }) => {
  return (
    <div className="container">
      <Header lang={lang} handleLangChange={handleLangChange} />
      <CurrentExhibitions />
      <CurrentEvents />
      <Plan />
      <NewsComponent />
      <Subscribe />
      <Footer />
    </div>
  );
};