import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Project",
    link: "/#projects",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              NTM
            </h1>
            <p className="text-sm">
              I am passionate about technology, innovation and big challenging
              tasks on my to-do list.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-3xl hover:text-primary duration-300"/>
              <p>Gauteng</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-3xl hover:text-primary duration-300"/>
              <p>0786490983</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.linkedin.com/in/themba-mthimunye-96849625a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B57VlskyLR%2BiyDw0dikr9xQ%3D%3D">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
              <p>Themba Mthimunye</p>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-7">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.id}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <a href={link.link} className="flex items-center">
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
