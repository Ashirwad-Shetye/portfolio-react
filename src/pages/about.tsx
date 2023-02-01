import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../assets/images/misc/profileImage.png";

function About() {
  const control = useAnimation();
  const [textRef, textInView] = useInView();
  const [imageRef, imageInView] = useInView();

  const text = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const image = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  useEffect(() => {
    if (textInView) {
      control.start("show");
    }
    if (imageInView) {
      control.start("show");
    }
  }, [control, textInView, imageInView]);

  return (
    <div className="h-fit lg:h-screen">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
        <section className="relative w-full h-32 md:h-full md:w-[200px]">
          <div className="h-screen"></div>
        </section>
        <section className="mx-5 md:mx-0 md:w-8/12 lg:w-10/12 flex justify-center md:justify-left items-center">
          <motion.div
            ref={textRef}
            className="grid sm:grid-rows gap-5 lg:grid-cols-2 place-items-center md:place-items-left"
          >
            <motion.div
              variants={text}
              animate={control}
              initial="hidden"
              className="text-left w-11/12 md:w-full  md:place-self-start"
            >
              <div className=" text-darkcoffee space-y-6">
                <h1 className="text-7xl font-ginebra">About</h1>
                <h2 className="text-2xl font-raleway tracking-wide">
                  I&apos;m Ashirwad. A focused web developer, designer & problem
                  solver.
                </h2>
                <div className="space-y-5">
                  <p className="text-md text-darkcoffee font-raleway tracking-wide">
                    As an individual fascinated & drawn towards art & creativity
                    since childhood, I’ve always been involved in different
                    forms of artistic fields like painting sketches & producing
                    music. Learning web development has helped me expand this
                    ability to a different medium.
                  </p>
                  <p className="text-md text-darkcoffee font-raleway tracking-wide">
                    This love towards art & technology has always pushed me to
                    learn new skills, be it photoshop, sketching or web
                    designing & development.
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="text-md text-darkcoffee font-raleway tracking-wide">
                    One of my favourite quote is :
                  </p>
                  <h1 className="font-raleway font-semibold text-midcoffee text-xl">
                    “Technology is best when it brings people together.”
                  </h1>
                  <div className="text-right">
                    <h2 className="italic font-semibold text-darkcoffee tracking-wide">
                      -Matt Mullenweg
                    </h2>
                    <p className="italic text-darkcoffee tracking-wide">
                      Entrepreneur & developer of wordpress
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={imageRef}
              variants={image}
              animate={control}
              initial="hidden"
              className=" w-10/12 md:max-w-4/6 md:min-w-[350px] md:max-w-[400px] 
              place-self-center overflow-hidden hover:shadow-xl"
            >
              <img
                src={profileImage}
                alt={"profile"}
                width={614}
                height={819}
                className="hover:scale-105 grayscale hover:grayscale-0 duration-300"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default About;
