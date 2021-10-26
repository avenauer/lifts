import React from "react";
import { MaterialItemStyled } from "./_components";

const MaterialItem = ({ name, srcimage, click }) => {
  return (
    <MaterialItemStyled onClick={click}>
      <div>
        <img src={srcimage} alt="" />
      </div>
      <span>{name}</span>
    </MaterialItemStyled>
  );
};

export default MaterialItem;
