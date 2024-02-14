import React, { useContext } from "react";
import MovieList from "../movie-list";
// redux context
import { ThemeContext } from "../../../providers/context";

// component to show movie lists with thei headings
const BannerWithMovieList = ({ title, loading, movies, quantity }) => {
  const {mode} = useContext(ThemeContext)
  return (
    <div>
      <h1 className={`${mode ? "text-white" : "text-grey"} mt-[80px] flex justify-center font-geologica text-grey text-[24px]`}>
        {title}
      </h1>
      <div className="flex justify-center ">
        <div>
          {loading ? (
            <div className=" flex justify-center items-center">
              <img className="w-56" src="/images/loading/loading.gif" alt="Loading" />
            </div>
          ) : (
            movies.results.length === 0 || movies.results === null ? (
            <div className="text-grey ">No results found</div>) : (
              <MovieList movies={movies.results} quantity={quantity}/>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerWithMovieList;
