import React from "react";
import { MaterialItemStyled } from "./_components";

const MaterialItem = ({ name, srcimage, click }) => {
  return (
    <MaterialItemStyled onClick={click}>
      <span>{name}</span>
      <div>
        <img src={srcimage} alt="" />
      </div>
    </MaterialItemStyled>
  );
};

export default MaterialItem;
