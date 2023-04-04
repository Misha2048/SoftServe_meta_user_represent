import React from "react";

interface ITextBoxProps {
  children?: any;
}

export const Textbox = (props: ITextBoxProps) => {
  return <span className="textbox textbox--white">{props.children}</span>;
};
