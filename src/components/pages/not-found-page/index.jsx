import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="w-full h-96">
            <div>
                <h1 className=" w-full flex justify-center text-sage text-4xl">Oops... Page not found. Please try again</h1>
            </div>
            <div className="flex justify-center mt-8">
                <img className="flex justify-center" src="https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg" alt="" />
            </div>
            <div className="flex justify-center">
                <Link to="/">
                    <button className="w-28 h-16 bg-navy text-white rounded-2xl">Go back</button>
                </Link>
            </div>
        </div>
    )
}


export default NotFound