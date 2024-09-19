import React from "react";
import heroPic from "../../assets/Pictures/x3.jpg";

const Hero = () => {
  const handleButtonClick = () => {
    // Action for the button, e.g., navigate to another section or open a modal
    console.log("Button clicked!");
  };

  return (
    <section id='home'>
      <div>
        <div className="container min-h-[620px] flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="order-1 sm:order-2"
            >
              <img
                src={heroPic}
                alt="A tech enthusiast at work"
                className="relative -z-10 max-h-[400px] sm:scale-125"
              />
            </div>
            <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
              <h1
                data-aos="fade-up"
                data-aos-delay="1000"
                className="text-5xl font-semibold text-7xl font-serif"
              >
                Tech Enthusiast
              </h1>
              <p data-aos="fade-up" data-aos-delay="1500">
                I am passionate about technology, innovation and big challenging
                tasks on my to-do list. That makes me want to learn more and
                keep up with building something greater than me.
              </p>
              <button
                onClick={handleButtonClick}
                data-aos="fade-up"
                data-aos-delay="2000"
                className="bg-primary text-white hover:bg-primary/60 duration-300 hover:text-black px-6 py-2 rounded-md"
              >
                Get To Know Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
