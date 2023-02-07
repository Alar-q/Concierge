import React, {useEffect, useState} from 'react';

import {Link, Routes, Route} from "react-router-dom";

import Auth from './pages/auth/Auth'
import Logout from "./pages/auth/Logout";

import ChatApp from "./pages/chat/ChatApp";
import Order from './pages/order/Order'
import Profile from './pages/profile/Profile'
import Partners from './pages/partners/Partners'
import Archive from "./pages/chat/Archive";
import Details from "./pages/details/Details";
import Admin from "./pages/new/Admin";
import FlightTracker from "./pages/new/FlightTracker";
import AdminOrders from "./pages/new/AdminOrders";
import AdminPartners from "./pages/new/AdminPartners";

import {AppContextProvider} from "./context/AppContext";

import './assets/css/style.css'
import './assets/css/adaptive.css'
import Main from "./pages/main/Main";
import Landing from "./pages/landing/Landing";

export default function Router(){
	// return (<TestSocket />)
	return (
		<AppContextProvider>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/admin/flightracker" element={<FlightTracker />} />
				<Route path="/admin/orders" element={<AdminOrders />} />
				<Route path="/admin/partners" element={<AdminPartners />} />

				<Route path='/authenticate' element={<Auth />} />
				<Route path="/logout" element={<Logout />} />

				<Route path={'/chat'}>
					<Route index element={<ChatApp />}/>
					<Route path=':id' element={<ChatApp />} />
				</Route>

				<Route path={'/archive'} element={<Archive/>}/>

				<Route path='/order' element={<Order />} />
				<Route path='/details' element={<Details />} />

				<Route path='/main' element={<Main />} />
				<Route path='/profile' element={<Profile />} />

				<Route path='/partners' element={<Partners />} />
			</Routes>
		</AppContextProvider>
	);
}

/*
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*/