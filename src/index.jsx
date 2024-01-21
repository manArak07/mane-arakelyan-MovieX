import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//react router
import { BrowserRouter } from "react-router-dom"
//components
import Users from "./components/pages/users";
import NotFound from "./components/pages/not-found-page";
import TermsOfUse from "./components/pages/terms-os-use";
import PrivacyPolicy from "./components/pages/privacy-policy";
import ContactUs from "./components/pages/contact-us";
import Home from "./components/pages/home";
import UserInfo from "./components/pages/users/each-user-page";
import Albums from "./components/pages/users/each-user-page/albums";
import Posts from "./components/pages/users/each-user-page/posts";
import Photos from "./components/pages/users/each-user-page/albums/each-user-photos";

const routes = [
    {path: "/", Component: Home, withLayout: true},
    {path: "/users", Component: Users, withLayout: true},
    {path: "/users/:userId", Component: UserInfo, withLayout: true},
    {path: "/albums/:userId", Component: Albums, withLayout: true},
    {path: "/posts/:userId", Component: Posts, withLayout: true},
    {path: "/albums/photos/:albumId", Component: Photos, withLayout: true},
    {path: "/posts/comments/:postId", Component: Posts, withLayout: true},
    {path: "/terms-of-use", Component: TermsOfUse, withLayout: true},
    {path: "/privacy-policy", Component: PrivacyPolicy, withLayout: true},
    {path: "/contact-us", Component: ContactUs, withLayout: true},
    {path: "*", Component: NotFound, withLayout: false}

]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App routes={routes}/>
    </BrowserRouter>
);
