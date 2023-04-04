import React from "react";
import "../styles/content_box.css";

interface IContentBoxProps {
  title?: string;
  children?: any;
}

export const ContentBox = (props: IContentBoxProps) => {
  const classes = "content-box" + (!props.title ? " content-box--notitle" : "");
  return (
    <article className={classes}>
      {props.title && <div className="content-box__title">{props.title}</div>}
      {props.children}
    </article>
  );
};
