import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom/dist";
//react-redux
import { Provider } from "react-redux";
import store from "./providers/redux";
//Components
import Home from "./components/pages/home";
import AboutMovie from "./components/pages/about-movie";
import SuggestedMovies from "./components/pages/suggested-movies";
import NotFound from "./components/pages/not-found";
import WatchNow from "./components/pages/watch-now";
// routes for  every page with their path component, and boolean value if they need to be with layout or no
const routes = [
    { path: "/", Component: Home, withLayout: true },
    { path: "/about-movie/:movieId", Component: AboutMovie, withLayout: true },
    { path: "/suggested-movies/:movieName", Component: SuggestedMovies, withLayout: true },
    { path: "/watch-now", Component: WatchNow, withLayout: true },
    { path: "*", Component: NotFound, withLayout: false },
]


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
            <BrowserRouter>
                <App routes={routes}/>
            </BrowserRouter>
    </Provider>

);
