import { useEffect, useState } from "react";
import MyCard from "./MyCard";
import { Container, Row, Spinner } from "react-bootstrap";
import MyNavbar from "./MyNavbar";

const TvShows = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=d51e7065&s=spider-man`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setMovieData(data.Search);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching movie data:", error);

      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <h4 className="mb-3">{movieData.title}</h4>
        {isLoading || isError ? (
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        ) : (
          <Row className="mb-5 ">
            {movieData.map(movie => (
              <MyCard key={movie.imdbID} movie={movie} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default TvShows;
