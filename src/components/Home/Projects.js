import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";
import image7 from "../../assets/images/7.jpg";
import image8 from "../../assets/images/8.jpg";
import image9 from "../../assets/images/9.jpg";
import image10 from "../../assets/images/10.jpg";
import image11 from "../../assets/images/12.jpg";
import image12 from "../../assets/images/11.jpg";

import classes from "./Projects.module.css";
import { motion, useScroll } from "framer-motion";
const projects = [
  {
    img: image1,
    info: {
      title: "Portfolio 1.0",
      description:
        "This is the first website I ever created. It only used HTML. It used a table to arrange the page",
      repo: "adetona-adegbite.github.io/Portfolio1.0",
    },
  },
  {
    img: image2,
    info: {
      title: "Portfolio 2.0",
      description:
        "This is the second website I remember creating. It used HTML, CSS and JQuery. It was fair really. The UI isn't really good to me",
      repo: "adetona-adegbite.github.io/Portfolio",
    },
  },
  {
    img: image3,
    info: {
      title: "Login Page 1.0",
      description:
        "This was one of my first proper-ish projects. It has a cool UI in my opinion. I eventually updated it and tried to link it to up to a backend to store the user information but I stopped it halfway.",
      repo: "adetona-adegbite.github.io/login-page",
    },
  },
  {
    img: image4,
    info: {
      title: "RESTful API Documentation",
      description:
        "I created this website when I was trying to improve on my UI/UX Design. It has a clean UI in my opinion. It basically just shows my knowledge of REST API's with a demo of how they work at the bottom.",
      repo: "adetona-adegbite.github.io/REST",
    },
  },
  {
    img: image5,
    info: {
      title: "E-Commerce 1.0",
      description:
        "This was my first attempt of making an E-Commerce Website. It wasn't a fun experience at all for me beacause of how I was unconsiously making it unnecessarily complex. It mostly used the EJS framework",
      repo: "https://desktop-ecommerce.onrender.com/",
    },
  },

  {
    img: image6,
    info: {
      title: "Keeper App",
      description:
        "This Keeper app is basically a simple React App to keep track of notes and stuff. It's basically a To-do List",
      repo: "adetona-adegbite.github.io/Keeper-App",
    },
  },
  {
    img: image7,
    info: {
      title: "Expense Tracker",
      description:
        "This is a simple Expense Tracker I made during the React Course I took. It allows you to add and filter expenses and shows yoru expenses in like a chart. It has a cool UI in my opinion.",
      repo: "adetona-adegbite.github.io/react-expense-tracker",
    },
  },
  {
    img: image8,
    info: {
      title: "Food Order App",
      description:
        "This is another React App that simulates a restaurant app that shows you their menu and allows to place orders by adding to cart. It uses concepts such as React-Redux, Portals and Fragments. It is also linked to a simple Firebase Backend",
      repo: "adetona-adegbite.github.io/Food-Order",
    },
  },
  {
    img: image9,
    info: {
      title: "Chat Ai App",
      description:
        "This is a React App that uses the OpenAI API to allow interactions with ChatGPT 3.5 Turbo. This project helped me to understand how OpenAI API's work and also helped me to start reading the documentation of the tools I use considering that I only used the documentation to create this",
      repo: "adetona-adegbite.github.io/Tona-Ai",
    },
  },
  {
    img: image10,
    info: {
      title: "Chat App",
      description:
        "I built this using React and Firebase. It's primary focus is the functionality and not the design. It is an App that authenticates you with google and enables you to join a room and chat in Realtime with other people in the room. It uses the universal-cookies library to store cookies.",
      repo: "adetona-adegbite.github.io/chat-v1",
    },
  },
  {
    img: image11,
    info: {
      title: "Voice to Text",
      description:
        "I built this using React. It's relatively simple to make and use. It records your voice and converts it to text, enabling you to later then copy the text and use it however you want.",
      repo: "adetona-adegbite.github.io/voice-to-text",
    },
  },
  {
    img: image12,
    info: {
      title: "Chat App V2",
      description:
        "This was made with React and Socket.io. It uses sockets to establish connections with different users and enables them to send messages to each other in Realtime",
      repo: "adetona-adegbite.github.io/chat-v2",
    },
  },
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <h1 className={classes.header}>Projects</h1>
      <ul className={classes.projects}>
        <motion.div
          className={classes.progress}
          style={{ scaleX: scrollYProgress }}
        />
        {projects.map((item, index) => {
          const isOdd = index % 2 === 0;
          const projectClassName = isOdd
            ? classes.projectOdd
            : classes.projectEven;

          return (
            <motion.li
              className={`${classes.project} ${projectClassName}`}
              key={index}
            >
              <div className={classes.image}>
                <motion.img
                  initial={{ scaleY: 0, opacity: 0 }}
                  // whileHover={{ y: "-0.5vh", scale: 1.1 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: "backIn",
                    repeat: false,
                  }}
                  src={item.img}
                  alt={item.info.title}
                />
                {/* <div className={classes.shadow}></div> */}
              </div>
              <div className={classes.info}>
                <h2>{item.info.title}</h2>
                <p>{item.info.description}</p>
                <a
                  target="_blank"
                  without
                  rel="noreferrer"
                  href={"https://" + item.info.repo}
                >
                  {item.info.repo}
                </a>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
