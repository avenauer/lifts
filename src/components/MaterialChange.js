import React from "react";
import { MaterialChangeStyled, MaterialItemStyled } from "./_components";
import woodenredmaterial from '../assets/Materials/redwood.jpg';

const MaterialChange = ({ woodenred, yellowred, orangered }) => {
    return (
        <MaterialChangeStyled>
            <span>Material:</span>
            <MaterialItemStyled onClick={woodenred}>
                <img src={woodenredmaterial} alt="" />
            </MaterialItemStyled>
            <MaterialItemStyled onClick={yellowred}>
                <img src={woodenredmaterial} alt="" />
            </MaterialItemStyled>
            <MaterialItemStyled onClick={orangered}>
                <img src={woodenredmaterial} alt="" />
            </MaterialItemStyled>
        </MaterialChangeStyled>
    );
};

export default MaterialChange;
