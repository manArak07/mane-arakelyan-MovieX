import { Link } from "react-router-dom";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import useFetch from "../../../providers/custom-hooks/fetch-hook";
import WatchList from "./watchlist";
// redux context
import { ThemeContext } from "../../../providers/context";
// error page
import ErrorPage from "../../pages/error";
// react icons 
import { CgDarkMode } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";



function Header() {
    // setting search value for search input
    const [searchValue, setSearchValue] = useState('');
    const [result, setResult] = useState(null);
    // getting needed info from API
    const { data: searchMovies, loading: searchMoviesLoading, error: searchError } = useFetch(`/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`);

    // context for theme
    const { handleTheme } = useContext(ThemeContext);

    // handling how input changes
    const handleInputChange = useCallback((event) => {
        setSearchValue(event.target.value);
    });

    // setting result
    useEffect(() => {
        setResult(searchMovies);
    }, [searchMovies]);

    useEffect(() => {
        return () => {
            setResult(null);
        };
    }, []);

    // clearing input when there is no result
    const clearInput = useCallback(() => {
        setSearchValue('');
        setResult(null);
    });

    if (searchError) {
        return <ErrorPage />
    }

    return (
        <header style={{ background: 'linear-gradient(to right, #3b3b3b, #888888)' }} className="w-full h-[80px] fixed z-50 top-0 font-geologica sm:h-[100px]">
            <div className="w-full h-[80px] ">
                <div className="w-full h-[80px] flex items-center justify-between text-white sm:flex-col sm:items-center sm:h-[60px]">
                    {/* header logo */}
                    <div>
                        <Link to="/" className="no-underline text-white">
                            <h1 className="ml-[80px] text-[38px] md:text-[34px] sm:ml-0">Movie <span className="text-[yellow] text-[40px] md:text-[36px]">X</span></h1>
                        </Link>
                    </div>

                    <div className="flex">
                        {/* watchlist icon*/}
                        <WatchList />

                        {/* dark/light mode icon */}
                        <div className="flex items-center mr-4">
                            <CgDarkMode onClick={handleTheme} className="text-yellow w-10 h-10 mt-1 cursor-pointer md:h-8 md:w-8 sm:h-6 sm:w-6" />
                        </div>
                        {/*search  input */}
                        <form>
                            <div className="flex  h-[30px] relative sm:mt-0">
                                <input onChange={handleInputChange} style={{ background: 'linear-gradient(to right, #828282, #888888)' }} className="font-geologica text-yellow mr-[10px] flex justify-end w-[250px] h-[50px] border-2 border-yellow rounded-[30px] p-[15px] text-[17px] sm:h-[30px] xs:w-[200px] placeholder:text-white" 
                                type="text" id="headerSearch" name="headerSearch" placeholder="Search Movie" value={searchValue} />
                                {/* settinglink to see info about searched movie */}
                                <Link to={`/suggested-movies/${searchValue}`} onClick={clearInput}>
                                    <button className="absolute right-[8%] cursor-pointer flex text-white h-[15px] border-none mt-[15px] sm:bottom-2">
                                        <FaSearch />
                                    </button>
                                </Link>
                            </div>
                            {result === null ? null : (
                                searchMoviesLoading ? (<div className="bg-white rounded-t-[20px] mt-5 flex flex-col w-[250px] absolute z-50">
                                    <img src="/images/loading/loading.gif" alt="Loading" className="w-56" />
                                </div>) : (
                                    <div className="bg-white rounded-t-[20px] mt-5 flex flex-col w-[250px] absolute z-50 xs:right-4">{result.results.slice(0, 6).map((searched) => (
                                        <Link className="flex justify-between items-center h-auto w-full rounded-t-[20px] border-b border-black" key={searched.id} to={`/about-movie/${searched.id}`} onClick={clearInput}>
                                            <div className="text-grey mt-2 ml-3 border-grey">{searched.title}</div>
                                            <div className="text-[#bf6e6e] mr-2">{searched.release_date.split("-")[0]}</div>

                                        </Link>
                                    ))}
                                    </div>))}
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
