import { actors } from "../data";

function Actors() {
  const dispActors = actors.map((actor, i) => (
    <div key={i}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>
        {
          actor.movies.map((movie, i) => (<li key={i}>{movie}</li>))
        }
      </ul>
    </div>
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {dispActors}
      </main>
    </>
  );
};

export default Actors;
