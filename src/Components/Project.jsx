import React from "react";
import car1 from "../assets/Pictures/P-1.png";
import car2 from "../assets/Pictures/P-2.png";
import car3 from "../assets/Pictures/P-3.png";

const CarListing = [
  {
    name: "SAPS WEBSITE",
    price: 100,
    image: car1,
    aosDelay: "0",
    km: "12 km",
    link: "https://fighting-crime-main.vercel.app/",
  },

  {
    name: "AKRAM STORE WEBSITE",
    price: 100,
    image: car2,
    aosDelay: "500",
    km: "22 km",
    link: "https://akram-clone-final.vercel.app/",
  },

  {
    name: "MOVIES WEBSITE",
    price: 100,
    image: car3,
    aosDelay: "1000",
    km: "32 km",
    link: "https://final-movies--two.vercel.app/",
  },
];
const Project = () => {
  return (
    <section id="projects">
      <div className="pb-24 pt-12">
        <div className="container">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold font-serif"
          >
            MY PROJECTS
          </h1>
          <p data-aos="fade-up" className="text-sm pb-10">
            This are the projects completed with the above mentioned skills
          </p>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:gridcols-4 gap-16">
              {CarListing.map((list) => {
                {
                  return (
                    <div
                      data-aos="flip-left"
                      data-aos-duration="2000"
                      className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                    >
                      <div className="w-full">
                        <img
                          className="w-full h-[320px] object-contain  group-hover:translate-x-[5rem] duration-700"
                          src={list.image}
                          alt=""
                        />
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-xl text-primary font-semibold flex justify-center">
                          {list.name}
                        </h1>
                        <div className="flex space-x-6 items-center text-xl font-semibold">
                          
                          <a
                            className="bg-transparent border-2 border-primary text-primary hover:bg-primary/60 duration-300 hover:text-white hover:  px-6 py-2 rounded-md mx-auto"
                            href={list.link}
                          >
                            VIEW WEBSITE
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
