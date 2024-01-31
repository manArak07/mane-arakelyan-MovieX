import { Link } from "react-router-dom"
import Cart from "../../cart"

function Header() {
    return (
        <header className="w-full h-[55px] border-b-[1px] flex justify-around items-center">
            <div className="flex justify-around w-full">

                <div className="flex items-center w-3/4 justify-center">
                <form className="w-3/4 md:w-1/2">
                    <input type="search" id="search" name="search" className="bg-[#F0F0F0] p-3 rounded-3xl h-10 w-full"  placeholder="Search "/>
                </form>
                </div>
                

                <div className="flex w-1/2 ">
                    <div >
                        <Link to="#">
                            <div className="h-8 flex justify-center items-center w-24">My Account</div>
                        </Link>
                    </div>
                    <div className="flex w-20 ml-4 ">
                       <Cart />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header