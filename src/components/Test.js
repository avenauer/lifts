import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./index.css";
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

export function Carousel() {
  const ref = React.useRef();
  const [rect, setRect] = React.useState();
  const [yOffset, setYOffset] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      const [itemLower] = ref.current.getElementsByClassName("item-lower");
      setYOffset(itemLower.getBoundingClientRect().height);
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  return (
    <div className="carousel" style={{ transform: `translateY(${yOffset}px)` }}>
      <Item ref={ref} yOffset={yOffset} />
    </div>
  );
}

const Item = React.forwardRef(function ({ data, yOffset }, ref) {
  const variants = {
    top: {
      y: -yOffset,
    },
    bottom: {
      y: 0,
    },
  };
  const currentVariant = React.useRef("bottom");
  const inMotion = React.useRef(false);
  const animation = useAnimation();

  const handleDragStart = async () => {
    inMotion.current = true;
  };

  const handleDragEnd = async (_, { point, offset, velocity }) => {
    const pos = point.y * -1;
    const dir = offset.y < 0 ? "up" : "down";

    if (dir === "up") {
      if (pos > yOffset / 4 || velocity.y < -20) {
        currentVariant.current = "top";
      } else {
        currentVariant.current = "bottom";
      }
    } else if (dir === "down") {
      if (pos < yOffset / 4 || velocity.y > 20) {
        currentVariant.current = "bottom";
      } else {
        currentVariant.current = "top";
      }
    }

    await animation.start(currentVariant.current);
    inMotion.current = false;
  };

  const handleOnClick = async () => {
    if (inMotion.current === false) {
      currentVariant.current =
        currentVariant.current === "top" ? "bottom" : "top";
      await animation.start(currentVariant.current);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="item"
      drag={yOffset ? "y" : false}
      dragDirectionLock
      dragConstraints={{ bottom: 0, top: -yOffset }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragMomentum={false}
      variants={variants}
      animate={animation}
      transition={{
        y: { type: "spring", stiffness: 500, damping: 50 },
      }}
    >
      <div className="item-upper" onClick={handleOnClick}>
        <span>Materials</span>
      </div>
      <div className="item-lower">
        <MaterialItem name="RAL 9006" srcimage={RAL9006Image} />
        <MaterialItem name="Name" srcimage={DarkOakImage} />
        <MaterialItem name="Name" srcimage={BirchOakImage} />
        <MaterialItem name="Name" srcimage={BlackFoilPatternImage} />

        <MaterialItem name="Name" srcimage={SpruceOakImage} />
        <MaterialItem name="Name" srcimage={OakImage} />
        <MaterialItem name="Name" srcimage={AcaciaOakImage} />
        <MaterialItem name="Name" srcimage={WhiteFoilPatternImage} />

        <MaterialItem name="Name" srcimage={BlackSkinImage} />
        <MaterialItem name="Name" srcimage={WhiteOakImage} />
        <MaterialItem name="Name" srcimage={RedOakImage} />
        <MaterialItem name="Name" srcimage={WhiteSkinImage} />

        <MaterialItem name="Name" srcimage={LightOakImage} />
        <MaterialItem name="Name" srcimage={SheetPatternImage} />
        <MaterialItem name="Name" srcimage={CaroPatternImage} />
        <MaterialItem name="Name" srcimage={RALFoilImage} />
      </div>
    </motion.div>
  );
});
