import React from "react";
import flower1 from "../assets/images/misc/flower1.png";
import mongodb from "../assets/images/skills/mongodb.png";
import express from "../assets/images/skills/express.png";
import reactLogo from "../assets/images/skills/react.png";
import nodeLogo from "../assets/images/skills/node.png";
import { motion, useScroll, useTransform } from "framer-motion";

function Home() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const image = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.2,
      transition: {
        duration: 2,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const stack = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className=" w-screen min-h-[720px] h-fit lg:h-screen">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
        <section className=" relative w-full h-28 md:h-full md:w-[200px]">
          <div className="h-screen"></div>
        </section>
        <motion.section
          variants={variants}
          initial="hidden"
          animate="show"
          className="relative w-10/12 flex justify-center items-center"
        >
          <motion.div
            variants={image}
            style={{ y }}
            className="absolute right-0 md:right-10 lg:left-0 lg:w-auto lg:max-w-[600px] opacity-10 w-80 md:96 rotate-12"
          >
            <img src={flower1} alt={"flower"} width={400} height={400} />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="text-left mt-24 md:w-4/6"
          >
            <motion.div
              variants={text}
              className="text-6xl md:text-7xl lg:text-8xl text-darkcoffee space-y-5"
            >
              <h1 className="font-raleway font-bold">Hey!</h1>
              <h1 className="font-ginebra">I&apos;m Ashirwad Shetye</h1>
            </motion.div>
            <motion.h2
              variants={text}
              className="text-3xl text-midcoffee my-6 font-raleway tracking-widest"
            >
              Fullstack Web Developer
            </motion.h2>
            <motion.p
              variants={text}
              className="text-xl text-darkcoffee font-raleway tracking-wide"
            >
              Enthusiastic web developer with multiple skills & creative vision
              to build beautiful & engaging websites
            </motion.p>
            <motion.div
              variants={text}
              className="my-10 flex space-x-5 items-center"
            >
              <motion.div variants={stack} className="w-28">
                <img src={mongodb} alt={"mongodb"} width={400} height={400} />
              </motion.div>
              <motion.div variants={stack} className="w-24">
                <img src={express} alt={"js"} width={400} height={400} />
              </motion.div>
              <motion.div variants={stack} className="w-20">
                <img src={reactLogo} alt={"js"} width={400} height={400} />
              </motion.div>
              <motion.div variants={stack} className="w-20 mb-1">
                <img src={nodeLogo} alt={"js"} width={400} height={400} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export default Home;
