import { FaHeart } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFireAlt } from "react-icons/fa";
import { PiChatCircleDots } from "react-icons/pi";
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AdCards = memo(({ details }) => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [favColor, setFavColor] = useState(details.map(() => 'black'))

    const toggleFav = (ad, index) => {
        const newColor = [...favColor]
        newColor[index] = newColor[index] === 'black' ? 'red' : 'black'

        setFavColor(newColor)

        if (newColor[index] === 'red') {
            const addToCart = (ad) => {
                dispatch({type: "ADD_AD_TO_CART", payload: ad})
            }

            addToCart(ad)
        } else if (newColor[index] === 'black') {
            const removeFromCart = (ad) => {
                cart.some((adItem) => adItem.id === ad.id) && (
                    dispatch({type: "REMOVE_AD_FROM_CART", payload: ad.id})
                )
            }

            removeFromCart(ad)
        }
    }
    
    return (
        <div className="grid gap-x-4 md:gap-x-8 lg:gap-x-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 max-w-screen-xl mx-auto">
            {details.map((detail, index) => (
                <Link to="#" key={index}>
                    <div className="w-[165px]  rounded-md mt-5 h-[260px]">
                        <div className="w-[164px] relative h-[160px] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${detail.cardImg})` }}>

                            <div>
                                <FaHeart style={{ color: `${favColor[index]} `  }} onClick={() => toggleFav(detail, index)} className="absolute text-border w-6 h-6 text-3xl right-[6px] top-1 "/>
                            </div>

                            <div>
                                {detail.hotOffer ? (<div className=" flex absolute w-24 h-8 bg-[#F14BE6] rounded-lg bottom-2 left-1 items-center text-white">
                                    <div>
                                        <FaFireAlt className="text-white ml-2" />
                                    </div>
                                    <div className="ml-1">Hot offer</div>
                                </div>) : null}
                            </div>


                            <div>
                                {detail.promotion ? (<div className=" flex absolute w-24 h-8 bg-[#F71426] rounded-lg bottom-2 left-1 items-center text-white">
                                    <div>
                                        <img src="/images/icons/promotion.png" alt="Promotion" />
                                    </div>
                                    <div className="ml-1">Promotion</div>
                                </div>) : null}
                            </div>


                            <div>
                                {detail.negot ? (<div className=" flex absolute w-auto h-8 bg-[#24B698] rounded-lg bottom-2 left-1 items-center text-white">
                                    <div>
                                        <PiChatCircleDots className="text-white ml-2" />

                                    </div>
                                    <div className="ml-1 w-auto text-sm">Open to negotiation</div>
                                </div>) : null}
                            </div>


                            <div>
                                {detail.call ? (<div className=" flex absolute w-24 h-8 bg-[#2BB842] rounded-lg bottom-2 left-1 items-center text-white">
                                    <div>
                                        <FiPhone className="text-white ml-2" />

                                    </div>
                                    <div className="ml-1 text-sm">Call now</div>
                                </div>) : null}
                            </div>


                            <div>
                                {detail.urgent ? (<div className=" flex absolute w-[65px] h-8 bg-[#E0473E] rounded-lg bottom-2 left-1 items-center text-white">
                                    <div className="ml-1">Urgent!</div>
                                </div>) : null}
                            </div>


                        </div>
                        <h1 className="font-bold text-[#222222] text-md">{detail.title}</h1>
                        <h1 className="text-[#222222] w-auto h-auto text-sm">{detail.about}</h1>
                        <h1 className="text-[#666666] text-sm">{detail.desc}</h1>

                    </div>
                </Link>

            ))}
        </div>

    )
})

export default AdCards