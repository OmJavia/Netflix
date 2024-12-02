import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';



function Cardmodal() {
    const [show, setShow] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [moviename,setMoviename]=useState('Over The Hedge');
    const BASE_URL = 'https://api.github.com/users/';
    const username = 'adarsh24688'; 




    return (
        <>
            <Container>
                <h1 className='text-white'>Movies Released in 2024</h1>
              <Row>
              <Col>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Over The Hedge</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col className='mt-auto mb-auto ps-4'>
                                    <img src={imageSrc} style={{ height: "250px" }} />
                                </Col>
                                <Col>
                                    <h5>Plot:</h5>
                                    <hr />
                                    <p>In a deserted picnic area, unable to find food for himself, a raccoon named RJ tries stealing a stockpile from a hibernating bear named Vincent. The plan backfires when Vincent is woken up by the commotion and the food is destroyed in the ensuing confrontation..</p>
                                </Col>
                            </Row>
                            <h5>Rating:7/10</h5><hr />
                            <h5>Screen Time: 3 Hours</h5>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
              </Row>
            </Container>
            <br />

            {/* CARDS */}
            <Container>
                <Row>
                    <Col>
                        <Card onClick={handleShow} className="bg-dark text-white  text-center">
                            <Card.Img style={{height: "340px"}} src='https://m.media-amazon.com/images/S/pv-target-images/722c942f2987853acfdb7da2b7030fcc07f4c8145709096c33f8f1f3177d9f69.jpg' alt='cardimage' />
                            {/* <Card.ImgOverlay> */}
                                <Card.Title>{moviename}</Card.Title>
                            {/* </Card.ImgOverlay> */}
                        </Card></Col>

                    <Col>
                        <Card className="bg-dark text-white text-center">
                            <Card.Img style={{height: "340px"}} src='https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg' alt='cardimage' />
                            <Card.Title>The Dark Knight</Card.Title>
                        </Card></Col>

                    <Col>
                        <Card className="bg-dark text-white text-center">
                            <Card.Img style={{height: "340px"}} src='https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_FMjpg_UX1000_.jpg' alt='cardimage' />
                            <Card.Title>Monster Inc.</Card.Title>
                        </Card></Col>

                    <Col>
                        <Card className="bg-dark text-white text-center">
                            <Card.Img style={{height: "340px"}} src='https://image.api.playstation.com/vulcan/img/rnd/202010/2716/M2WqznjK7MWhViJNteq0TE3I.png' alt='cardimage' />
                            <Card.Title>Iron Man</Card.Title>
                        </Card></Col>
                </Row>
            </Container>
        </>
    );
}

export default Cardmodal;