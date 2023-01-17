import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

import {useAppContext} from "../context/AppContext";

export default function Home(){
    const {authHandler} = useAppContext();
    const {user, userLoading, isAuthenticated} = authHandler;

    return (
        <>
            <h1>[Home page]</h1>

            {!userLoading && isAuthenticated() && <h2>{user.email}</h2>}
            {!userLoading && !isAuthenticated() && <h2>{user.message}</h2>}
            {userLoading && <h2>Loading...</h2>}

            <nav>
                <li><Link to="/">Home page</Link></li>

                <li><Link to="/profile">Profile</Link></li>

                <li><Link to="/login">Sign in</Link></li>
                <li><Link to="/register">Sign up</Link></li>
                <li><Link to="/logout">Log Out</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                <li><Link to="/order">Order</Link></li>
            </nav>
        </>
    );
}