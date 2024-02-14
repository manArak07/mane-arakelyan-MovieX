import React, { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import {  addToWatchlist, getItems, removeFromWatchList } from "../../../providers/redux/slices/watchlist-slice";
// redux context for theme
import { ThemeContext } from "../../../providers/context";
// react icons 
import { FiClock } from "react-icons/fi";
import { FaStar, FaBookmark } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  // getting items for function
  const watchList = useSelector(getItems);
  const dispatch = useDispatch();
  const watchListItems = watchList.items || [];
  const { mode } = useContext(ThemeContext)
  const movieInWatchlist = watchListItems.some(item => item.id === movie.id);
  const [favColor, setFavColor] = useState(movieInWatchlist ? "black" : "yellow");


  // toggle function for watchlist
  const toggleFav = (event) => {
    event.preventDefault()
    const newColor = favColor === 'yellow' ? 'black' : 'yellow';
    setFavColor(newColor);

    if (!movieInWatchlist) {
      dispatch(addToWatchlist(movie));
    } else {
      dispatch(removeFromWatchList(movie));
    }
  };

  return (
    <Link to={`/about-movie/${movie.id}`} className="rounded-[20px] font-geologica" >
      <div className={` ${mode ? "text-white" : "text-grey"} flex flex-col w-[250px] items-center relative h-[370px] border-2 border-yellow rounded-[20px]  xl:w-[210px] lg:w-[170px] lg:h-[350px] md:w-[150px] md:h-[330px] sm:w-[190px] xs:w-[140px]`}>
        {/* movie card poster */}
        <div style={{
          backgroundImage: movie.poster_path === null ? "url('https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png')" : `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`,
        }} className="w-[85%] h-[220px] mt-[20px] relative rounded-[20px] bg-cover md:h-[180px]">

          <FaBookmark className="absolute w-6 h-6 top-3 right-3" style={{ color: favColor }} onClick={(event) => toggleFav(event)} />

        </div>

        {/* movie card title */}
        <h1 className="flex w-[80%] justify-start mt-[10px] md:text-[11px] sm:text-[10px] ">{movie.original_title}</h1>

        <div className="flex w-[90%] justify-between absolute bottom-2">

          {/* movie card realease date */}
          <div className="flex items-center justify-between">
            <FiClock className="text-yellow" />
            <h1 className="md:text-[11px] sm:text-[10px]">{movie.release_date.split('-')[0]}</h1>
          </div>

            {/* movie card rating */}
          <div className="flex items-center  ">
            <FaStar className="text-yellow " />
            <h1 className="md:text-[11px] sm:text-[10px]">{Math.floor(movie.vote_average)}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(MovieCard);
