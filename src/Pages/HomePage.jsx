import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import Frame3 from "../assets/Frame3.png";
import Caution from "../assets/icon-park_caution.png";
import TryComponent4 from "../assets/TryComponent4.png";
import interview from "../assets/interview.png";
import ContentBox from "../assets/ContentBox.png";
import humanTechnology from "../assets/humanTechnology.png";
import Slide1 from "../assets/Slide1.png";
import Slide2 from "../assets/Slide2.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import Button from "../assets/Button.png";

import ComponentForm1 from "../Components/ComponentForm1.jsx";
import ComponentForm2 from "../Components/ComponentForm2.jsx";
import ComponentForm3 from "../Components/ComponentForm3.jsx";

function HomePage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="flex flex-col items-center justify-center font-sans w-full">
      {/* Start of 1st part */}
      <div>
        <header
          className="w-full h-10 bg-gradient-to-r mb-2"
          style={{
            backgroundImage:
              "linear-gradient(105deg, #1B4DFF 40%, #2649FB 92%, #AF11C7 100%)",
          }}
        >
          <img
            className="mx-auto my-auto pt-[0.5rem] w-[42%]"
            src={FrameImage}
            alt="FrameImage"
          />
        </header>

        <div className="w-[90%] h-20 border border-blue-500 rounded-3xl mx-auto my-4 flex items-center justify-between px-8 ">
          <img src={Logo} alt="Logo" className="w-16 h-12" />
          <div className="flex space-x-14">
            <Link to="/" className="font-normal">
              PRODUCTS
            </Link>
            <Link to="/" className="font-normal">
              SOLUTIONS
            </Link>
            <Link to="/" className="font-normal">
              PRICING
            </Link>
            <Link to="/" className="font-normal">
              RESOURCES
            </Link>
            <Link to="/" className="font-normal">
              LOG-IN
            </Link>
          </div>
          <Link
            to="/"
            className="rounded-lg text-black py-2 px-6 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-100"
            style={{
              background:
                "linear-gradient(180deg, radial-gradient(116.32% 95.63% at 76.68% 66.67%, rgba(201, 119, 214, 0.5) 100%)",
              boxShadow:
                "0px 11.92px 11.92px 0px rgba(0, 0, 0, 0.1), 0px 0px 5.96px 0px rgba(255, 172, 228, 1) inset, 0px -1.19px 1rem 0px rgba(147, 117, 182, 1) inset",
            }}
          >
            JOIN NOW
          </Link>
        </div>

        <h1 className="text-center text-5xl font-extrabold w-1/2 pt-4 mx-auto">
          Skills speak louder than words
        </h1>

        {/* Description */}
        <div className="mt-4 text-gray-600 text-center font-normal text-lg tracking-tight leading-relaxed  mx-auto">
          <p>Whether you want to level up your skills or build a great team,</p>
          <p>
            Cyberinfomines skills assessments and learning tools get you where
            you need to go.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center text-sm mt-8 space-x-8">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md">
            SIGN UP
          </button>
          <button
            className="text-blue-600 border-2 border-blue-600 px-6 rounded-md"
            style={{ padding: "0.65rem 1rem" }}
          >
            REQUEST DEMO
          </button>
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
          <img
            className="w-[28rem]"
            src={technologyImage}
            alt="Technology Background Image"
          />

          {/* Watch our courses part */}
          <div className="relative w-[63rem] h-[18rem] bg-gradient-to-br from-transparent via-gray-500/10 to-gray-400/10 rounded-3xl text-left pl-10 pt-10 top-[-1rem] left-[6rem] right-3 overflow-hidden">
            <div
              className="absolute inset-0 rounded-3xl border-2 border-transparent"
              style={{
                background: "linear-gradient(to right, #1B4DFF, #AF11C7)",
                "-webkit-mask":
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                "mask-composite": "exclude",
                WebkitMaskComposite: "destination-out",
              }}
            ></div>

            <div className="relative z-10">
              <div className="absolute w-[72px] h-[6px] bg-gradient-to-r from-blue-600 to-pink-400 left-[-0.1rem] top-[-0.7rem]"></div>
              <h2 className="text-[3.3rem] font-bold mr-4">
                Watch our Courses
              </h2>
              <p className="mt-1 w-[25rem] text-gray-600 font-medium leading-relaxed">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics:
              </p>
              <p className="mt-0 text-gray-800 font-normal">
                Newtonian mechanics
              </p>
              <Link to="/" className="inline-block mt-4">
                <img
                  src={LearnMore}
                  alt="Learn more button"
                  className="w-[5rem] mt-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End of 1st part */}

      {/* Start of 2nd part */}
      <div className="w-full">
        <div
          className="py-6 px-[4rem] mt-8 bg-black/10 shadow-xl text-center"
          style={{
            boxShadow:
              "-1px 1px 10px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 44px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1 className="text-5xl font-bold">
            It's Not A Talent Shortage It's A Training Gap
          </h1>
        </div>

        <div className="flex flex-col items-center mt-8">
          <p className="mx-24 w-[40rem] text-gray-500 font-medium leading-6 text-center">
            Tech hiring needs a reset. From prepping for jobs and practicing
            coding to running a world-class technical interview, give developers
            the tools they need to showcase their skills, passion, and
            potential.
          </p>
          <img
            className="w-[80%] mt-6"
            src={Background}
            alt="Background Image"
          />
        </div>

        <div
          className="mt-12 h-[25rem] flex justify-around"
          style={{
            background: "rgba(4, 4, 4, 0.1)",
            boxShadow:
              "-1px 2px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 52px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="w-[23rem] mr-2 text-left">
            <h1 className="font-[800] text-[2.5rem] mr-2 pb-4 pt-12">
              Our Features Special For You
            </h1>
            <p className="text-[1.3rem] w-[80%]">
              We provide various special features for all of you
            </p>

            <div className="flex justify-around w-[53%] mt-5">
              <div className="w-[68px] h-[9px] bg-blue-600 left-8 top-6"></div>
              <div className="w-[48px] h-[9px] bg-gradient-to-r from-blue-600 to-pink-400 left-8 top-6"></div>
              <div className="w-[44px] h-[9px] bg-pink-400 left-8 top-6"></div>
            </div>
          </div>

          {/* Slider ---> Carousel*/}
          <div className="w-[40rem] mt-8">
            <Slider {...settings}>
              <div className="flex justify-center items-center">
                <img src={Slide1} alt="Slide1" className="w-full h-full" />
              </div>
              <div className="flex justify-center items-center">
                <img src={Slide2} alt="Slide2" className="w-full h-full" />
              </div>
              <div className="flex justify-center items-center">
                <img src={Slide1} alt="Slide1" className="w-full h-full" />
              </div>
            </Slider>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 px-12">
          <img
            className="relative w-[56%] left-[-2rem]"
            src={Frame3}
            alt="Frame 3 Icon"
          />
          <img
            className="absolute w-[10rem] left-[49%] transform translate-x-[-50%]"
            src={Caution}
            alt="Caution Icon"
          />

          <div className="text-left relative w-[56%] left-[0.7rem] top-[-0.0rem] h-[22rem] p-8 bg-gradient-to-br from-transparent via-gray-600/10 to-gray-900/10 border border-blue-400/60 rounded-md pl-[3.2rem]">
            <h2 className="text-[2.7rem] font-[700] mt-[-1rem]">
              The language for building web pages
            </h2>
            <p className="text-left text-gray-700 text-[1.3rem]">
              Go live on a fast, reliable, and hassle-free hosting network that
              scales with your business with one click and go code!
            </p>
            <div className="mt-4">
              <a href="/">
                <img
                  className="w-[55%] mt-4"
                  src={TryComponent4}
                  alt="Try Component 4"
                />
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
      {/* End of 2nd part */}

      {/* Start of 3rd part */}
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-[4.8rem] font-normal mt-[-3rem]">
          :: Technical interviews ::
        </h2>
        <h3 className="text-[3.7rem]  flex items-center">
          Interview like it’s
          <span className="ml-2 bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent">
            2024
          </span>
        </h3>
        <p className="w-[66%] my-4 text-xl tracking-wide  leading-relaxed text-center">
          Ditch out of reach and out of touch interview questions about golf
          balls and 747s — and turn off your clunky screen share for good. Code,
          create, and collaborate with an IDE built to showcase real-world
          skills in a real-world environment.
        </p>

        <img className="w-[80%] mt-6" src={interview} alt="Interview Image" />

        <div className="w-[100%] bg-gradient-to-r from-blue-600/10 to-pink-400/10 border border-blue-600/60 shadow-lg mt-12 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-12 mt-4 ml-16">
            What other users say
          </h1>

          <div className="w-[40rem] mt-12 ml-[25%]">
            <Slider {...settings2}>
              <div className="flex justify-center items-center">
                <img
                  className="w-full h-full mr-5"
                  src={ContentBox}
                  alt="Content Box"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="w-full h-full mr-5"
                  src={ContentBox}
                  alt="Content Box"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="w-full h-full mr-5"
                  src={ContentBox}
                  alt="Content Box"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* End of 3rd part */}

      {/* Start of 4th part */}
      <div className="flex justify-around w-full   items-center mt-12 px-12">
        <div className="p-12 w-[50%] text-start ml-[1rem] mb-12">
          <h2 className="text-3xl w-[25rem] font-[300] mb-4 mt-[-10rem]">
            Practice coding challenges & prep for interviews
          </h2>
          <p className="text-[1rem] font-[200] mb-8 w-[20rem]">
            Start practicing your skills now and land the job of your dreams.
          </p>
          <button className="text-white text-[0.8rem] bg-blue-600 py-3 px-4 rounded-md">
            Join the community
          </button>
        </div>
        <div>
          <img
            className="w-[22rem] ml-[-1rem]"
            src={humanTechnology}
            alt="technologyImage"
          />
        </div>
      </div>
      {/* End of 4th part */}

      {/* Start of 5th part ---> Footer */}
      <div
        style={{ background: "rgba(27, 77, 255, 1)" }}
        className="w-full h-[27rem] border-b border-b-[#3d4a5c] mt-[-7.3rem] font-[300] text-white"
      >
        <div className="flex  w-[100%] ">
          <div className="h-[18rem] p-10 mt-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-8 h-8 rounded-[0.3rem] mt-2 ml-[-0.4rem]"
            />
            <p className="ml-[-0.3rem] mt-6 font-[300] w-[20rem] mr-10 text-start">
              Until recently, the prevailing view assumed lorem ipsum.
            </p>
            <div className="flex ml-[-0.6rem]">
              <img className="w-6 m-1 mt-4" src={facebook} alt="facebook" />
              <img className="w-6 m-1 mt-4" src={twitter} alt="twitter" />
              <img className="w-6 m-1 mt-4" src={github} alt="github" />
              <img className="w-6 m-1 mt-4" src={linkedin} alt="linkedin" />
              <img className="w-6 m-1 mt-4" src={instagram} alt="instagram" />
              <img className="w-6 m-1 mt-4" src={telegram} alt="telegram" />
              <img className="w-6 m-1 mt-4" src={youtube} alt="youtube" />
            </div>
          </div>

          <div className="flex ml-10 w-[70%] mt-7 text-start">
            <div className="p-12 ml-10 mr-[-2rem] mt-[-1rem]">
              <h2 className="mb-4">Explore</h2>
              <h3 className="mb-4 text-[0.8rem]">Instructions</h3>
              <h3 className="mb-4 text-[0.8rem]">Style guide</h3>
              <h3 className="mb-4 text-[0.8rem]">Licenses</h3>
              <h3 className="mb-4 text-[0.8rem]">Solutions</h3>
              <h3 className="mb-4 text-[0.8rem]">Pricing</h3>
            </div>

            <div className="p-12 mr-[-2rem] text-start">
              <h2 className="mb-4 mt-[-1rem]">Resources</h2>
              <h3 className="mb-4 text-[0.8rem]">About us</h3>
              <h3 className="mb-4 text-[0.8rem]">Help center</h3>
              <h3 className="mb-4 text-[0.8rem]">Features</h3>
              <h3 className="mb-4 text-[0.8rem]">Support</h3>
            </div>

            <div className="p-12 mr-10 text-start mt-[-1rem]">
              <h2 className="mr-10">Subscribe newsletter</h2>
              <p className="mt-5 text-[0.8rem] w-[20rem]">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense text.
              </p>

              <div className="flex justify-evenly mt-9 mr-2 ml-[-1.7rem]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-44 h-9 rounded-[0.3rem] p-4 text-[0.8rem] text-black"
                />
                <img src={Button} alt="Button" className="w-24 ml-[-1rem] mt-[-0.07rem]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.04rem] bg-gray-700 mt-[-1rem] mb-[3.5rem]"></div>

        <div className="flex justify-between">
          <div className="text-white ml-5 font-[100]">
            <p className="font-[200]">
              @ 2024 Cyberinfomines Technology. All Rights Reserved
            </p>
          </div>

          <div className="w-[33%] flex h-10 font-[300] text-[0.9rem] mr-[-2rem]">
            <p className="mr-8">Privacy Policy</p>
            <p className="mr-8">Terms & Conditions</p>
            <p className="mr-8">Contact</p>
          </div>
        </div>
      </div>
      {/* End of 5th part ---> Footer */}
    </div>
  );
}

export default HomePage;
