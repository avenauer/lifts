import styled from "@emotion/styled";
import { WideContainerStyled } from "./_maincomponents";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

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

  &:hover {
  }

  & .title {
    display: block;
    margin-left: 6px;
    margin-top: 6px;
  }

  @media (max-width: 1024px) {
    display: none;
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
    top: -5px;
    color: #45587b;
  }

  &:nth-of-type(1) {
    margin-left: 6px;
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 128px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  @media (max-width: 1024px) {
    text-align: center;
    width: calc(20% - 0.6em);
    box-sizing: border-box;

    &:nth-of-type(1) {
      margin-left: 0;
    }

    div {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 600px) {
    width: calc(25% - 0.6em);
  }

  @media (max-width: 420px) {
    width: calc(33% - 0.6em);
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

/*MOBILE MATERIALS*/

export const MobileMenuStyled = styled(motion.div)`
  width: 100%;
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  height: auto;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileMenuContainer = styled(motion.div)`
  box-sizing: border-box;
  background-color: white;
  border-radius: 15px 15px 0 0;
  width: 100%;

  & .item-lower {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem 0.5rem;
  }
`;

export const MobileMenuTitleWrapper = styled(motion.div)`
  text-align: center;
  padding: 1em 0;
  font-size: 14px;
`;

export const MobileMenuContentWrapper = styled(motion.div)``;
