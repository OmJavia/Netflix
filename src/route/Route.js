import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movie/Movies';
import Series from '../pages/Series/Series';
import Favourites from '../pages/Favourite/Favourite';
import Search from '../pages/Search/Search';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';

function AppRoute() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Favourite" element={<Favourites />} />
            <Route path="/Search" element={<Search />} />
        </Routes>
    </Router>
  );
}

export default AppRoute;
