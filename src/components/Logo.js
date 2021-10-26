import React from "react";
import LogoImg from "../assets/logo-ilift.svg";
import { LogoWrapperStyled } from "./_components";

const Logo = () => {
  return (
    <LogoWrapperStyled>
      <img src={LogoImg} alt="" />
    </LogoWrapperStyled>
  );
};

export default Logo;
