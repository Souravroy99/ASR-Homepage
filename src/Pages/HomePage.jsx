import React from "react";
import { Link } from "react-router-dom";
import FrameImage from "../assets/Frame.png";
import Logo from "../assets/LOGO.png";
import Meta from "../assets/Meta.png";
import Uber from "../assets/Uber.png";
import Greenhouse from "../assets/Greenhouse.png";
import Gusto from "../assets/Gusto.png";
import Instacart from "../assets/Instacart.png";
import technologyImage from "../assets/technologyImage.png";
import LearnMore from "../assets/LearnMore.png";
import Background from "../assets/Background.png";
import GlassMaterial from "../assets/GlassMaterial.png";
import Frame3 from "../assets/Frame3.png";
import Caution from "../assets/icon-park_caution.png";
import TryComponent4 from "../assets/TryComponent4.png";
import interview from "../assets/interview.png";
import ContentBox from "../assets/ContentBox.png";
import humanTechnology from "../assets/humanTechnology.png";

import ComponentForm1 from "../Components/ComponentForm1.jsx";
import ComponentForm2 from "../Components/ComponentForm2.jsx";
import ComponentForm3 from "../Components/ComponentForm3.jsx";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center font-sans w-full">
      {/* Start of 1st part */}
      <header
        className="w-full h-10 bg-gradient-to-r mb-2"
        style={{
          backgroundImage: 'linear-gradient(105deg, #1B4DFF 40%, #2649FB 92%, #AF11C7 100%)',
        }}
      >
        <img className="mx-auto my-2 w-[42%]" src={FrameImage} alt="FrameImage" />
      </header>

      <div className="w-[90%] h-20 border border-blue-500 rounded-3xl mx-auto my-4 flex items-center justify-between px-8 ">
        <img src={Logo} alt="Logo" className="w-16 h-12" />
        <div className="flex space-x-14">
          <Link to='/' className="font-normal">PRODUCTS</Link>
          <Link to='/' className="font-normal">SOLUTIONS</Link>
          <Link to='/' className="font-normal">PRICING</Link>
          <Link to='/' className="font-normal">RESOURCES</Link>
          <Link to='/' className="font-normal">LOG-IN</Link>
        </div>
        <Link 
          to="/" 
          className="rounded-lg text-black py-2 px-6 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-100"
          style={{
            background: 'linear-gradient(180deg, radial-gradient(116.32% 95.63% at 76.68% 66.67%, rgba(201, 119, 214, 0.5) 100%)',
            boxShadow: '0px 11.92px 11.92px 0px rgba(0, 0, 0, 0.1), 0px 0px 5.96px 0px rgba(255, 172, 228, 1) inset, 0px -1.19px 1rem 0px rgba(147, 117, 182, 1) inset',
          }}
        >
          JOIN NOW
        </Link>

      </div>

      <h1 className="text-center text-5xl font-extrabold w-2/3 pt-4 mx-auto">
        Skills speak louder than words
      </h1>

      {/* Description */}
      <div className="mt-4 text-gray-600 text-center font-normal text-lg tracking-tight leading-relaxed  mx-auto">
        <p>Whether you want to level up your skills or build a great team,</p>
        <p>Cyberinfomines skills assessments and learning tools get you where you need to go.</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center text-sm mt-8 space-x-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-md">SIGN UP</button>
        <button className="text-blue-600 border-2 border-blue-600 px-6 rounded-md" style={{padding: "0.65rem 1rem"}}>REQUEST DEMO</button>
      </div>

      {/* Image container */}
      <div className="flex justify-center items-center mt-12 space-x-[-3rem]">
        <img className="w-[17rem]" src={Uber} alt="Uber" />
        <img className="w-[19rem]" src={Meta} alt="Meta" />
        <img className="w-[19rem]" src={Instacart} alt="Instacart" />
        <img className="w-[17rem]" src={Greenhouse} alt="Greenhouse" />
        <img className="w-[17rem]" src={Gusto} alt="Gusto" />
      </div>

      {/* Human Image + Watch our courses part */}
      <div className="flex justify-between items-center pt-20 px-12 mr-32">
        {/* Human Technology Image */}
        <img className="w-[28rem]" src={technologyImage} alt="Technology Background Image" />
 
        {/* Watch our courses part */}
        <div className="relative w-[64rem] h-[17rem]  bg-gradient-to-br from-transparent via-gray-500/10 to-gray-400/10 border border-blue-400/60 rounded-lg text-left pl-10 pt-10 top-[-2rem] left-[6rem] right-3">
          <div className="absolute w-[72px] h-[7px] bg-gradient-to-r from-blue-600 to-pink-400 left-8 top-6"></div>
          <h2 className="text-[3.3rem] font-bold mr-4">Watch our Courses</h2>
          <p className="mt-1 w-[22rem] text-gray-600 font-medium leading-relaxed">Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
          <p className="mt-0 text-gray-800 font-normal">Newtonian mechanics</p>
          <Link to="/" className="inline-block mt-4">
            <img src={LearnMore} alt="Learn more button" className="w-[5rem]" />
          </Link>
        </div>
      </div>

      {/* Start of 2nd part */}
      <div className="w-full">
      <div className="py-6 px-[4rem] mt-8 bg-black/10 shadow-xl text-center" style={{
    boxShadow: "-1px 1px 10px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 44px 0px rgba(0, 0, 0, 0.25)",
      }}>
  <h1 className="text-5xl font-bold">It's Not A Talent Shortage It's A Training Gap</h1>
