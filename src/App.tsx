import React, { useState } from "react";
import About from "./pages/about";
import Works from "./pages/works";
import Footer from "./pages/footer";
import { IoChevronUpSharp } from "react-icons/io5";
import Home from "./pages/home";
import Skill from "./pages/skills";
import logo from "./assets/images/misc/logo.png";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const scrollAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollWork = () => {
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollContact = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTop = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center bg-coffee">
          <img src={logo} alt="logo" className="w-28 animate-spin-slow" />
        </div>
      ) : (
        <div className="bg-white overflow-x-hidden h-fit">
          <section className="fixed flex items-center z-50 lg:justify-center lg:left-0 lg:h-full w-full h-24 md:h-full md:w-[200px]">
            <div className="relative bg-white md:bg-transparent w-full flex h-24 flex-col md:h-screen ">
              <div className="absolute right-5 md:right-0 md:top-10 md:relative flex items-center md:block h-24 z-10 md:h-80 ">
                <ul className="text-center text-midcoffee md:mt-64 space-x-5 font-raleway flex md:-rotate-90 h-fit">
                  <li
                    onClick={scrollContact}
                    className="cursor-pointer flex items-center px-1 hover:italic duration-300"
                  >
                    CONTACT
                  </li>
                  <li
                    onClick={scrollWork}
                    className="cursor-pointer flex items-center px-1 hover:italic duration-300"
                  >
                    PROJECTS
                  </li>
                  <li
                    onClick={scrollSkills}
                    className="cursor-pointer flex items-center px-1 hover:italic duration-300"
                  >
                    SKILLS
                  </li>
                  <li
                    onClick={scrollAbout}
                    className="cursor-pointer flex items-center px-1 hover:italic duration-300"
                  >
                    ABOUT
                  </li>
                </ul>
              </div>
              <div className=" md:visible invisible absolute bottom-0 w-full h-40 text-center">
                <h1 className="text-lightcoffee md:-rotate-90 md:mt-10 select-none cursor-default">
                  @2023
                </h1>
              </div>
            </div>
          </section>
          <section className="">
            <div id="intro">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="skills">
              <Skill />
            </div>
            <div id="works">
              <Works />
            </div>
            <div id="footer" className="relative">
              <Footer />
              <button
                onClick={scrollTop}
                className="bg-darkcoffee bg-opacity-50 h-12 w-12 rounded-full flex justify-center items-center 
              absolute bottom-10 right-20 z-50 hover:scale-110 duration-200 animate-bounce"
              >
                <IoChevronUpSharp />
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
