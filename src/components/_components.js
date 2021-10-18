import styled from "@emotion/styled";
import {WideContainerStyled} from "./_maincomponents";

export const MaterialChangeStyled = styled(WideContainerStyled)`
  position: absolute;
  background-color: white;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: -50px;
  transition: 150ms ease-out;

  &:hover {
    bottom: 0;
  }

  span {
    display: block;
    margin-left: 6px;
    margin-top: 6px;
  }
`;

export const MaterialItemStyled = styled.div`
  margin: 1em 6px 1em 0;
  width: 36px;
  height: 36px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  border-radius: 32px;
  transition: 150ms ease-out;
  box-sizing: border-box;
  border: 1px solid white;
  box-shadow: 0 0 10px -4px black;

  &:nth-of-type(1) {
    margin-left: 6px;
  }

  &:hover {
    box-shadow: 0 0 15px -4px black;
    transform: scale(1.1);
  }

  img {
    width: 100%;
    position: absolute;
  }
`;
