import { useParams } from "react-router"
// custom hook
import useFetch from "../../../providers/custom-hooks/fetch-hook";
// memo
import { memo } from "react";
// icon and info components
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import Trailers from "./trailers";

// redux
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_INDEX, getActor } from "../../../providers/redux/slices/actors-slice";
import BannerWithMovieList from "../../common/movies-banner";
// error page component
import ErrorPage from "../error";


const AboutMovie = memo(() => {
    const { movieId } = useParams()
    // getting moviedata
    const { data: neededMovieData, loading: neededMovieLoading, error: neededMovieError } = useFetch(`/3/movie/${movieId}?language=en-US`);
    // getting movie actors
    const { data: neededMovieActors, loading: neededMovieActorLoading, error: neededActorError } = useFetch(`/3/movie/${movieId}/credits?language=en-US`)
    // getting similar movies
    const { data: similarMovies, loading: similarMoviesLoading, error: similarError } = useFetch(`/3/movie/${movieId}/similar?language=en-US&page=1`)
    // setting index for actors showing
    const currentIndex = useSelector(getActor)
    const dispatch = useDispatch()
    // posterURL fot movie info
    const posterUrl = neededMovieData && neededMovieData.poster_path ? `https://image.tmdb.org/t/p/w500${neededMovieData.poster_path}` : "/images/not-found/not-found.png";

    // handling next indexes of every actor
    const handleNext = () => {
        dispatch({ type: UPDATE_INDEX, payload: currentIndex + 1 })
    }
    // handling previous indexes of every actor

    const handlePrevious = () => {
        dispatch({ type: UPDATE_INDEX, payload: currentIndex - 1 })
    }
    // rendering error pages when there are errors
    if (similarError || neededActorError || neededMovieError) {
        return <ErrorPage />
    }

    return (
        <div className="min-h-screen ">
            <div style={{ background: 'linear-gradient(to right, #3b3b3b, #888888)' }} className="w-full h-[750px] flex flex-col sm:h-[1200px] ">
                {neededMovieLoading ? (
                    <div className=" flex justify-center items-center mt-14">
                        <img className="w-56" src="/images/loading/loading.gif" alt="Loading" />
                    </div>
                ) : (
                    <div className="flex mt-[90px] w-full sm:flex-col sm:items-center sm:mt-[100px]">
                        {/* poster */}
                        <div className=" w-[270px] h-[360px] bg-cover bg-center rounded-[20px] flex justify-end ml-10 sm:ml-0" style={{backgroundImage: `url("${posterUrl}")` }}></div>
                        {/* info about movie */}
                        <div className="w-[70%]  h-[80%]  ml-5 sm:flex sm:flex-col sm:items-center sm:h-[50%] sm:ml-0">
                            {/* movie title */}
                            <div className="text-[32px] text-yellow sm:text-center">{neededMovieData.title}</div>
                            {/* film info about realeased year */}
                            <div className="flex items-center mt-5">
                                <LuClock3 className="text-yellow w-8 h-8" />
                                <h1 className="text-white ml-2">{neededMovieData.release_date}</h1>
                            </div>
                            {/* film info about vote average */}
                            <div className="flex items-center mt-5">
                                <FaStar className="text-yellow w-8 h-8" />
                                <h1 className="text-white ml-2">{neededMovieData.vote_average}</h1>
                            </div>
                            {/* fim info about movie runtime */}
                            <div className="flex items-center mt-5">
                                <BiSolidCameraMovie className="text-yellow w-8 h-8" />
                                <h1 className="text-white ml-2">{neededMovieData.runtime}min</h1>
                            </div>

                            {/* actors */}
                            <div className="flex mt-5 w-[75%] justify-between">
                                <button onClick={handlePrevious} disabled={currentIndex === 0}>
                                    <FaArrowCircleLeft className="text-yellow w-6 h-6" />
                                </button>
                                <div className="w-full flex justify-center">
                                    {neededMovieActorLoading ? (
                                        <div className=" flex justify-center items-center">
                                            <img className="w-56" src="/images/loading/loading.gif" alt="Loading" />
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-6 gap-4 xl:grid-cols-4 lg:grid-cols-3">
                                            {neededMovieActors === null ? null : (
                                                neededMovieActors.cast.slice(currentIndex, currentIndex + 6).map((actor, index) => (
                                                    <div key={index} className="bg-cover w-20 h-20 rounded-full md:w-14 md:h-14 sm:w-8 sm:h-8"
                                                        style={{
                                                            backgroundImage: actor.profile_path === null ? "url('/images/not-found/not-found.png')" : `url('https://image.tmdb.org/t/p/w500${actor.profile_path}')`,
                                                        }}
                                                    >
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </div>
                                <button onClick={handleNext} disabled={currentIndex + 6 >= (neededMovieActors?.cast?.length || 0)}>
                                    <FaArrowCircleRight className="text-yellow w-6 h-6" />
                                </button>
                            </div>


                        </div>
                    </div>
                )}
                {/* showing movie trailers */}
                <h1 className="text-[24px] mt-5 text-white flex justify-center w-full sm:mt-0">Trailers</h1>
                <Trailers />

            </div>

            {/* Similar films banner */}
            <div>
                <BannerWithMovieList quantity={4} title="Similar Movies" loading={similarMoviesLoading} movies={similarMovies} />

            </div>
        </div>
    )
})

export default AboutMovie