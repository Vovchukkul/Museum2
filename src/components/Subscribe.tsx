import React, { useState } from "react";
import { Button } from "./Button.tsx";
import './Subscribe.scss';

export const Subscribe = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      setError(true);
    }

    event.target.reset();

    return false;
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(false);
  };

  return (
    <div className="subscribe" id="subscribe">
      <div className="subscribe__wrap">
        <h1 className="subscribe__title">
          Підпишіться на дайджест
        </h1>
        <p className="subscribe__text">
          Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів
        </p>
      </div>
      <form 
        action="http://localhost:3000/" 
        className="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input 
          type="email"
          className="input"
          placeholder="e-mail"
          value={value}
          onChange={handleInputChange}
        />
        {error && (
          <p className="error__text">
            Fill the gap
          </p>
        )}
        <Button
          text="Підписатись"
          color="rgba(205, 77, 49, 1)"
          textColor="rgba(241, 245, 244, 1)"
          borderColor="rgba(205, 77, 49, 1)"
        />
      </form>
    </div>
  );
};