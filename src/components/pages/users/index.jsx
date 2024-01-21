import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaUserLarge } from "react-icons/fa6";

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (response.ok) {
                    const data = await response.json()
                    setUsers(data)
                } else {
                    console.log('Something went wrong');
                }
            } catch (error) {
                console.log(error);
            }
        }

        getUsers()
    }, [])
    return (
        <div className=" w-full flex items-center justify-center flex-wrap min-h-screen">
            {users.length ? (users.map(user => (
                <div key={user.id} className="w-72 h-72 bg-peachYellow m-3 flex items-center flex-col rounded-full hover:shadow-2xl shadow-darkBlue">
                    <FaUserLarge className="mt-5 w-20 h-24 text-brightBlue"/>
                    <h3 className="text-darkBlue mt-2">{user.name}</h3>
                    <h5 className="text-darkBlue mt-2 text-sm">{user.email}</h5>
                    <Link to={`/users/${user.id}`}>
                        <button className="bg-white mt-4 rounded-full h-12 w-40  font-serif text-lg">More</button>
                    </Link>
                </div>
            ))) : (
            <div className="h-mainBigHeight w-full flex justify-center items-center">
                <h1 className="text-darkBlue text-5xl">Loading ...</h1>
            </div>)}
        </div>
    )
}



export default Users