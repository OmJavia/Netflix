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
import './Navbar.css'; 
import { useNavigate, useLocation } from 'react-router-dom';


const API_KEY = '318203f';
const BASE_URL = 'https://www.omdbapi.com';

function NavScrollExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  // Toggle search visibility
  const toggleSearch = () => setSearchVisible(!searchVisible);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission (page refresh)
    if (searchTerm.trim()) {
      navigate(`/Search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleClick = () => {
    // Toggle the search bar visibility
    setSearchVisible(!searchVisible);
  };

  const handleClose = () => setShow(false);
  

  return (
    <Navbar expand="lg" className="bg-transparent" style={{ zIndex: 100 }}>
      <Container fluid>
        <Navbar.Brand href="/Home" style={{ color: '#FF0000', fontWeight: "bolder", marginRight: 20, fontSize:"24px"}}>NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/Movies" className={`heading ${location.pathname === '/Movies' ? 'active' : ''}`}>Movies</Nav.Link>
            <Nav.Link href="/Series" className={`heading ${location.pathname === '/Series' ? 'active' : ''}`}>Series</Nav.Link>
            <Nav.Link href="/Favourite" className={`heading ${location.pathname === '/Favourite' ? 'active' : ''}`}>My Favourites</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
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
