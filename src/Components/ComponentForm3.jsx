import React from 'react';
import SummaryReport from "../assets/SummaryReport.png";
import rightArrow from "../assets/rightArrow.png"; 

function ComponentForm3() {
    return (
        <div className='componentFormDiv'>
            <div className='componentdescription'>

                <div className='headerAndPara'>
                    <h2 style={{fontSize: '1.7rem'}}>
                        Leave the binary tree behind.
                    </h2>
                    <p style={{padding: "1rem 0"}}>
                        Identify top contenders and invite them to
                        meet your team using data-driven decisions
                        that help level the playing field for developers
                        everywhere.
                    </p>
                </div>

                <div className='startFreeTrial'>
                   <a href="">
                     <p className='startFreeTrialPara'> Learn more </p>
                   </a> 

                    <img src={rightArrow} alt="rightArrow" width={20}/>
                </div>

            </div>

            <div>
                <img className="componentFormIMG" src={SummaryReport} alt="SummaryReport" />
            </div>
        </div>
    )
}

export default ComponentForm3;