import React from 'react';
import './Fav.css';
import Navbars from '../components/Navbar'
import Container from 'react-bootstrap/esm/Container';

function Favourites() {
  return (
    <>
    <Navbars />
    <Container className='but d-flex align-items-center flex-column mt-5'>
        <h1 className='text-white d-flex justify-content-center'>My Favourites</h1>
    </Container>
    </>
  );
}

export default Favourites;
