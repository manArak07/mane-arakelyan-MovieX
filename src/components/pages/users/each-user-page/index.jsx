import { useParams } from "react-router"
import { useState } from "react";
import { useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
function UserInfo() {
    const [userInfo, setUserInfo] = useState(null)

    const { userId } = useParams()

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                if (response.ok) {
                    const data = await response.json()
                    setUserInfo(data)
                } else {
                    console.log('Something went wrong');
                }
            } catch (error) {
                console.log(error);
            }
        }

        getUserInfo()
    }, [])


    return (
        <div className="w-full flex md justify-center items-center min-h-screen">
            {userInfo ? (
                <div className="w-full mt-8 h-[90%] flex justify-center items-center">
                    <div className="bg-[#F6CA83] w-[70%] h-[90%] flex items-center justify-center rounded-xl">
                        <div className="w-2/10 ml-16 flex items-center flex-col">
                            <FaCircleUser className="w-[200px] h-[200px] text-[#1D201F]" />
                            <h1 className=" mt-2 font-serif text-3xl ">{userInfo.name}</h1>
                        </div>
                        <div className="text-[#292C2B] w-4/5 flex items-center flex-col mt-4 text-2xl font-serif">
                            <h1 className="mt-5">Email: {userInfo.email}</h1>
                            <h1 className="mt-5">Street: {userInfo.address.street}</h1>
                            <h1 className="mt-5">City: {userInfo.address.city}</h1>
                            <h1 className="mt-5">Zipcode: {userInfo.address.zipcode}</h1>
                            <h1 className="mt-5">Phone: {userInfo.phone}</h1>
                            <h1 className="mt-5">Website: {userInfo.website}</h1>
                            <h1 className="mt-5">Company: {userInfo.company.name}</h1>
                            <div>
                                <Link to={`/albums/${userId}`}>
                                    <button className="w-28 h-10 ml-5 rounded-sm mt-3 text-white bg-darkBlue">Albums</button>
                                </Link>
                                <Link to={`/posts/${userId}`}>
                                    <button className="w-28 h-10 ml-5 rounded-sm mt-3 text-white bg-darkBlue">Posts</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <h1 className="text-5xl text-navy">Loading...Please wait</h1>
                </div>
            )}
        </div>
    )
}

export default UserInfo