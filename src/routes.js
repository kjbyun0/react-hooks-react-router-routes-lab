import App from './components/App';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
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
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/directors',
        element: <Directors />,
      },
      {
        path: '/actors',
        element: <Actors />,
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
    ],
   }
];

export default routes;
