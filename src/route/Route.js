import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cards from '../components/Card';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Favourites from '../pages/Favourite';

function AppRoute() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Favourite" element={<Favourites />} />
            <Route path="/card" element={<Cards />} />
        </Routes>
    </Router>
  );
}

export default AppRoute;
