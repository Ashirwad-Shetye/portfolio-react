import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

function Works() {
  const control = useAnimation();
  const [textRef, textInView] = useInView();
  const [projectRef, projectInView] = useInView();

  const variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 3,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const slider = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const project = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  useEffect(() => {
    if (textInView) {
      control.start("show");
    }
    if (projectInView) {
      control.start("show");
    }
  }, [control, textInView, projectInView]);

  return (
    <div className=" w-screen min-h-[720px] h-fit lg:h-screen">
      <div className="flex flex-col md:flex-row items-center">
        <section className="w-full h-32 md:h-full md:w-[200px]">
          <div className="h-screen"></div>
        </section>
        <section className="w-8/12 lg:w-10/12 flex justify-center md:justify-left items-center">
          <div className="space-y-16 w-full">
            <motion.div
              ref={textRef}
              animate={control}
              initial="hidden"
              variants={variant}
              className="text-left"
            >
              <motion.h1
                variants={text}
                initial="hidden"
                animate="show"
                className="text-7xl text-darkcoffee font-ginebra"
              >
                Projects / Work
              </motion.h1>
            </motion.div>
            <motion.div
              ref={projectRef}
              variants={slider}
              initial="hidden"
              animate="show"
              className="flex mb-20 md:mb-0 w-full overflow-x-scroll scrollbar-thumb-midcoffee scrollbar-track-coffee
               scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded"
            >
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project m-10 md:w-[350px] md:h-[400px] hover:shadow-lg hover:bg-coffee flex flex-col"
              >
                <div className="one w-full h-4/6"></div>
                <div className="w-full h-2/6 font-raleway text-darkcoffee">
                  <div className="w-full text-sm pt-2">
                    <h1 className="text-center mx-5 pb-1">
                      Goalie is a Fullstack goal management platform built using
                      MERN stack
                    </h1>
                    <h1 className="text-center mx-5 text-gray-500">
                      ReactJs, Redux, Mongodb, Tailwindcss, Express, Flowbite
                    </h1>
                  </div>
                  <div className="w-full absolute bottom-2 flex justify-between text-sm">
                    <a
                      href={"https://goalietask.netlify.app/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 ml-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <CgWebsite className="mr-2 text-xl font-normal" /> Website
                    </a>
                    <a
                      href={
                        "https://github.com/Ashirwad-Shetye/Goalie-frontend/tree/master"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 mr-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <AiFillGithub className="mr-2 text-xl font-normal" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project m-10 md:w-[350px] md:h-[400px] hover:shadow-lg hover:bg-coffee flex flex-col"
              >
                <div className="two w-full h-4/6"></div>
                <div className="w-full h-2/6 font-raleway text-darkcoffee">
                  <div className="w-full text-sm pt-2">
                    <h1 className="text-center mx-5 pb-1">
                      Clone of Amazon.com with working shopping cart and
                      checkout
                    </h1>
                    <h1 className="text-center mx-5 text-gray-500">
                      NextJs, Redux, Firebase, Tailwindcss, Stripe, Webhooks
                    </h1>
                  </div>
                  <div className="w-full absolute bottom-2 flex justify-between text-sm">
                    <a
                      href={"https://amazon-clone-ashirwad-shetye.vercel.app/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 ml-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <CgWebsite className="mr-2 text-xl font-normal" /> Website
                    </a>
                    <a
                      href={"https://github.com/Ashirwad-Shetye/amazon-clone"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 mr-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <AiFillGithub className="mr-2 text-xl font-normal" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project m-10 md:w-[350px] md:h-[400px] hover:shadow-lg hover:bg-coffee flex flex-col"
              >
                <div className="three w-full h-4/6"></div>
                <div className="w-full h-2/6 font-raleway text-darkcoffee">
                  <div className="w-full text-sm pt-2">
                    <h1 className="text-center mx-5 pb-1">
                      Weather app with location detection and daily forecast.
                    </h1>
                    <h1 className="text-center mx-5 text-gray-500">
                      ReactJs, Tailwindcss, FetchApi, WeatherApi
                    </h1>
                  </div>
                  <div className="w-full absolute bottom-2 flex justify-between text-sm">
                    <a
                      href={"https://weather-app.ashirwadshetye.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 ml-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <CgWebsite className="mr-2 text-xl font-normal" /> Website
                    </a>
                    <a
                      href={"https://github.com/Ashirwad-Shetye/Weather_app"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 mr-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <AiFillGithub className="mr-2 text-xl font-normal" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project m-10 md:w-[350px] md:h-[400px] hover:shadow-lg hover:bg-coffee flex flex-col"
              >
                <div className="four w-full h-4/6"></div>
                <div className="w-full h-2/6 font-raleway text-darkcoffee">
                  <div className="w-full text-sm pt-2">
                    <h1 className="text-center mx-5 pb-1">
                      Portfolio to showcase my skills and projects.
                    </h1>
                    <h1 className="text-center mx-5 text-gray-500">
                      ReactJs, Tailwindcss, flowbite, framer-motion
                    </h1>
                  </div>
                  <div className="w-full absolute bottom-2 flex justify-between text-sm">
                    <a
                      href={"https://ashirwadshetye.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 ml-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <CgWebsite className="mr-2 text-xl font-normal" /> Website
                    </a>
                    <a
                      href={
                        "https://github.com/Ashirwad-Shetye/portfolio-react"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 mr-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <AiFillGithub className="mr-2 text-xl font-normal" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project m-10 md:w-[350px] md:h-[400px] hover:shadow-lg hover:bg-coffee flex flex-col"
              >
                <div className="five w-full h-4/6"></div>
                <div className="w-full h-2/6 font-raleway text-darkcoffee">
                  <div className="w-full text-sm pt-2">
                    <h1 className="text-center mx-5 pb-1">
                      Rock, Paper & Scissor game to demonstrate usage of hooks
                      in react JS functions.
                    </h1>
                    <h1 className="text-center mx-5 text-gray-500">
                      NextJs, Tailwindcss
                    </h1>
                  </div>
                  <div className="w-full absolute bottom-2 flex justify-between text-sm">
                    <a
                      href={
                        "https://rock-paper-scissor-by-ashirwadshetye.vercel.app/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 ml-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <CgWebsite className="mr-2 text-xl font-normal" /> Website
                    </a>
                    <a
                      href={
                        "https://github.com/Ashirwad-Shetye/rock_paper_scissor_using_nextjs"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 mr-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <AiFillGithub className="mr-2 text-xl font-normal" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={project}
                initial="hidden"
                animate="show"
                className="project m-10 md:w-[350px] md:h-[400px] hover:shadow-lg hover:bg-coffee flex flex-col"
              >
                <div className="six w-full h-4/6"></div>
                <div className="w-full h-2/6 font-raleway text-darkcoffee">
                  <div className="w-full text-sm pt-2">
                    <h1 className="text-center mx-5 pb-1">
                      (In progress) Client Website for gaming services and
                      product.
                    </h1>
                    <h1 className="text-center mx-5 text-gray-500">
                      NextJs, Tailwindcss, Flowbite, Vercel, Stripe,
                      Framer-motion
                    </h1>
                  </div>
                  <div className="w-full absolute bottom-2 flex justify-between text-sm">
                    <button
                      className="h-8 ml-2 flex items-center text-darkcoffee 
                    font-raleway px-2 hover:font-bold duration-200 hover:scale-110 "
                    >
                      <CgWebsite className="mr-2 text-xl font-normal" /> Website
                    </button>
                    <button
                      className="h-8 mr-2 flex items-center text-darkcoffee opacity-30 
                    font-raleway px-2"
                    >
                      <AiFillGithub className="mr-2 text-xl font-normal" />
                      GitHub
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Works;
