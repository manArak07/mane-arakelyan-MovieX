import { useParams } from "react-router";
import useFetch from "../../../../providers/custom-hooks/fetch-hook";
import { useState } from "react";
import { createPortal } from "react-dom";
import TrailerContent from "./trailer-content";
// error page 
import ErrorPage from "../../error";
// react icons 
import { FaPlay } from "react-icons/fa";

function Trailers() {
    const { movieId } = useParams();

    // getting access to trailers by id
    const { data: movieTrailer, loading: movieLoading, error: trailerError } = useFetch(`/3/movie/${movieId}/videos?language=en-US`);

    // showing trailer modal for trailers
    const [showModal, setShowModal] = useState([false]);
    const openModal = (index) => {
        setShowModal(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    // closing railer fot trailers
    const closeModal = (index) => {
        setShowModal(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    if (trailerError) {
        return <ErrorPage />
    }

    return (
        <div className="w-full flex justify-center">
            {movieLoading ? (
                <div>
                    <img className="w-56" src="/images/loading/loading.gif" alt="Loading" />
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-4 mt-10 xl:gap-2 sm:grid-cols-2 sm:mt-2 ">

                    {movieTrailer === null ? null : (
                        movieTrailer.results.slice(0, 4).map((trailer, index) => {
                            const videoId = trailer.key.split("/").pop();
                            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                            return (
                                <div className="relative w-[280px] bg-cover bg-center h-[161px] xl:w-[220px] xl:h-[140px] lg:w-[150px] md:w-[130px] md:h-[110px] sm:w-[140px]" key={index} style={{ backgroundImage: `url('${thumbnailUrl}')` }}>
                                    <div className="bg-black opacity-40 h-full w-full absolute top-0 left-0"></div>
                                    <button onClick={() => openModal(index)} className="absolute inset-0 flex items-center justify-center w-full h-full">
                                        <FaPlay className="text-white w-6 h-6 " />
                                    </button>
                                    {/* creating portl for trailers */}
                                    {showModal[index] && createPortal(
                                        <TrailerContent onClose={() => closeModal(index)} videoKey={trailer.key} />,
                                        document.body
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>

            )}
        </div>
    );
}

export default Trailers;
