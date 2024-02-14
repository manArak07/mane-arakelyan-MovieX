// react-router
import { Link } from "react-router-dom";
import socialMedia from "../../../providers/social-media";

function SocialMedia() {
    return (
        <div className="flex justify-between text-grey sm:w-2/5 ">
                {/* social media links */}
                <ul className="flex sm:justify-between sm:w-full">
                    {socialMedia.map(( {path, Component, id}) => (
                        <li key={id}>
                            <Link  target="_blank" to={path}>
                                <Component className="w-12 ml-5 h-12 sm:ml-0"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default SocialMedia