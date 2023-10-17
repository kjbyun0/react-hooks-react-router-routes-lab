import React from 'react';
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom';

function App() {
    console.log("In App");

    return (
        <React.Fragment>
            <NavBar />
            <Outlet />
        </React.Fragment>
    );
}

export default App;