import { Link } from "react-router-dom"
// go to hom page component
function HomeButton() {
    return (
        <div className="w-56 h-16 mt-5 border-2 border-black">
            <Link className="w-full h-full flex justify-center items-center" to="/">
                <button className="w-[95%] h-[85%] bg-yellow text-[18px] text-black hover:bg-grey hover:text-white transition-[1s]">Go to home page</button>
            </Link>
        </div>
    )
}

export default HomeButton