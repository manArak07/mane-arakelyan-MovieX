import { useEffect, useState } from "react"
import { useParams } from "react-router"

function Photos() {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)

    const { albumId } = useParams()

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                if (response.ok) {
                    const data = await response.json();
                    setPhotos(data);
                } else {
                    console.log('Something went wrong');
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };

        getPhotos();
    }, [])
    const filteredPhotos = photos.filter(photo => photo.albumId === parseInt(albumId, 10));

    return (
        <div className="w-full min-h-screen">
            {loading ? (
                <div className="w-full h-mainUserPageHeight text-darkBlue text-5xl flex items-center justify-center">
                    <p>Loading... please wait</p>
                </div>
            ) : (
                <div className="w-full flex flex-wrap justify-center">
                    {filteredPhotos.map(photo => (
                        <div key={photo.id} className=" mt-5 ml-5 w-[170px] h-[180px] bg-[#111111]">
                            <div className="flex justify-center hover:scale-110 transition-[0.5s]">
                                <img className="w-[100px]" src={photo.thumbnailUrl} alt="Color" />
                            </div>
                            <div className="flex text-center text-white text-sm justify-center">
                                {photo.title}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Photos