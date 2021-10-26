import { motion } from "framer-motion";

export const names = {
  dobel: {
    1: "Dobel 1112",
    2: "Dobel 1061",
    3: "Dobel 1026",
    4: "Dobel 1236",
    5: "Dobel 1361",
    6: "Dobel 1203",
    7: "Dobel 1397",
    8: "Dobel 1175",
    9: "Dobel 1011",
    10: "Dobel 1390",
    11: "Dobel 1064",
    12: "Dobel white",
    13: "Dobel 1206",
    14: "AISI Dot",
    15: "AISI Caro",
    16: "RAL 7038",
  },
};

export const themes = {
  colors: {
    white: "#fff",
    black: "#000",
    dark: "#3d3d3d",
    lightdark: "#737373",
    main: "#224382",
    red: "#ff5349",
  },
  gradients: {
    main: "linear-gradient(-135deg, #224382, #305DA0)",
  },
  backgrounds: {
    gray: "#f8fafc",
  },
};

export const lineareasing = "cubic-bezier(0.43,0.13,0.23,0.96);";

export const PageMotionComp = ({ children }) => {
  return (
    <motion.div
      style={{ height: "100%" }}
      variants={PageMotionCompVariant}
      animate="enter"
      exit="exit"
      initial="exit"
    >
      {children}
    </motion.div>
  );
};

const transition = {
  duration: 1,
  delay: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const PageMotionCompVariant = {
  exit: {
    y: 0,
    scale: 0.95,
    opacity: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2, ...transition },
  },
  enter: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2, ...transition },
  },
};
