import React from "react";
import TypingHeader from "../components/TypingHeader";
import Tilt from "react-parallax-tilt";
import heroImg from "/image2.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-10 px-[7vw] lg:px-[15vw] font-sans text-white overflow-hidden"
    >
      {/* 🔲 Radial Grid Background */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-14">

        {/* Left Section: Text */}
        <div className="md:w-[58%] text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Welcome to
          </h1>
          <h2 className="text-5xl sm:text-6xl font-bold text-purple-400 mb-4">
            Notes Hub
          </h2>
          <div className="text-2xl sm:text-3xl font-semibold text-blue-500 mb-4 break-words max-w-full text-left">
            <TypingHeader />
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
            Explore subject-wise and semester-wise notes curated specially for Secondary Class or Degree level students. Download PDFs and level up your preparation!
          </p>
        </div>

        {/* Right Section: Image with Tilt */}
        <div className="md:w-[42%] flex justify-center md:justify-start pl-4 sm:pl-6 md:pl-10">
          <Tilt
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            style={{
              boxShadow: "0 0 10px #a855f7, 0 0 25px #c084fc",
              borderRadius: "50%",
            }}
          >
            <img
              src={heroImg}
              alt="Student"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default Home;
