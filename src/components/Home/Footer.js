import classes from "./Footer.module.css";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.socials}>
          <a href="https://www.instagram.com/tona_adegbite/">
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/in/adetona-adegbite-3a6a7916a/">
            <BsLinkedin />
          </a>
          <a href="mailto:adetona67@gmail.com">
            <AiOutlineMail />
          </a>
          <a
            href="https://www.tiktok.com/@to_na_
"
          >
            <FaTiktok />
          </a>
        </div>
        <div>
          <p>Made with React, Framer-Motion and more</p>
        </div>
        <div className={classes.copyright}>Tona Copyright © 2023</div>
      </div>
    </footer>
  );
}
