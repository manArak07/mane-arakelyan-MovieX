import HomeButton from "../../common/home-button"

// component to render when there are no results found 
function NotFound() {
    return (
        <div className="w-full flex items-center justify-center min-h-screen font-geologica lg:flex-col">
            <div className="w-1/2  flex justify-center rounded-full lg:w-[80%] xs:w-[95%]" >
                <div className="bg-black rounded-full w-96 h-96 flex justify-center items-center">
                    <h1 className="text-yellow text-[90px]">404</h1>

                </div>
            </div>
            <div className="w-1/2 lg:flex lg:flex-col lg:items-center">
                <h1 className="text-grey text-[60px] lg:text-center lg:text-[40px]">Page not found</h1>
                <h1 className="text-[#c47a7a] text-[20px] lg:text-center">Error occured... Please, try again!</h1>
                {/* rendering go to home button */}
                <HomeButton />
            </div>

        </div>
    )
}

export default NotFound