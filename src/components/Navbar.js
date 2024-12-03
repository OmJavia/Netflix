import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MdManageAccounts, MdHelpCenter } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import Login from '../pages/Login';
import './Navbar.css'; 


const API_KEY = '318203f';
const BASE_URL = 'https://www.omdbapi.com';

function NavScrollExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ setMovies] = useState([]); 
  const [searchVisible, setSearchVisible] = useState(false);
  const [show, setShow] = useState(false);

  // const toggleSearch = () => setSearchVisible(!searchVisible);

  const handleClick = async () => {
    // Toggle the search bar visibility
    setSearchVisible(!searchVisible);
    
    if (searchVisible) {
      // If search bar is visible, fetch movie data
      try {
        let apiData = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
        const movies = apiData.data.Search;
        if (movies) {
          setMovies(movies);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
  };

  const handleClose = () => setShow(false);
  

  return (
    <Navbar expand="lg" className="bg-black" style={{ zIndex: 100 }}>
      <Container fluid>
        <Navbar.Brand href="Home" style={{ color: '#FF0000', fontWeight: "bolder"}}>NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="Movies" className='heading'>Movies</Nav.Link>
            <Nav.Link href="Series" className='heading'>Series</Nav.Link>
            <Nav.Link href="Favourite" className='heading'>My Favourites</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {searchVisible && (
              <Form.Control
                type="search"
                placeholder="Enter Movie Name"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
            <Button variant="outline-light" style={{ marginRight: "10px" }} onClick={handleClick}>
              <FaSearch />
            </Button>
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" id="dropdown-user">
                <FaUserCircle size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><MdManageAccounts /> Manage Profiles</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><FaUser /> Account</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><MdHelpCenter /> Help Center</Dropdown.Item>
                <Dropdown.Item href="#/action-4"><IoSettings /> Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/"><FaSignOutAlt /> Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Login ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Login ID"
                autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                autoFocus/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Sign Up
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavScrollExample;
