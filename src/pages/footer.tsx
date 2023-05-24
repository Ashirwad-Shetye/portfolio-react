import React, { useEffect } from "react";
import { GoMail } from "react-icons/go";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import flower from "../assets/images/misc/flower2.png";

function Footer() {
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

  const image = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.2,
      transition: {
        duration: 1,
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
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <div className=" w-screen min-h-[750px] h-fit lg:h-screen">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
        <section className="relative w-full h-32 md:h-full md:w-[200px]">
          <div className="h-screen"></div>
        </section>
        <section className="mx-5 md:mx-0 flex flex-col justify-center items-start z-10">
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
                Contact
              </h1>
            </motion.div>
            <motion.p
              variants={text}
              animate={control}
              initial="hidden"
              className="mb-10 font-raleway text-darkcoffee"
            >
              Let&apos;s connect through the platforms below
            </motion.p>
            <ul className="space-y-5 text-lg font-raleway text-darkcoffee z-50">
              <motion.li
                variants={text}
                animate={control}
                initial="hidden"
                className="hover:scale-110 duration-200 underline "
              >
                <a
                  href="https://www.linkedin.com/in/ashirwadshetye/"
                  target="_blank"
                  rel="noopener, noreferrer"
                  className="hover:line-through"
                >
                  LinkedIn
                </a>
              </motion.li>
              <motion.li
                variants={text}
                animate={control}
                initial="hidden"
                className="hover:scale-110 duration-200 underline"
              >
                <a
                  href="https://github.com/Ashirwad-Shetye"
                  target="_blank"
                  rel="noopener, noreferrer"
                  className="hover:line-through"
                >
                  GitHub
                </a>
              </motion.li>
              <motion.li
                variants={text}
                animate={control}
                initial="hidden"
                className="hover:scale-110 duration-200 underline"
              >
                <a
                  href="https://twitter.com/Ashirwad98"
                  target="_blank"
                  rel="noopener, noreferrer"
                  className="hover:line-through"
                >
                  Twitter
                </a>
              </motion.li>
              <motion.li
                variants={text}
                animate={control}
                initial="hidden"
                className="hover:scale-110 duration-200 underline"
              >
                <a
                  href="https://www.instagram.com/ashirwadshetye/"
                  target="_blank"
                  rel="noopener, noreferrer"
                  className="hover:line-through"
                >
                  Instagram
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            variants={text}
            animate={control}
            initial="hidden"
            className="my-10 text-lg font-raleway text-darkcoffee z-50"
          >
            <h1 className="hover:scale-105 duration-200">
              <a
                href="mailto:ashirwadpramodshetye@gmail.com"
                className="md:flex md:space-x-5 items-center"
                target="_blank"
                rel="noopener, noreferrer"
              >
                <h1 className="text-2xl">
                  <GoMail />
                </h1>
                <h1 className=" underline hover:line-through">
                  ashirwadpramodshetye@gmail.com
                </h1>
              </a>
            </h1>
          </motion.div>
          <motion.div
            variants={image}
            animate={control}
            initial="hidden"
            className="absolute w-80 right-5 top-40 md:w-96 lg:max-w-[500px] md:top-40 
              md:right-32 lg:right-40 opacity-20 -z-10"
          >
            <img src={flower} alt={"flower"} width={300} height={500} />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
