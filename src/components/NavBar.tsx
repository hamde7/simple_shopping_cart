import { Button } from "react-bootstrap";
import { Nav, Navbar , Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <Navbar sticky="top" className="bg-white shadow p-2 mb-3">
        <Container>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/Store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/About">
            About
          </Nav.Link>
        </Nav>
        <Button className="rounded-circle" variant="outline-primary" style={{
            width:"3rem",
            height:"3rem",
            position:"relative"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div className="bg-danger rounded-circle" style={{
            color:"white",
            position :"absolute",
            width: "1.5rem",
            height:"1.5rem",
            bottom :0,
            right : 0,
            transform : "translate(25%, 25%)"
          }}>
            23
          </div>
        </Button>
        </Container>
      </Navbar>
    </>
  );
}
