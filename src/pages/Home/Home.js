import Navigation from "../../components/Navbar/Navbar";
import './Home.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import netflixClickSound from "../../assests/sound/click.mp3";
import image1 from "../../assests/images/fast 9.jpg"
import image2 from "../../assests/images/Dune.jpg"
import image3 from "../../assests/images/money.jpg"
import image4 from "../../assests/images/Army.jpg"
import image5 from "../../assests/images/queen.jpg"
import image6 from "../../assests/images/dunke.jpg"
import image7 from "../../assests/images/intes.jpg"
import image8 from "../../assests/images/king.jpg"
import image9 from "../../assests/images/Spiderman.webp"
import image10 from "../../assests/images/boss.jpg"
import image11 from "../../assests/images/crime.jpg"
import image12 from "../../assests/images/fly.jpg"
import image13 from "../../assests/images/found.jpg"
import image14 from "../../assests/images/lady.jpg"

const imagedata = [ {Poster: image7}, {Poster: image4}, {Poster: image2}, 
  {Poster: image14}, {Poster: image10}, {Poster: image6}, {Poster: image1},
  {Poster: image8}, {Poster: image9}, {Poster: image5}, {Poster: image11},
  {Poster: image12}, {Poster: image13}, {Poster: image3}];


function Home() {
  const [data, setData] = useState([]);
  const [poster, setPoster] = useState([]);
  const [year, setYear] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);

  const API_KEY = "318203f";
  const BASE_URL = "https://www.omdbapi.com";

  const handleClose = () => setShow(false);

  const handleShow = async (movieTitle) => {
    const audio = new Audio("/sounds/netflixClick.mp3"); // Ensure the sound file exists
    audio.play();
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&t=${movieTitle}`);
    setSelectedMovie(response.data);
    setShow(true);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    let apiData = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=series`);
    const movies = apiData.data.Search || [];
    setData(movies.map((movie) => movie.Title));
    setPoster(movies.map((movie) => movie.Poster));
    setYear(movies.map((movie) => movie.Year));
  }

  return (
    <>
      <Navigation />

      <Container fluid className="p-0">
        {/* Movie Carousel */}
        <Carousel fade interval={5000}>
          {imagedata.map((item, index) => (
            <Carousel.Item key={index} onClick={() => handleShow(item.Title)}>
              <img
                className="d-block w-100"
                style={{
                  height: "650px",  
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={item.Poster}
                alt={item.Title}
              />
              <Carousel.Caption
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <h3>{item.Title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Movie Details Modal */}
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie?.Title || "Movie Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
              {selectedMovie?.Poster && selectedMovie?.Poster !== "N/A" ? (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img
                    src={selectedMovie.Poster}
                    alt={`${selectedMovie?.Title} Poster`}
                    style={{
                      width: "250px",
                      height: "auto",
                      maxHeight: "500px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ) : (
                <p>No Image Available</p>
              )}
              <div className="movie-details mt-3" style={{ width: "100%" }}>
                <p><strong>Year:</strong> {selectedMovie?.Year}</p>
                <p><strong>Genre:</strong> {selectedMovie?.Genre}</p>
                <p><strong>Plot:</strong> {selectedMovie?.Plot}</p>
                <p><strong>Director:</strong> {selectedMovie?.Director}</p>
                <p><strong>Actors:</strong> {selectedMovie?.Actors}</p>
                <p><strong>Rating:</strong> {selectedMovie?.imdbRating}</p>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="outline-success" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Container>


      <Container className=" but align-items-center d-flex flex-column mt-5" >
        <h1 className="text-white d-flex">Movies & Series</h1>
      </Container>

      {/* Movie Cards */}
      <Container className="but2 d-flex justify-content-center">
        <Row className="justify-content-center">
          {data.map((title, index) => (
            <Card
              style={{ width: "15rem" }}
              key={index}
              className="mx-2 my-3 bg-dark text-white px-0 movie-card"
              onMouseEnter={() => setSelectedMovie({ title, poster: poster[index], year: year[index] })}
              onClick={() => handleShow(title)}
            >
              <Card.Img
                className="card-img-top"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                variant="top"
                src={poster[index]}
                alt={`${title} Poster`}
              />
              <div className="card-details">
                <p><strong>{title}</strong></p>
                <p>{year[index]}</p>
              </div>
            </Card>
          ))}
        </Row>
      </Container>

      {/* Modal for Movie Details and Trailer */}
      <Container className="d-flex flex-column justify-content-center align-items-center">
      <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{selectedMovie?.Title || "Movie Details"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        
        {selectedMovie?.Poster && selectedMovie?.Poster !== 'N/A' ? (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img
              src={selectedMovie.Poster} // Correctly display the image
              alt={`${selectedMovie?.Title} Poster`}
              style={{ width: '250px', height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
        ) : (
          <p>No Image Available</p>
        )}
        <div className="movie-details mt-3" style={{ width: '100%' }}>
          <p><strong>Year:</strong> {selectedMovie?.Year}</p>
          <p><strong>Genre:</strong> {selectedMovie?.Genre}</p>
          <p><strong>Plot:</strong> {selectedMovie?.Plot}</p>
          <p><strong>Director:</strong> {selectedMovie?.Director}</p>
          <p><strong>Actors:</strong> {selectedMovie?.Actors}</p>
          <p><strong>Rating:</strong> {selectedMovie?.imdbRating}</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="outline-success" onClick={handleClose}>Close</Button>
      </Modal.Footer>
      
  </Modal>
</Container>
    </>
  );
}

export default Home;