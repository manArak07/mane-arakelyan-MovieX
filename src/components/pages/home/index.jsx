import { Link } from "react-router-dom"
import useFetch from "../../../providers/custom-hooks/fetch-hook"
import BannerWithMovieList from "../../common/movies-banner";
import ErrorPage from "../error";

function Home() {
    // getting info about popular movies
    const { data: popularData, loading: popularLoading, error: popularError } = useFetch("/3/movie/popular?language=en-US&page=1");
    // getting info about top rated movies
    const { data: ratedData, loading: ratedLoading, error: ratedError } = useFetch("/3/movie/top_rated?language=en-US&page=1");

    if (popularError || ratedError) {
        return <ErrorPage />
    }

    return (
        <div>
            {/* // home page introduction banner */}
            <div style={{ background: 'linear-gradient(to right, #3b3b3b, #888888)' }} className="w-full h-[570px] sm:h-[600px]">
                <div className="flex justify-center items-center flex-col">
                    <div className="grid grid-cols-12 gap-6 w-[90%] mt-[80px] h-[400px] sm:flex sm:flex-col sm:mt-[150px] xs:mt-[130px]">

                        <div className="col-span-6 h-[350px] bg-cover w-full bg-center relative rounded-[20px] sm:h-[500px]  " style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/34/966/HD-wallpaper-the-avengers-avengers-endgame-avengers-avengers-endgame.jpg')" }}>
                            <Link to="/watch-now" className="absolute right-2 bottom-3">
                                <button className="bg-yellow h-[50px] w-[130px] cursor-pointer text-black border-none rounded-[30px]">Watch now</button>
                            </Link>
                        </div>
                        <div className="col-span-3 h-[350px] bg-cover w-full bg-center rounded-[20px] sm:h-[500px] " style={{ backgroundImage: "url('https://cdn.marvel.com/content/1x/online_10.jpg')" }}></div>
                        <div className="col-span-3 h-[350px] bg-cover w-full bg-center rounded-[20px] sm:h-[500px] " style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/91Aoh6wnnJL.jpg')" }}></div>

                    </div>

                </div>
                <div className=" h-[80px] w-full relative">
                    <h1 className="text-yellow  absolute left-16 sm:text-[12px]">Watch everywhere</h1>
                    <h1 className=" text-white mt-8 absolute left-16 sm:text-[9px] sm:mt-3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h1>
                </div>
            </div>

            {/* Popular films banner */}
            <BannerWithMovieList quantity={4} title="Most Popular Films" loading={popularLoading} movies={popularData} />
            {/* Rated films banner */}
            <BannerWithMovieList quantity={4} title="Most Rated Films" loading={ratedLoading} movies={ratedData} />

        </div>


    )
}

export default Home