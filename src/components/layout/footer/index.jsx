import { Component } from "react";
import { Link } from "react-router-dom";
import socialMediaIcons from "../../../providers/icons";
import SocialMediaCards from "../../common/social-media-cards";


const links = [
    { path: "/terms-of-use", title: "Terms of use" },
    { path: "/privacy-policy", title: "Privacy Policy" },
    { path: "/contact-us", title: "Contact us" },
]

function Footer() {
    return (
        <footer className=" h-24 mt-[430px] flex flex-grow flex-col w-full bg-darkBlue">
            <div className="flex flex-grow justify-center">
                {socialMediaIcons.map((socialMediaIcons) => (
                    <SocialMediaCards key={`sm-i-${socialMediaIcons.id}`} {...socialMediaIcons} />
                ))}
            </div>
            <div className="flex justify-center mt-2">
                {links.map(({ path, title }) => (
                <Link to={path}>
                    <p className="text-lg text-atomicTangerine ml-5 font-serif">{title}</p>
                </Link>
                ))}
            </div>
        </footer>
    )
}


export default Footer