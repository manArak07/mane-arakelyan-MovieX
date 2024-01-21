import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Albums() {
    const { userId } = useParams();

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAlbums = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");
                if (response.ok) {
                    const data = await response.json();
                    setAlbums(data);
                } else {
                    console.log('Something went wrong');
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };

        getAlbums();
    }, []);

    const filteredAlbums = albums.filter(album => album.userId === parseInt(userId, 10));

    return (
        <div className="min-h-screen w-full">
            <h1 className="text-atomicTangerine text-5xl mt-8 font-serif flex justify-center">Albums</h1>
            {loading ? (
                <div className="w-full h-mainBigHeight text-6xl flex justify-center items-center text-darkBlue">
                    <p>Loading...Please wait</p>

                </div>
            ) : (
                <div className=" flex flex-wrap justify-around w-full just">
                    {filteredAlbums.map(album => (
                        <div className="w-[450px] mt-8 h-36 relative bg-peachYellow hover:scale-110 transition-[1s] ">
                            <div className="bg-beaver ml-4 mt-4 text-white h-6 w-6 rounded-full flex justify-center items-center font-serif">
                                <p>{album.id}</p>
                            </div>
                            <div className="text-center text-md font-serif text-darkBlue ">
                                {album.title}
                            </div>
                            <div className="flex justify-center mt-3">
                                <Link to={`/albums/photos/${album.id}`}>
                                    <button className="bg-brightBlue absolute bottom-1 text-white font-serif w-28 h-10 rounded-lg">Photos</button>
                                </Link>
                            </div>  
                        </div>
                    ))}
                </div>

            )
            }

        </div>
    );
}

export default Albums;
