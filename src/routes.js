import App from './components/App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import { movies } from './data';

const routes = [
   {
    element: <App />,
    errorElement: <p>Oops! Looks like something went wrong.</p>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movie/Doctor Strange',
        element: <Movie title='Doctor Strange' time='115' genres={["Action", "Adventure", "Fantasy"]} />,
      },
      {
        path: '/movie/Trolls',
        element: <Movie title='Trolls' time='92' genres={["Animation", "Adventure", "Comedy", "Family", "Fantasy"]} />,
      },
      {
        path: '/movie/Jack Reacher: Never Go Back',
        element: <Movie title='Jack Reacher: Never Go Back' time='118' genres={["Action", "Adventure", "Crime", "Mystery", "Thriller"]} />,
      },
      {
        path: '/directors',
        element: <Directors />,
      },
      {
        path: '/actors',
        element: <Actors />,
      },
    ]
   }
];

// const movieChildren = movies.map(movie => {
//   return {
//     path: `/movie/${movie.title}`,
//     element: <Movie title={movie.title} time={movie.title} genres={movie.genres} />,
//   };
// });
// routes.children = [...routes.children.slice(0, 1), ...movieChildren, ...routes.children.slice(1)];

export default routes;
