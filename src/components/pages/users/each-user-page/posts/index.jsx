import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "./each-user-comments";
import { IoIosCloseCircle } from "react-icons/io";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const { userId } = useParams();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.log('Something went wrong');
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        getPosts();
    }, []);

    const filteredPosts = posts.filter((post) => post.userId === parseInt(userId, 10));

    return (
        <div className="min-h-screen w-full">
            {loading ? (
                <div className="h-mainUserPageHeight w-full flex items-center justify-center text-darkBlue text-6xl ">
                    <p>Loading... please wait</p>
                </div>
            ) : (
                <div className="flex flex-wrap flex-grow justify-center mt-8">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="bg-[#c15254] w-[350px] relative h-56 ml-5 mt-8">
                            <div className="text-peachYellow text-xl font-serif flex justify-center text-center">{post.title}</div>
                            <div className="text-sage ml-2 font-serif mt-2">{post.body}</div>
                            <div className="flex justify-center ">
                                <button onClick={() => handlePostClick(post)} className="w-28 h-10 absolute bottom-1 rounded-lg bg-darkBlue text-white flex justify-center items-center font-serif">Comments</button>
                            </div>
                            {selectedPost && selectedPost.id === post.id && (
                                <div className=" w-full h-[420px] bg-[#c18f8f] absolute z-50 mt-28">
                                    <div className="cursor-pointer h-10 w-10 rounded-full">
                                        <IoIosCloseCircle className="text-darkBlue h-10 w-10" onClick={() => setSelectedPost(null) }/>
                                    </div>
                                    <Comments post={selectedPost} id={post.id} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Posts;
