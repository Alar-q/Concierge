import React, {useEffect, useState} from 'react';

import Main from "./test/websocket/Main";
import BooksMain from "./test/Router/BooksMain";

export default function App(){
	// return <BooksMain />;
	return <Main />;
	/*const {loading: userLoading, data: user, error: userError} = useFetch('/auth');

	return (
		<Router>
			<h1>[Application]</h1>
			{user?.email && <h2>{user.email}</h2>}
			{userLoading && <h2>Loading...</h2>}
			{userError && <h2>{userError.message}</h2>}

			<nav>
				<li><Link to="/">Home page</Link></li>
				<li><Link to="/login">Sign in</Link></li>
				<li><Link to="/register">Sign up</Link></li>
				<li><Link to="/logout">Log Out</Link></li>
				<li><Link to="/chat">Chat</Link></li>
				<li><Link to="/order">Order</Link></li>
				<li><Link to="/post/create">Create Post</Link></li>
			</nav>

			<Routes>
				<Route path="/" element={<h1>[Home page]</h1>} />

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/logout" element={<Logout />} />

				<Route path='/post'>
					<Route path='create' element={<h1>Hellol</h1>} />
				</Route>
			</Routes>

		</Router>
	);*/
}
