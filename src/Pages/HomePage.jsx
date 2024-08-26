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
    <div className="container">

    {/* Start of 1st part */}
      <div>
        <header className="header">
          <img className="headerImage" src={FrameImage} alt="FrameImage" />
        </header>
  
        <div className="headerOptionsDiv">
          <div className="logoDiv">
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          <Link to='/' className="headerOptions">PRODUCTS</Link>
          <Link to='/' className="headerOptions">SOLUTIONS</Link>
          <Link to='/' className="headerOptions">PRICING</Link>
          <Link to='/' className="headerOptions">RESOURCES</Link>
          <Link to='/' className="headerOptions">LOG-IN</Link>
          <Link to='/' className="headerOptions">
            <div className="gradient-button"> JOIN NOW </div>
          </Link>

        </div>

        <h1 className="headingText">Skills speak louder than words</h1>

        {/* Description */}
        <div className="description">
            <p>
                Whether you want to level up your skills or build a great team,
            </p>
            <p>
                Cyberinfomines skills assessments and learning tools get  you where you need to go.
            </p>
        </div>

        {/* Buttons */}
        <div className="buttons">
            {/* Create button if needed */}
            <div className="signup">SIGN UP</div>
            <div className="requestDemo">REQUEST DEMO</div>
        </div>

        {/* Image container */}
        <div className="imageContainer">
            <img className="imgCompany" src={Uber} alt="Uber" />
            <img className="imgCompany" src={Meta} alt="Meta" />
            <img className="imgCompany" src={Instacart} alt="Instacart" />
            <img className="imgCompany" src={Greenhouse} alt="Greenhouse" />
            <img className="imgCompany" src={Gusto} alt="Gusto" />
        </div>


        {/* Human Image + Watch our courses part*/}
        <div className="Human_technology_div">

        {/* Human Technology Image */}
            <div>
                <img className="technologyImage" src={technologyImage} alt="Technology Background Image" />
            </div>

        {/* Watch our courses part */}
            <div className="watchCourses">

                <div className="gradient"></div>
                <h2 className="watchCoursesHeader">Watch our Courses</h2>
                <p className="watchCoursesPara1">Problems trying to resolve the conflict between the two major realms of Classical physics: 
                </p>
                <p className="watchCoursesPara2">
                  Newtonian mechanics 
                </p>
                <Link className="learnMore">
                  <img src={LearnMore} alt="Learn more button" />
                </Link>
            
            </div>
        </div>

      </div>
    {/* End of 1st part */}


    {/* Start of 2nd part */}
      <div>
        <div className="pageSeparatorDiv">
          <h1 className="pageSeparator">It's Not A Talent Shortage It's A Training Gap</h1>
        </div>

        <div className="backgroundDiv">
          <p className="backgroundPara">
            Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.
          </p>
          <img className="backgroundImage" src={Background} alt="Background Image" />
        </div>
        
        <div className="slider">
          <img src={GlassMaterial} alt="GlassMaterial" className="sliderImage" />
        </div>

        <div className="frame3AndCautionDiv">
          <img className="frame3" src={Frame3} alt="Frame 3 Icon" />
          <img className="caution" src={Caution} alt="Caution Icon" />

          <div className="languageDiv">
              <h2 className="languageHeader">The language for building web pages</h2>
              <p className="languagePage">Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!
              </p>
              <div>
              <a href="/">
                <img className="tryComponent4" src={TryComponent4} alt="Try Component 4" />
              </a>
              </div>
          </div>

        </div>

        <div className="componentForm">
            <ComponentForm1 />
 
            <br /><br />

            <ComponentForm2 />

            <br /><br />
            
            <ComponentForm3 />
        </div>
      </div>
      {/* End of 2nd part */}


      {/* Start of 3rd part */}
      <div className="technicalInterview">
        <h2 className="technicalInterviewh2">:: Technical interviews ::</h2>
        <h3 className="technicalInterviewh3">Interview like it’s <p className="para2024">2024</p></h3>
        <p className="technicalInterviewpara">
          Ditch out of reach and out of touch interview questions about golf balls and 747s —
          and turn off your clunky screen share for good. Code, create, and collaborate with
          an IDE built to showcase real-world skills in a real-world environment.
        </p>

        <img className="interviewImg" src={interview} alt="Interview Image" />

        <div className="otherUsers">
          <h1 className="otherHeader">What other users say</h1>

          {/* Make slider of images */}
          <img className="ContentBoxImg" src={ContentBox} alt="Content Box" />
        </div>

      </div>
      {/* End of 3rd part */}


      {/* Start of 4th part */}
      <div className="fourthDiv">

        <div className="fourthDivpart">
          <h2 className="fourthDivpartHeader">Practice coding challenges &
              prep for interviews
          </h2>
          <p className="fourthDivpartPara">Start practicing your skills now and land the job
          of your dreams.</p>
          <button className="btn">Join the community</button>
        </div>

        <div>
          <img className="humanTechnology2" src={humanTechnology} alt="technologyImage" />
        </div>

      </div>
      {/* End of 4th part */}



    </div>
  );
}

export default HomePage;
