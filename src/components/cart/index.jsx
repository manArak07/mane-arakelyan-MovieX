import { useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";

function Cart() {

    const cartFromStore = useSelector(state => state.cart)
    return (
        <Link className="relative" to="#">
            <button className="w-20 rounded-3xl h-8 flex  justify-center items-center bg-[#0C72EA] text-white">Cart</button>
            {cartFromStore.length ? (<div className="w-6 h-6 bg-[#d99687] flex justify-center items-center font-bold text-[#8d402f]  absolute -top-1 rounded-full -right-1">
                {cartFromStore.length}
            </div>) : null
            }
            
        </Link>
    )
}

export default Cart