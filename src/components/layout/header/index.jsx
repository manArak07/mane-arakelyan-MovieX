import { Component } from "react";
import { Link } from "react-router-dom";

const links = [
    { path: "/users", title: "Users" },
    { path: "/contact-us", title: "Contact Us" },
    { path: "/terms-of-use", title: "Terms of use" },
]


function Header() {
    return (
        <header className="w-full h-2/4">
            <div className="w-full bg-brightBlue h-16 flex justify-around items-center">
                <div>
                    <Link to="/">
                        <img className="w-16" src="/images/Logo.webp" alt="Logo" />
                    </Link>
                </div>
                <div >
                    <nav className="w-96 flex ">
                        <ul className="flex">
                            {links.map(({ path, title }) => (
                                <li className="text-white ml-5 hover:text-atomicTangerine transition-[1s]" key={`from-header-[${path}]`}>
                                    <Link to={path} className="font-bold">
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )
}


export default Header