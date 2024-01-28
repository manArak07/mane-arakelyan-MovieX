import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="w-full mt-5 flex items-center border-t-[1px]">
            <div className="w-full h-8 flex justify-around">
                <div className="w-[20%] flex justify-center">
                    <p>©2005-2024 List.am</p>
                </div>
                <div className="w-[40%] ">
                    <ul className="flex justify-evenly text-center items-center">
                        <li>
                            <Link className="w-auto ml-2" to="#">
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link className="w-auto ml-2" to="#">
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link className="w-auto ml-2" to="#">
                                Terms of service
                            </Link>
                        </li>
                    </ul>



                </div>
            </div>
        </footer>
    )
}

export default Footer