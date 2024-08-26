import React from 'react';
import SummaryReport from "../assets/SummaryReport.png";
import rightArrow from "../assets/rightArrow.png"; 

function ComponentForm3() {
    return (
        <div className="flex justify-center items-center w-[85%] mt-[-10rem] h-[40rem] pb-20">
            <div className="flex justify-between items-center w-full py-16">
                <div className="w-full lg:w-7/12 text-left">
                    <div className='mt-[-3rem] ml-5'>
                        <h2 className="text-[2rem] font-bold w-[75%]">
                            Identify top contenders
                        </h2>
                        <p className="py-4 w-[80%]">
                            Identify top contenders and invite them to
                            meet your team using data-driven decisions
                            that help level the playing field for developers
                            everywhere.
                        </p>
                    </div>

                    <div className="flex items-center w-6/12 ml-5">
                        <a href="" className="font-bold text-sm">
                            Learn more
                        </a> 
                        <img src={rightArrow} alt="rightArrow" className="ml-2" width={20}/>
                    </div>
                </div>

                <div>
                    <img className="w-[45rem] right-[-5rem]" src={SummaryReport} alt="SummaryReport" />
                </div>
            </div>
        </div>
    )
}

export default ComponentForm3;