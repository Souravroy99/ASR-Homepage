import React from 'react';
import Code from "../assets/Code.png";
import rightArrow from "../assets/rightArrow.png"; 

function ComponentForm2() {
    return (
        <div className="flex justify-center items-center w-[85%] mx-auto h-[30rem]">
            <div className="flex justify-between items-center w-full py-16">
                <div className="w-full lg:w-7/12 text-left">
                    <div className='mt-[-3rem] ml-5'>
                        <h2 className="text-[2rem] font-bold w-[75%]">
                            Focus on what really matters: the code.
                        </h2>
                        <p className="py-4 w-[80%]">
                            Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea.
                        </p>
                    </div>

                    <div className="flex items-center w-6/12 ml-5">
                        <a href="" className="font-bold text-sm">
                        Request a demo
                        </a> 
                        <img src={rightArrow} alt="rightArrow" className="ml-2" width={20}/>
                    </div>
                </div>

                <div>
                    <img className="w-[45rem] right-[-5rem]" src={Code} alt="Code" />
                </div>
            </div>
        </div>
    )
}

export default ComponentForm2;