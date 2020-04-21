import React from "react";
import MovieCard from "./movie-card";
import WithLoading from "./loading-hoc";

class MoviesContainer extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    );
  }
}

export default WithLoading(MoviesContainer);
