import React from "react";
import "../styles/textbox.css";

interface ITextBoxProps {
  children?: any;
  percentage?: number;
}

export const Scale = (props: ITextBoxProps) => {
  return (
    <div className="textbox__container">
      <div
        className="textbox textbox--black"
        style={{ width: `${props.percentage}%` }}
      >
        {props.children}
      </div>
    </div>
  );
};
