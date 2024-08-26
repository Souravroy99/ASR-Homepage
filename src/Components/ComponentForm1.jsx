import React from 'react';
import binarytree from "../assets/binarytree.png";
import rightArrow from "../assets/rightArrow.png"; 

function ComponentForm1() {
    return (
        <div className="flex justify-center items-center w-[85%] mx-auto">
            <div className="flex justify-between items-center w-full py-16">
                <div className="w-full lg:w-7/12 text-left">
                    <div className='mt-[-3rem] ml-5'>
                        <h2 className="text-[2rem] font-bold w-[75%]">
                            Leave the binary tree behind.
                        </h2>
                        <p className="py-4 w-[80%]">
                            Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job.
                        </p>
                    </div>

                    <div className="flex items-center w-6/12 ml-5">
                        <a href="" className="font-bold text-sm">
                            Start free trial
                        </a> 
                        <img src={rightArrow} alt="rightArrow" className="ml-2" width={20}/>
                    </div>
                </div>

                <div>
                    <img className="w-[45rem] right-[-5rem]" src={binarytree} alt="Binarytree" />
                </div>
            </div>
        </div>
    )
}

export default ComponentForm1;
