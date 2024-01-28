import { CiHeart } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaFireAlt } from "react-icons/fa";
import { PiChatCircleDots } from "react-icons/pi";
import { memo } from "react";
import { Link } from "react-router-dom";

const AdCards = memo(({ details }) => {
    return (
        <div className="grid gap-x-4 md:gap-x-8 lg:gap-x-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 max-w-screen-xl mx-auto">
            {details.map((detail, index) => (
                <Link to="#">
                <div className="w-[165px]  rounded-md mt-5 h-[260px]  " key={index}>
                    <div className="w-[164px] relative h-[160px] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${detail.cardImg})` }}>

                        <div >
                            <CiHeart className="absolute text-border text-3xl right-1 hover:text-red-500 " />
                        </div>


                        <div>
                            {detail.hotOffer ? (<div className=" flex absolute w-24 h-8 bg-[#F14BE6] rounded-lg bottom-2 left-1 items-center text-white">
                                <div>
                                    <FaFireAlt className="text-white ml-2" />
                                </div>
                                <div className="ml-1">Hot offer</div>
                            </div>) : (<div className="none"></div>)}
                        </div>


                        <div>
                            {detail.promotion ? (<div className=" flex absolute w-24 h-8 bg-[#F71426] rounded-lg bottom-2 left-1 items-center text-white">
                                <div>
                                    <img src="/images/icons/promotion.png" alt="Promotion" />
                                </div>
                                <div className="ml-1">Promotion</div>
                            </div>) : (<div className="none"></div>)}
                        </div>


                        <div>
                            {detail.negot ? (<div className=" flex absolute w-auto h-8 bg-[#24B698] rounded-lg bottom-2 left-1 items-center text-white">
                                <div>
                                    <PiChatCircleDots className="text-white ml-2" />

                                </div>
                                <div className="ml-1 w-auto text-sm">Open to negotiation</div>
                            </div>) : (<div className="none"></div>)}
                        </div>


                        <div>
                            {detail.call ? (<div className=" flex absolute w-24 h-8 bg-[#2BB842] rounded-lg bottom-2 left-1 items-center text-white">
                                <div>
                                    <FiPhone className="text-white ml-2" />

                                </div>
                                <div className="ml-1 text-sm">Call now</div>
                            </div>) : (<div className="none"></div>)}
                        </div>


                        <div>
                            {detail.urgent ? (<div className=" flex absolute w-[65px] h-8 bg-[#E0473E] rounded-lg bottom-2 left-1 items-center text-white">
                                <div className="ml-1">Urgent!</div>
                            </div>) : (<div className="none"></div>)}
                        </div>


                    </div>
                    <h1 className="font-bold text-[#222222]  text-md">{detail.title}</h1>
                    <h1 className="ext-[#222222] w-auto h-auto text-sm">{detail.about}</h1>
                    <h1 className="text-[#666666] text-sm">{detail.desc}</h1>

                </div>
                </Link>
                
            ))}
        </div>

    )
})

export default AdCards