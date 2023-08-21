import classes from "./HomeBody.module.css";
import profile from "../../assets/images/profile.jpg";
import { motion } from "framer-motion";
const loadUpVariant = {
  start: {
    opacity: 0,
    y: "10vw",
  },
  buttonStart: {
    boxShadow:
      "inset 0px 0px 0.5em 0px var(hsl(186, 75%, 42%)), 0px 0px 0.5em 0px var(hsl(186, 75%, 42%))",
  },
  buttonEnd: {
    boxShadow:
      "inset 0px 0px 2em 0px var(hsl(186, 75%, 42%)), 0px 0px 2em 0px var(hsl(186, 75%, 42%))",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  profileEnd: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 2.5,
      ease: "easeInOut",
    },
  },
  pend: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 1.5,
      ease: "easeInOut",
    },
  },
  pStart: {
    opacity: 0,
    x: "10vw",
  },

  h1end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function HomeBody() {
  return (
    <div className={classes.body}>
      <div className={classes.left}>
        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          className={classes["left-container"]}
        >
          <span>
            <motion.h1 variants={loadUpVariant} initial="start" animate="h1end">
              Full Stack <br /> Web Developer
            </motion.h1>
            <motion.p variants={loadUpVariant} initial="pStart" animate="pend">
              MERN Stack Web developer creating seamless online experiences.
              Expert in front-end and back-end technologies, dedicated to
              responsive design and user-centric interfaces.
            </motion.p>
            <div className={classes.buttons}>
              <a href="/">
                <motion.button
                  variants={loadUpVariant}
                  initial="buttonStart"
                  animate="buttonEnd"
                  className={classes.button1}
                >
                  Make Enquiries
                </motion.button>
              </a>
              <a href="https://www.instagram.com/tona_adegbite/">
                <motion.button
                  variants={loadUpVariant}
                  initial="buttonStart"
                  animate="buttonEnd"
                  className={classes.button2}
                >
                  Contact Me
                </motion.button>
              </a>
            </div>
          </span>
        </motion.div>
        <div className={classes.lighting}></div>
      </div>
      <div className={classes.right}>
        <div className={classes["right-container"]}>
          <motion.div
            variants={loadUpVariant}
            initial="start"
            animate="profileEnd"
            className={classes.profile}
          >
            <img src={profile} alt="Profile" />
          </motion.div>
          <h1>Adetona Adegbite</h1>
        </div>
      </div>
    </div>
  );
}
