import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skill() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 1.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <div className="min-h-[750px] h-fit lg:h-screen">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
        <section className="relative w-full h-32 md:h-full md:w-[200px]">
          <div className="h-screen"></div>
        </section>
        <section className="mx-5 md:mx-0 flex flex-col justify-center items-start">
          <motion.div
            ref={ref}
            variants={variants}
            animate={control}
            initial="hidden"
          >
            <motion.div
              variants={text}
              animate={control}
              initial="hidden"
              className="text-left"
            >
              <h1 className="text-7xl text-darkcoffee font-ginebra mb-10">
                Skills
              </h1>
            </motion.div>
            <motion.p
              variants={text}
              animate={control}
              initial="hidden"
              className="mb-10 font-raleway text-darkcoffee"
            >
              I have been working with the following technology:
            </motion.p>
            <div className="flex">
              <motion.ul
                variants={text}
                animate={control}
                initial="hidden"
                className="space-y-5 text-lg font-raleway text-darkcoffee"
              >
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>TailwindCss</li>
                <li>ReactJs along with NextJs framework</li>
                <li>MongoDb & SQL</li>
                <li>Redux and Redux toolkit</li>
                <li>Test: Jest, React Testing Library</li>
              </motion.ul>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Skill;
