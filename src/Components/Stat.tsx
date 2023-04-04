import React from "react";
import "../styles/stat.css";

interface IStatProps {
  title: string;
  value: any;
}

export const Stat = (props: IStatProps) => {
  return (
    <div className="stat">
      <span className="stat__title">{props.title}</span>
      <span className="stat__value">{props.value}</span>
    </div>
  );
};
