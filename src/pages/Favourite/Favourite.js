import Navigation from "../../components/Navbar/Navbar";
import './Fav.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Favourites() {
  const [data, setData] = useState([]);
  const [poster, setPoster] = useState([]);
  const [year, setYear] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [show, setShow] = useState(false);

  const API_KEY = '318203f';
  const BASE_URL = 'https://www.omdbapi.com';
  const year2 = '2019'


  const handleClose = () => setShow(false);
  const handleShow = async (movieTitle) => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&t=${movieTitle}`);
    setSelectedMovie(response.data);
    setShow(true);
  };

  useEffect(() => {
    handleClick();
  }, []);

  async function handleClick() {
    let apiData = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=series&y=${year2}`);
    const movies = apiData.data.Search;
    const movieTitles = movies.map((movie) => movie.Title);
    const moviePoster = movies.map((movie) => movie.Poster);
    const movieYear = movies.map((movie) => movie.Year);
    setData(movieTitles);
    setPoster(moviePoster);
    setYear(movieYear);
  }

  return (
    <>
      <Navigation />

      <Container className="but d-flex align-items-center flex-column mt-5">
        <h1 className="text-white d-flex justify-content-center">My Favourites</h1>
      </Container>
      <Container className="d-flex justify-content-center">
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

export default Favourites;
