import React from 'react';
import Code from "../assets/Code.png";
import rightArrow from "../assets/rightArrow.png"; 

function ComponentForm2() {
    return (
        <div className='componentFormDiv'>
            <div className='componentdescription'>

            <div className='headerAndPara'>
                <h2 style={{fontSize: '1.7rem'}}>
                    Focus on what really
                    matters: the code.
                </h2>
                <p style={{padding: "1rem 0"}}>
                    Build skills-based coding tests with tech
                    problems a developer would encounter on the
                    job — and hire the team behind your next big
                    idea.
                </p>
            </div>

                <div className='startFreeTrial'  style={{width: "20rem"}}>
                   <a href="">
                     <p className='startFreeTrialPara'> Request a demo  </p>
                   </a> 

                    <img src={rightArrow} alt="rightArrow" width={20}/>
                </div>

            </div>

            <div>
                <img className="componentFormIMG" src={Code} alt="Code" />
            </div>
        </div>
    )
}

export default ComponentForm2;


