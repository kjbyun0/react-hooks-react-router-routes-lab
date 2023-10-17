import { movies } from "../data";

function Movie({ title, time, genres }) {
  // const dispMovies = movies.map((movie, i) => (
  //   <div key={i}>
  //     <h3>Name: {movie.title}</h3>
  //     <p>Time: {movie.time}</p>
  //     <p>Genres:</p>
  //     <ul>
  //       {
  //         movie.genres.map((genre, i) => (<li key={i}>{genre}</li>))
  //       }
  //     </ul>
  //   </div>
  // ));

  const dispGenres = genres.map((genre, i) => (
    <span key={i}>{genre}</span>
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Movies Page</h1>
      </header>
      <main>
        {/* Movie info here! */}
        {/* {dispMovies} */}
        <h1>{title}</h1>
        <p>{time}</p>
        {dispGenres}
      </main>
    </>
  );
};

export default Movie;