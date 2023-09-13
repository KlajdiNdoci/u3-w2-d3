import { useState, useEffect } from "react";
import { Alert, Badge, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import MovieComments from "./MovieComments";

const MovieDetails = () => {
  const params = useParams();

  const [movieData, setMovieData] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=d51e7065&i=${params.movieId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setMovieData(data);
    } catch (error) {
      console.log("Error fetching movie data:", error);
    }
  };
  useEffect(() => {
    fetchMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);

  return (
    <>
      {movieData ? (
        <>
          <MyNavbar />
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={10}>
                <img
                  src={movieData.Poster}
                  alt=""
                  width="300"
                  className="mt-5"
                  style={{ objectFit: "cover", maxWidth: "100%" }}
                />
                <h1 className="display-4">{movieData.Title}</h1>
                <p>Year: {movieData.Year}</p>
                <p className="fs-4">Genre: {movieData.Genre}</p>
                <p>{movieData.Plot}</p>
                <Badge bg="danger" className="me-1">
                  Rating: {movieData.Ratings[0].Value}
                </Badge>

                <MovieComments movie={movieData} />
              </Col>
            </Row>
          </Container>
        </>
      ) : typeof movieData === "undefined" ? (
        <Alert variant="danger">Film non trovato! Verrai dirottato per sceglierne un altro</Alert>
      ) : (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
