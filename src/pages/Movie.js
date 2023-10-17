import { movies } from "../data";

function Movie() {
  const dispMovies = movies.map((movie, i) => (
    <div key={i}>
      <h3>Name: {movie.title}</h3>
      <p>Time:{movie.time}</p>
      <p>Genres:</p>
      <ul>
        {
          movie.genres.map((genre, i) => (<li key={i}>{genre}</li>))
        }
      </ul>
    </div>
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Movies Page</h1>
      </header>
      <main>
        {/* Movie info here! */}
        {dispMovies}
      </main>
    </>
  );
};

export default Movie;