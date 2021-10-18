import React from "react";
import { MaterialChangeStyled, MaterialItemStyled } from "./_components";
import woodenredmaterial from "../assets/Materials/redwood.jpg";
import MaterialItem from "./MaterialItem";

import RAL9006Image from "../assets/Materials/redwood.jpg";
import DarkOakImage from "../assets/Materials/redwood.jpg";
import BirchOakImage from "../assets/Materials/redwood.jpg";
import BlackFoilPatternImage from "../assets/Materials/redwood.jpg";

import SpruceOakImage from "../assets/Materials/redwood.jpg";
import OakImage from "../assets/Materials/redwood.jpg";
import AcaciaOakImage from "../assets/Materials/redwood.jpg";
import WhiteFoilPatternImage from "../assets/Materials/redwood.jpg";

import BlackFoilImage from "../assets/Materials/redwood.jpg";
import WhiteFoilImage from "../assets/Materials/redwood.jpg";
import RedOakImage from "../assets/Materials/redwood.jpg";
//todo: Add another whiteFoil

import LightOakImage from "../assets/Materials/redwood.jpg";
import CaroPatternImage from "../assets/Materials/redwood.jpg";
import SheetPatternImage from "../assets/Materials/redwood.jpg";
import RALImage from "../assets/Materials/redwood.jpg";

const MaterialChange = ({
  pos1,
  pos2,
  pos3,
  pos4,
  pos5,
  pos6,
  pos7,
  pos8,
  pos9,
  pos10,
  pos11,
  pos12,
  pos13,
  pos14,
  pos15,
  pos16,
}) => {
  return (
    <MaterialChangeStyled>
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos1} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos2} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos3} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos4} />

      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos5} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos6} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos7} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos8} />

      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos9} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos10} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos11} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos12} />

      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos13} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos14} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos15} />
      <MaterialItem name="Name" srcimage={RAL9006Image} click={pos16} />
    </MaterialChangeStyled>
  );
};

export default MaterialChange;
