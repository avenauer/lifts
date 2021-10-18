import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {lineareasing, themes} from "../settings";

export const MainContainerStyled = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  box-sizing: content-box;

  & .link {
    position: relative;
    &:after {
      left: 0;
      bottom: -0.3em;
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: ${themes.colors.main};
    }
  }
`;

export const WideContainerStyled = styled.div`
  width: 90%;
  box-sizing: content-box;
  margin: 0 auto;
  position: relative;
  min-width: calc(1024px - 4em);

  @media (max-width: 1024px) {
    width: calc(100% - 4em);
    min-width: 0;
  }

  @media (max-width: 500px) {
    width: calc(100% - 2em);
  }
`;

export const WideContainerStyledMenu = styled(WideContainerStyled)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  visibility: ${(props) => (props.toggle ? "hidden" : "visible")};
  z-index: 1;
`;

export const RegularContainerStyled = styled(motion.div)`
  width: 100%;
  height: 100%;
  //min-height: 100vh;
  max-width: calc(100% - 80em);
  margin: 0 auto;
  box-sizing: content-box;
  min-width: calc(1024px - 4em);

  @media (max-width: 1024px) {
    min-width: 0;
    max-width: none;
    width: calc(100% - 4em);
  }

  @media (max-width: 500px) {
    width: calc(100% - 2em);
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: red;
  font-family: "Muli", serif;
  font-weight: 300;
  font-size: 1.55em;
  line-height: 1.75em;
  position: relative;

  &:after {
    transition: 400ms ${lineareasing};
    content: "";
    background-color: ${themes.colors.main};
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -0.3em;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
