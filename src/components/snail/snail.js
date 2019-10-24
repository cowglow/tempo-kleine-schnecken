import React from "react";

import snailSvg from "./snail-silhouette.svg";

const Snail = ({ color }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        verticalAlign: "center",
        display: "inline-block",
        padding: "5rem",
        "-webkit-mask": 'url("' + snailSvg + '") no-repeat 50% 50%',
        mask: 'url("' + snailSvg + '") no-repeat 50% 50%'
      }}
    />
  );
};

export default Snail;
