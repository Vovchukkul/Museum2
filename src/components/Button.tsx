import React from "react";
import { ReactNode } from "react";
import './Button.scss';

export const Button = (
  { text, color, textColor, borderColor, children }: { 
    text: string,
    color: string,
    textColor: string,
    borderColor: string,
    children?: ReactNode,
},
) => {
  return (
    <button
      className='btn'
      style={
        { backgroundColor: color, 
          border: `1px solid ${borderColor}`,
          color: textColor,
        }
      }
    >
      <span className="btn-span">
        {text}
      </span>
      {children}
    </button>
  );
};