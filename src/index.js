import "./index.css";
import ReactDOM from "react-dom/client";

// I'll replace createBrowswerRouter with BrowserRouter in this lab.
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import routes from "./routes";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
