import useFetch from "../../../providers/custom-hooks/fetch-hook"
// movie lists and error page with component
import BannerWithMovieList from "../../common/movies-banner"
import ErrorPage from "../error"

function WatchNow() {
    // info about upcoming movie
    const {data: upcomingMovies, loading: upcomingMoviesLoading, error: upcomingError} = useFetch("/3/movie/upcoming?language=en-US&page=1")
    // info about now playing movies
    const {data: nowPlayingMovies, loading: nowPlayingMoviesLoading, error: nowPlayingError} = useFetch("/3/movie/now_playing?language=en-US&page=1")
   
    if (upcomingError || nowPlayingError) {
        return <ErrorPage />
    }
    return (
        <div className="mt-24">
            <BannerWithMovieList quantity="4" loading={upcomingMoviesLoading} movies={upcomingMovies} title="Upcoming Films"/>
            <BannerWithMovieList quantity="4" loading={nowPlayingMoviesLoading} movies={nowPlayingMovies} title="Now playing Films"/>
        </div>
    )
}

export default WatchNow