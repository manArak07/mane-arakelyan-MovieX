import { useState } from "react"

function ErrorPage() {
    const [display, setDisplay] = useState("block")

    // setting error copoennt display
    function handleError() {
        setDisplay("hidden")
    }

    return (
        <div className={`${display} bg-grey fixed top-0 left-0 w-full h-full opacity-80 flex flex-col justify-center items-center`}>
            <div className="text-yellow text-[60px] md:text-[40px]">Oops...</div>
            <div className="text-white text-[50px] text-center md:text-[30px]">Something went wrong, please try again or come back later</div>
            {/* button for closing error */}
            <div>
                <button onClick={handleError} className="text-grey bg-yellow w-16 h-8 rounded-[10px]">OK</button>
            </div>
        </div>
    )
}

export default ErrorPage