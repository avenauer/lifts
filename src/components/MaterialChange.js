import React, { useState } from "react";
import { MaterialChangeStyled } from "./_components";
import MaterialItem from "./MaterialItem";

import RAL9006Image from "../assets/Materials/RAL9006Material.png";
import DarkOakImage from "../assets/Materials/DarkOakMaterial.png";
import BirchOakImage from "../assets/Materials/BirchOakMaterial.png";
import BlackFoilPatternImage from "../assets/Materials/BlackFoilPatternMaterial.png";

import SpruceOakImage from "../assets/Materials/SpruceOakMaterial.png";
import OakImage from "../assets/Materials/OakMaterial.png";
import AcaciaOakImage from "../assets/Materials/AcaciaOakMaterial.png";
import WhiteFoilPatternImage from "../assets/Materials/WhiteFoilPatternMaterial.png";

import BlackSkinImage from "../assets/Materials/BlackSkinMaterial.png";
import WhiteOakImage from "../assets/Materials/WhiteOakMaterial.png";
import RedOakImage from "../assets/Materials/RedOakMaterial.png";
import WhiteSkinImage from "../assets/Materials/WhiteSkinMaterial.png";

import LightOakImage from "../assets/Materials/LightOakMaterial.png";
import SheetPatternImage from "../assets/Materials/SheetPatternMaterial.png";
import CaroPatternImage from "../assets/Materials/CaroPatternMaterial.png";
import RALFoilImage from "../assets/Materials/RALFoilMaterial.png";
import {names} from "../settings";

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
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <MaterialChangeStyled onClick={handleToggle} className={isActive ? null : 'Test'}>
      <MaterialItem name={names.dobel[1]} srcimage={RAL9006Image} click={pos1} />
      <MaterialItem name={names.dobel[2]} srcimage={DarkOakImage} click={pos2} />
      <MaterialItem name={names.dobel[3]} srcimage={BirchOakImage} click={pos3} />
      <MaterialItem name={names.dobel[4]} srcimage={BlackFoilPatternImage} click={pos4} />

      <MaterialItem name={names.dobel[5]} srcimage={SpruceOakImage} click={pos5} />
      <MaterialItem name={names.dobel[6]} srcimage={OakImage} click={pos6} />
      <MaterialItem name={names.dobel[7]} srcimage={AcaciaOakImage} click={pos7} />
      <MaterialItem name={names.dobel[8]} srcimage={WhiteFoilPatternImage} click={pos8} />

      <MaterialItem name={names.dobel[9]} srcimage={BlackSkinImage} click={pos9} />
      <MaterialItem name={names.dobel[10]} srcimage={WhiteOakImage} click={pos10} />
      <MaterialItem name={names.dobel[11]} srcimage={RedOakImage} click={pos11} />
      <MaterialItem name={names.dobel[12]} srcimage={WhiteSkinImage} click={pos12} />

      <MaterialItem name={names.dobel[13]} srcimage={LightOakImage} click={pos13} />
      <MaterialItem name={names.dobel[14]} srcimage={SheetPatternImage} click={pos14} />
      <MaterialItem name={names.dobel[15]} srcimage={CaroPatternImage} click={pos15} />
      <MaterialItem name={names.dobel[16]} srcimage={RALFoilImage} click={pos16} />
    </MaterialChangeStyled>
  );
};

export default MaterialChange;
