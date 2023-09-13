import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyCard(props) {
  const movie = props.movie;
  return (
    <Col md={3}>
      <Card className="mb-3">
        <Card.Img variant="top" src={movie.Poster} style={{ height: "450px" }} />
        <Card.Body>
          <Card.Title className="text-truncate">{movie.Title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Link to={"/MovieDetails/" + movie.imdbID}>
            <Button variant="dark" className="w-100 text-truncate">
              Details for {movie.Title}
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default MyCard;
