import './Login.css';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Login() {

  return (
    <>
    <Navbar expand="lg" className="bg-transparent" style={{ zIndex: 100 }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#FF0000', fontWeight: "bolder"}}><h2>Netflix</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          </Nav>
          <Form className="d-flex">
            
            <Button variant="danger">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container className="but d-flex align-items-center  flex-column mt-5 ">
        <h1 className="text-white d-flex justify-content-center ">Login Page </h1>

      </Container>
    </>
  );
}

export default Login;
