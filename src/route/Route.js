import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cards from '../components/Card';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Favourites from '../pages/Favourite';
import Login from '../pages/Login';

function AppRoute() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Favourite" element={<Favourites />} />
            <Route path="/card" element={<Cards />} />
        </Routes>
    </Router>
  );
}

export default AppRoute;
