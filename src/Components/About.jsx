import React from "react";
import carPng from "../assets/Pictures/x2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className=" sm:grid sm:min-h-[600px] sm:place-items-center bg-slate-100">
        <div className="container shadow-xl bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div data-aos="slide-right" data-aos-duration="2000">
              <img
                className="sm:scale-105 sm:-traslate-x-11 max-h-[300px]"
                src={carPng}
                alt=""
              />
            </div>
            <div>
              <div className="space-y-5 sm:p-16 ">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="text-3xl sm:text-4xl font-bold font-serif"
                >
                  About Me
                </h1>
                <p data-aos="fade-up" data-aos-duration="1500">
                  I am Nicolas Themba Mthimunye, a Tshwane University of
                  Technology graduate with a National diploma in Information
                  Technology (Industrial Intelligence Systems). I am highly
                  adaptable and easily fit into new environments. My analytical
                  skills help me identify problems and devise effective
                  solutions. Proficient with various computer tools and
                  software, I am eager to learn and continually improve. I am
                  confident in my ability to contribute to your company's growth
                  and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
