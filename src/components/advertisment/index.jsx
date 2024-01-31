import React from "react";
import AdCards from "./ad-cards";
import { FaChevronRight } from "react-icons/fa6";

function Advertisment({ heading, details }) {
    return (
        <div className="w-full min-h-fit flex flex-col items-center mt-10  ">
            <div className="flex w-4/5 justify-start h-8 ">
                <h2 className="flex w-1/10  h-8 justify-start text-[#333333] ml-2 text-lg font-bold mb-4">{heading}</h2>
                <FaChevronRight className="ml-2 mt-2" />

            </div>

            <div className="w-full h-auto flex justify-center">
             {<AdCards details={details} />}
            </div>

        </div>
    );
}

export default Advertisment;


