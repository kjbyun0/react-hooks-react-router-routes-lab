import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route exact='true' path='/' element={<Home />} />
                <Route path='/movies' element={<Movie />} />
                <Route path='/directors' element={<Directors />} />
                <Route path='/actors' element={<Actors />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;