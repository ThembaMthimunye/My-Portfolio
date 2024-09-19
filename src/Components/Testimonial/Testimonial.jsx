import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { MdDriveEta } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import p1 from "../../assets/Pictures/p1.png"
import p2 from "../../assets/Pictures/p2.png"
import p3 from "../../assets/Pictures/p3.png"


const skillsData = [
  {
    name: "Sally Jones",
    icon: p1,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatispariatur esse nemo delectus, fuga voluptas doloribus ",
    aosDelay: "1000",
  },

  {
    name: "Pretty Lovis",
    icon:p2,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatispariatur esse nemo delectus, fuga voluptas doloribus ",
    aosDelay: "2000",
  },

  {
    name: "Ahmed Judith",
    icon: p3,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatispariatur esse nemo delectus, fuga voluptas doloribus ",
    aosDelay: "3000",
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 sm:min-h-[600px] sm:grid sm:place-items-center ">
      <div className="container">
        <div className="pb-12 space-y-5">
          <h1 className="text-3xl font-bold font-serif text-center  sm:text-4xl">
            Testimonial
          </h1>
          <p className="max-w-[50rem] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et
            numquam nam dolorum sit dignissimos, voluptates sint vero? Eligendi,
            quia earum? Beatae ea at nostrum maiores, illo inventore nihil
            consequatur.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center md:grid-cols-3 gap-4  ">
          {skillsData.map((skill) => (
            <div
              data-aos="fade-up"
              data-aos-duration={skill.aosDelay}
              key={skill.name}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary text-white w-[20rem] mx-auto duration-300 hover:text-black rounded-md "
            >
              <div className="m">
                <img className="size-[10rem] mx-auto rounded-md" src={skill.icon} alt="" />
                </div>
              <h1>{skill.name}</h1>
              <p className="text-start ">{skill.description}</p>
              <div className="flex justify-center">
              <CiStar  className="text-primary size-[3rem]"/>
              <CiStar className="text-primary size-[3rem]"/>
              <CiStar className="text-primary size-[3rem]"/>
              <CiStar className="text-primary size-[3rem]"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
