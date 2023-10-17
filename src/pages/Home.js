import { movies } from "../data";
import MovieCard from '../components/MovieCard';

function Home() {
  const dispMoveies = movies.map((movie, i) => (
    <MovieCard key={i} title={movie.title} />
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Home Page</h1>
      </header>
      <main>
        {/* Info goes here! */}
        {dispMoveies}
      </main>
    </>
  );
};

export default Home;