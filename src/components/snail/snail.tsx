import React from "react";
import style from "./snail.module.css";
import { ReactComponent as SnailSvg } from "./snail-silhouette.svg";

interface SnailProps {
  color: string;
  style?: object;
}

const Snail: React.FC<SnailProps> = ({ color }) => {
  return <SnailSvg className={style.root} style={{ fill: color }} />;
};

export default Snail;
