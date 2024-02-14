import { useParams } from "react-router"
import useFetch from "../../../providers/custom-hooks/fetch-hook"
// movie list component
import BannerWithMovieList from "../../common/movies-banner";
// home button component
import HomeButton from "../../common/home-button";
// error pshe component
import ErrorPage from "../error";
// react icons
import { FaInfoCircle } from "react-icons/fa";


function SuggestedMovies() {
    // getting needed movie name
    const { movieName } = useParams()
    // getting info about searched movies 
    const { data: searchedMovie, loading: searchedLoading, error: searchedError } = useFetch(`/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`)

    // rendering error page when there are errors
    if (searchedError) {
        return <ErrorPage />
    }

    return (
        <div>
            {/* no results] found when there are no results  */}
            {searchedLoading ? (<div className="w-full min-h-screen flex justify-center items-center text-[36px]">
                <img className="w-56" src="/images/loading/loading.gif" alt="Loading" />
            </div>) : searchedMovie.results.length === 0 ? (
                <div className="w-full min-h-screen flex flex-col items-center justify-center text-yellow text-[40px]">
                    <div className="flex items-center ">
                        <FaInfoCircle className="text-yellow md:text-center" />
                        <h1 className="ml-2 md:text-center">No result found</h1>
                    </div>
                    <HomeButton />
                </div>) : (
                // banner with needed movie list
                <div className="lg:mt-24 sm:text-center">
                    <BannerWithMovieList quantity={16} loading={searchedLoading} movies={searchedMovie} title="Movies found by your search" />

                </div>
            )}
        </div>
    )
}

export default SuggestedMovies