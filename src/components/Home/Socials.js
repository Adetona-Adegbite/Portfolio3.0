import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import classes from "./Socials.module.css";
import { motion } from "framer-motion";
export default function Socials() {
  return (
    <div className={classes.socials}>
      <motion.div
        whileHover={{
          scale: 1.1,
          y: -10,
        }}
      >
        <a
          href="https://www.instagram.com/tona_adegbite/
"
        >
          <BsInstagram />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          y: -10,
        }}
      >
        <a
          href="https://www.tiktok.com/@to_na_
"
        >
          <FaTiktok />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          y: -10,
        }}
      >
        <a href="https://www.linkedin.com/in/adetona-adegbite-3a6a7916a/">
          <BsLinkedin />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          y: -10,
        }}
      >
        <a href="emailto:adetona67@gmail.com">
          <AiOutlineMail />
        </a>
      </motion.div>
    </div>
  );
}
