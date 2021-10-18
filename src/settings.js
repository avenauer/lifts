import { motion } from "framer-motion";

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
