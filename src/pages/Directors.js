import { directors } from "../data";

function Directors() {
  const dispDirectors = directors.map((director, i) => (
    <div key={i}>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
      <ul>
        {
          director.movies.map((movie, i) => (<li key={i}>{movie}</li>))
        }
      </ul>
    </div>
  ));
  
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Directors Page</h1>
      </header>
      <main>
        {/* Director info here! */}
        {dispDirectors}
      </main>
    </>
  );
};

export default Directors;