// social media component
import SocialMedia from "../../common/social-media"

function Footer() {
    return (
        <footer className="bg-yellow w-full h-24 flex mt-16 items-center justify-between font-geologica sm:flex-col sm:items-center">
            <SocialMedia />
            {/* footer logo */}
            <div className="mr-5 sm:mr-0">
                <h1 className="text-white text-[38px] sm:h-auto sm:text-[24px]">Movie <span className="text-grey text-[40px] sm:text-[28px]">X</span></h1>
            </div>
        </footer>
    )
}

export default Footer