import styled from "@emotion/styled";
import { WideContainerStyled } from "./_maincomponents";

export const MaterialChangeStyled = styled(WideContainerStyled)`
  position: absolute;
  background-color: white;
  box-shadow: 0 0 15px 0 black;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 150ms ease-out;
  cursor: pointer;

  & .Test {
    border: 2px solid red;
  }

  &:hover {
  }

  & .title {
    display: block;
    margin-left: 6px;
    margin-top: 6px;
  }
`;

export const MaterialItemStyled = styled.div`
  margin: 1em 6px 1em 0;
  display: inline-block;
  transition: 150ms ease-out;
  border: 1px solid red;

  div {
    position: relative;
    box-shadow: 0 0 10px -4px black;
    height: 36px;
    width: 36px;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 32px;
  }

  span {
    font-size: 1.2em;
    z-index: 100;
    position: absolute;
    top: -5px;
    color: #45587b;
  }

  &:nth-of-type(1) {
    margin-left: 6px;
  }

  &:hover {
    box-shadow: 0 0 15px -4px black;
    transform: scale(1.1);
  }

  img {
    width: 128px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;
