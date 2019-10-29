import React from "react";
import Proptypes from "prop-types";

import style from "./winner.module.css";

const Winner = ({ children }) => {
  let showWinner = {};

  if (children.props.color !== undefined) {
    showWinner = {
      opacity: 1
    };

    const button = document.getElementsByTagName("button");
    button[0].setAttribute("disabled", 'true');

    setTimeout(() => {
      window.location.reload();
    }, 8000);
  }

  return (
    <div className={style.root} style={showWinner}>
      <h1>WINNER</h1>
      {children}
    </div>
  );
};

Winner.propTypes = {
  children: Proptypes.node.isRequired
};

export default Winner;
