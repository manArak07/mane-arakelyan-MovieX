import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";

function Comments({ post, id }) {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    const { userId } = useParams()

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");
                if (response.ok) {
                    const data = await response.json();
                    setComments(data);
                } else {
                    console.log('Something went wrong');
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };

        getComments();
    }, [])

    const filteredComs = comments.filter(comment => comment.postId === parseInt(id, 10));

    return (

        <div className="w-full h-96 ">
            {loading ? (
                <div className="flex justify-center text-2xl text-darkBlue items-center">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="h-[150px]">
                    <div className="h-[420px] w-full">
                        {filteredComs.map(comment => (
                            <div className="w-72 h-auto ml-5 bg-peachYellow  text-darkBlue text-center">
                                <h1 className="text-sm mt-2 flex justify-center">{comment.name}</h1>
                                <h1 className="flex text-sm justify-center mt-1">From:{comment.email}</h1>

                            </div>
                        ))}
                        <Outlet />
                    </div>
                </div>

            )}

        </div>
    )

}
export default Comments
