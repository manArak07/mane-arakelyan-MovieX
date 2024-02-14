import React, { memo } from "react";
import MovieCard from "../movie-cards";

// component to show few movie cards
const MovieList = ({movies, quantity}) => {
  return (
    <div className="grid grid-cols-4 gap-16  mt-[50px] xl:gap-4 md:gap-0 sm:gap-8 sm:grid-cols-2 xs:gap-3">
      {movies.slice(0, quantity).map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default memo(MovieList);
