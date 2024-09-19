import React from "react";

const Contact = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="py-14  ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 px-6">
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-300">
              Lets collaborate on your upcoming projects
            </h1>
            <p className="">
              Let’s join forces and unleash our creativity on your upcoming web
              design projects! Together, we can craft stunning digital
              experiences that captivate and inspire. Ready to transform your
              vision into reality.
            </p>
          </div>
          <div className="grid place-items-center">
          <a
  href="/Contact"
  data-aos="fade-up"
  data-aos-duration="8000"
  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/60 duration-300 hover:text-white px-6 py-2 rounded-md uppercase inline-block"
>
  Contact Us
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
