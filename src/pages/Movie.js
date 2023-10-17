
function Movie({ title, time, genres }) {
  const dispGenres = genres.map((genre, i) => (
    <span key={i}>{genre}</span>
  ));

  // console.log("In Movie");

  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Movies Page</h1>
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{title}</h1>
        <p>{time}</p>
        {dispGenres}
      </main>
    </>
  );
};

export default Movie;