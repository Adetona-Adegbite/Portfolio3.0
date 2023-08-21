import classes from "./Navbar.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              id="svg_2"
              d="m3.29898,13.79858l89.04745,-1.04354l-0.5102,17.34684l-32.65288,0l0,57.65275l-18.87745,-0.5102l0.5102,-55.61194l-37.7549,-0.5102l0.23778,-17.3237z"
              opacity="NaN"
              stroke="#fff"
              fill="none"
            />
          </g>
        </svg>
        </div>
    </div>
  );
}
