import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function MyNav() {
  return (
    <Navbar
      expand="xl"
      className="bg-body-tertiary mb-3 py-4 px-5 fixed-top text-nowrap"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="me-5 fs-3 fw-bold">
          TECHNOMANCER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic navbar-nav" />
        <NavbarCollapse className="basic-navbar-nav">
          <Nav className="gap-2 mx-2">
            <NavLink
              to="prodotti/cpu"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Processori
            </NavLink>
            <NavLink
              to="prodotti/gpu"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Schede Grafiche
            </NavLink>
            <NavLink
              to="prodotti/psu"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Alimentatori
            </NavLink>
            <NavLink
              to="prodotti/ram"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Schede RAM
            </NavLink>
            <NavLink
              to="prodotti/mb"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Schede Madri
            </NavLink>
            <NavLink
              to="prodotti/case"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Case
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
