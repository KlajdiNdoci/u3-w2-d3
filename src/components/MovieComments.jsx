import { useEffect, useState } from "react";
import { Alert, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieComments = ({ movie }) => {
  const [movieComments, setMovieComments] = useState([]);
  const params = useParams();

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${params.movieId}/comments`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTNlZGMwMzRmZjAwMTQwM2Y0ZDYiLCJpYXQiOjE2OTQ2MTU2NjQsImV4cCI6MTY5NTgyNTI2NH0.DJr4rE9Jv6urMmtq0RIZkpBvLqzoI1s-EUtqkT71r_0",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setMovieComments(data);
    } catch (error) {
      console.log("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);

  return (
    <ListGroup className="mt-4">
      {movie ? (
        <>
          <h3>Recensioni per {movie.Title}</h3>
          {movieComments.length > 0 ? (
            movieComments.map((review, index) => (
              <ListGroup.Item key={`comment-${index}`} className="d-flex">
                <span className="me-2">
                  <strong>{new Date(review.createdAt).toLocaleDateString()}</strong>
                </span>
                <span className="me-auto">{review.author}:</span>
                <span>{review.comment}</span>
              </ListGroup.Item>
            ))
          ) : (
            <Alert variant="warning">No reviews available.</Alert>
          )}
        </>
      ) : (
        <Alert variant="warning">Click on a image to display the reviews.</Alert>
      )}
    </ListGroup>
  );
};

export default MovieComments;
