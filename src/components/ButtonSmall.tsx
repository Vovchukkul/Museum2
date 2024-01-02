import React from "react";
import { ReactNode } from "react";
import './ButtonSmall.scss';

export const ButtonSmall = (
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
      className='btn-s'
      style={
        { backgroundColor: color, 
          border: `1px solid ${borderColor}`,
          color: textColor,
        }
      }
    >
      <span className="btn-span-s">
        {text}
      </span>
      {children}
    </button>
  );
};