import classes from "./Skills.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BsFillBootstrapFill, BsGit, BsGithub } from "react-icons/bs";
import {
  TbBrandNextjs,
  TbLetterE,
  TbSql,
  TbSquareRoundedLetterR,
} from "react-icons/tb";
import { SiExpress, SiFirebase, SiFramer, SiMongodb } from "react-icons/si";
import { useEffect, useRef } from "react";
export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("end");
      console.log("In View");
    }
  }, [inView, mainControls]);
  const skills = [
    {
      delay: 0,
      logo: <FaHtml5 color="red" className={classes.icon} />,
      name: "HTML",
    },
    {
      delay: 0.3,
      logo: <FaCss3 color="blue" className={classes.icon} />,
      name: "CSS",
    },
    {
      delay: 0.6,
      logo: <BiLogoJavascript color="yellow" className={classes.icon} />,
      name: "Javasript",
    },
    {
      delay: 0.9,
      logo: <FaReact color="darkblue" className={classes.icon} />,
      name: "React",
    },
    {
      delay: 1.2,
      logo: <BsFillBootstrapFill color="blue" className={classes.icon} />,
      name: "Bootstrap",
    },
    {
      delay: 1.5,
      logo: <FaNode color="green" className={classes.icon} />,
      name: "Node",
    },
    {
      delay: 1.8,
      logo: <TbLetterE color="green" className={classes.icon} />,
      name: "EJS",
    },
    {
      delay: 2.1,
      logo: <SiExpress color="green" className={classes.icon} />,
      name: "Express",
    },
    {
      delay: 2.4,
      logo: <SiMongodb color="green" className={classes.icon} />,
      name: "MongoDB",
    },
    {
      delay: 2.7,
      logo: <BsGit color="darkblue" className={classes.icon} />,
      name: "Git",
    },
    {
      delay: 3,
      logo: <BsGithub color="darkblue" className={classes.icon} />,
      name: "Github",
    },
    {
      delay: 3.3,
      logo: <SiFirebase color="orange" className={classes.icon} />,
      name: "Firebase",
    },
    {
      delay: 3.6,
      logo: <TbBrandNextjs color="black" className={classes.icon} />,
      name: "NextJS",
    },
    {
      delay: 3.9,
      logo: <SiFramer color="black" className={classes.icon} />,
      name: "Framer Motion",
    },
    {
      delay: 4.2,
      logo: <TbSquareRoundedLetterR color="blue" className={classes.icon} />,
      name: "REST API's",
    },

    {
      delay: 4.5,
      logo: <TbSql color="green" className={classes.icon} />,
      name: "SQL",
    },
  ];
  const animateVariant = {
    end: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className={classes.body}>
      <h1 className={classes.header}>Skills</h1>
      <ul ref={ref} className={classes.list}>
        {skills.map((item) => (
          <motion.li
            initial={{ opacity: 0, x: "-100vw" }}
            variants={animateVariant}
            animate={mainControls}
            transition={{ duration: 0.5, delay: item.delay }}
            drag
            className={classes.item}
            key={item.name}
            value={item}
          >
            <p>
              {item.logo} {item.name}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
