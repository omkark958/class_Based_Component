import React from "react";
import {createRoot} from 'react-dom/client';
import Nav from "./Nav";
import Menu from './Menu';
import Subscribe from "./Subscribe";
import WatchMovies from "./WatchMovies";
import Tv from "./Tv";
import Download from "./Download";
import Search from "./Search";
import Logout from "./Logout";
import Questions from "./Questions";
import Footer from "./Footer";

createRoot(document.getElementById('nav')).render(<Nav/>);
createRoot(document.getElementById('menu')).render(<Menu/>);
createRoot(document.getElementById('sub')).render(<Subscribe/>)
createRoot(document.getElementById('movies')).render(<WatchMovies/>)
createRoot(document.getElementById('tv')).render(<Tv/>);
createRoot(document.getElementById('download')).render(<Download/>)
createRoot(document.getElementById('search')).render(<Search/>)
createRoot(document.getElementById('logout')).render(<Logout/>)
createRoot(document.getElementById('que')).render(<Questions/>)
createRoot(document.getElementById('footer')).render(<Footer/>)