</div>


        <div className="flex flex-col items-center mt-8">
          <p className="mx-24 w-[40rem] text-gray-500 font-medium leading-6 text-center">Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.</p>
          <img className="w-[80%] mt-6" src={Background} alt="Background Image" />
        </div>

        <div className="mt-8">
          <img src={GlassMaterial} alt="GlassMaterial" className="w-full" />
        </div>

        <div className="flex justify-between items-center mt-12 px-12">
          <img className="relative w-[56%] left-[-2rem]" src={Frame3} alt="Frame 3 Icon" />
          <img className="absolute w-[10rem] left-[49%] transform translate-x-[-50%]" src={Caution} alt="Caution Icon" />

          <div className="text-left relative w-[56%] left-[0.7rem] top-[-0.0rem] h-[22rem] p-8 bg-gradient-to-br from-transparent via-gray-600/10 to-gray-900/10 border border-blue-400/60 rounded-md pl-[3.2rem]">
            <h2 className="text-[2.7rem] font-[700] mt-[-1rem]">The language for building web pages</h2>
            <p className="text-left text-gray-700 text-[1.3rem]">Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!</p>
            <div className="mt-4">
              <a href="/">
                <img className="w-[55%] mt-4" src={TryComponent4} alt="Try Component 4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20 space-y-8">
          <ComponentForm1 />
          <ComponentForm2 />
          <ComponentForm3 />
        </div>
      </div>

      {/* Start of 3rd part */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[4.8rem] font-normal mt-[-3rem]">:: Technical interviews ::</h2>
        <h3 className="text-[3.7rem]  flex items-center">
          Interview like it’s 
          <span className="ml-2 bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent">2024</span>
        </h3>
        <p className="w-[66%] my-4 text-xl tracking-wide  leading-relaxed text-center">Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>

        <img className="w-[80%] mt-6" src={interview} alt="Interview Image" />

        <div className="w-[100%] bg-gradient-to-r from-blue-600/10 to-pink-400/10 border border-blue-600/60 shadow-lg mt-12 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-12 mt-4 ml-16">What other users say</h1>
          <img className="w-[60%] ml-[14rem] mb-12" src={ContentBox} alt="Content Box" />
        </div>
      </div>

      {/* Start of 4th part */}
      <div className="flex justify-around items-center mt-12 px-12">
        <div className="p-12 w-[50%]">
          <h2 className="text-2xl font-light mb-4 mt-[-10rem]">Practice coding challenges & prep for interviews</h2>
          <p className="text-lg font-light mb-8">Start practicing your skills now and land the job of your dreams.</p>
          <button className="text-white bg-blue-600 py-2 px-4 rounded-md">Join the community</button>
        </div>
        <div>
          <img className="w-[20rem]" src={humanTechnology} alt="technologyImage" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
