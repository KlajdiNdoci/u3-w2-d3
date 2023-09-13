import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function MyNavbar() {
  const location = useLocation();
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>MyTvShows</Navbar.Brand>
          <Nav className="me-auto">
            <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname === "/TvShows" && "active"}`} to="/TvShows">
              TvShows
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
