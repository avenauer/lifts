import styled from "@emotion/styled";
import { WideContainerStyled } from "./_maincomponents";
import { keyframes } from "@emotion/react";

const Test = keyframes`
0%, 90% {
  opacity: 0;
}
  
100% {
    opacity: 1;
}
`;

export const LiftsStyledWrapper = styled.div`
  animation: ${Test} 1000ms forwards;
`;

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

const AnimationTest = keyframes`
  0% {
    opacity: 0;
    stroke-dasharray: 0, 100;
  }
  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    stroke-dasharray: 100, 100;
  }
`;

const LogoLoading = keyframes`
0% {
  opacity: 0;
  
}
  100% {
    opacity: 1;
  }
`;

const LoaderOpacity = keyframes`
  0%, 90% {
    opacity: 1;
  }
  
  99.99% {
    z-index: 2;
  }
  100% {
    z-index: -1;
    opacity: 0;
  }
`;

export const LoaderStyled = styled.div`
  position: fixed;
  z-index: 2;
  background-color: black;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  animation-delay: 0ms;
  animation: ${LoaderOpacity} 7000ms forwards;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    opacity: 0;
    animation: ${LogoLoading} 2000ms linear forwards;
    animation-delay: 1000ms;
    transform: translate(-50%, -50%);
    width: 100px;
  }

  svg {
    opacity: 0;
    animation: ${AnimationTest} cubic-bezier(0, 0.55, 0.45, 1) 5000ms forwards;
    animation-delay: 1000ms;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 200px;

    path {
      stroke: white;
      stroke-width: 0.05em;
      stroke-linecap: round;
    }
  }
`;
