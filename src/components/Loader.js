import React from "react";
import { MainContainerStyled } from "./_maincomponents";
import { LoaderStyled } from "./_components";
import iLiftLogo from "../assets/logo-ilift.svg";

const Loader = () => {
  return (
    <MainContainerStyled>
      <LoaderStyled>
        <img src={iLiftLogo} alt="" />
        <svg viewBox="0 0 36 36">
          <path
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </LoaderStyled>
    </MainContainerStyled>
  );
};

export default Loader;
