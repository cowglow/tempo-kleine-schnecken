import React from "react";
import PropTypes from "prop-types";

import style from "./snail.module.css";
import snailSvg from "./snail-silhouette.svg";

const Snail = ({ color }) => {
  return (
    <span
      className={style.root}
      style={{
        backgroundColor: color,
        "-webkit-mask": 'url("' + snailSvg + '") no-repeat 50% 50%',
        mask: 'url("' + snailSvg + '") no-repeat 50% 50%'
      }}
    />
  );
};

Snail.propTypes = {
  color: PropTypes.string
};

export default Snail;
