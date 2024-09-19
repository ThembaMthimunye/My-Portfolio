import React from "react";
import { FaCameraRetro, FaShippingFast, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skillsData = [
  {
    name: "HTML and CSS",
    icon: <FaHtml5 className="text-5xl text-primary group-hover:text-black duration-300 mx-auto" />,
    link: "#",
    description:
      "HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for creating web pages.",
    aosDelay: "1000",
  },
  {
    name: "REACT",
    icon: <FaReact className="text-5xl text-primary group-hover:text-black duration-300 mx-auto" />,
    link: "#",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc.",
    aosDelay: "2000",
  },
  {
    name: "TAILWIND",
    icon: <RiTailwindCssFill className="text-5xl text-primary group-hover:text-black duration-300 mx-auto" />,
    link: "#",
    description:
      "Tailwind CSS is an open-source CSS framework. Unlike other CSS frameworks, it provides utility-first classes for rapid UI development.",
    aosDelay: "3000",
  },
];

const Skills = () => {
  return (
    <section id='skills'>
      <div className="py-12 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1 className="text-3xl font-bold font-serif text-center sm:text-4xl">
              LATEST SKILLS
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                data-aos="fade-up"
                data-aos-duration={skill.aosDelay}
                key={skill.name}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary text-white w-[20rem] mx-auto duration-300 hover:text-black rounded-md"
              >
                <div>{skill.icon}</div>
                <h1>{skill.name}</h1>
                <p className="text-start">{skill.description}</p>
                <a href={skill.link} className="text-blue-300 hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
