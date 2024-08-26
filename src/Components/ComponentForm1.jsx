import React from 'react';
import binarytree from "../assets/binarytree.png";
import rightArrow from "../assets/rightArrow.png"; 

function ComponentForm1() {
    return (
        <div className='componentFormDiv'>
            <div className='componentdescription'>

                <div className='headerAndPara'>
                    <h2 style={{fontSize: '1.7rem'}}>
                        Leave the binary tree behind.
                    </h2>
                    <p style={{padding: "1rem 0"}}>
                        Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job.
                    </p>
                </div>
 
                <div className='startFreeTrial'>
                   <a href="">
                     <p className='startFreeTrialPara'> Start free trial </p>
                   </a> 

                    <img src={rightArrow} alt="rightArrow" width={20}/>
                </div>

            </div>

            <div>
                <img className="componentFormIMG" src={binarytree} alt="Binarytree" />
            </div>
        </div>
    )
}

export default ComponentForm1;