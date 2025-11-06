import { Badge, Col, Container, Form, FormControl, Nav, Navbar, NavbarCollapse, Row } from "react-bootstrap";
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
              className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Processori
            </NavLink>
            <NavLink
              to="prodotti/gpu"
              className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Schede Grafiche
            </NavLink>
            <NavLink
              to="prodotti/psu"
              className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Alimentatori
            </NavLink>
            <NavLink
              to="prodotti/ram"
              className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Schede RAM
            </NavLink>
            <NavLink
              to="prodotti/mb"
              className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Schede Madri
            </NavLink>
            <NavLink
              to="prodotti/case"
              className={({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Case
            </NavLink>
          </Nav>
          <Form
            className="d-flex ms-auto me-3 mb-3 mb-lg-0 mt-3 mt-lg-0 justify-content-center" /*onSubmit={funzione barra di ricerca}*/
          >
            <FormControl
              type="search"
              placeholder="Cerca..."
              className="rounded-pill mw-300"
              aria-label="Search" /*value={search} onChange{(e)=> setSearch(e.target.value)}*/
            />
          </Form>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Nav className="d-flex flex-row gap-4 align-items-center">
                <NavLink to={"/cart"} className="position-relative">
                  <i className="bi bi-cart-fill fs-4"></i>
                  <Badge bg="danger" pill className="position-absolute top-10 start-90 translate middle">
                    {/*CartContent.length*/}
                  </Badge>
                </NavLink>
                <NavLink to="signin" className="text-decoration-none">
                  {/*Su questo NavLink bisogna aggiungere la logica nel caso in cui il token di autenticazione non sia presente*/}
                  <i className="bi bi-person-circle fs-4"></i>
                  <span className="text-white access ms-2">Accedi</span>
                </NavLink>
                <Nav className="d-flex align-items-center text-decoration-none">
                  <i
                    /* disabled={!user}
                      onClick={linkToProfile}*/
                    className="bi bi-person-circle fs-4"
                  ></i>

                  <Link className="text-decoration-none" to="/confirm-logout">
                    <span className="text-white access ms-2">Log out</span>
                  </Link>
                </Nav>
              </Nav>
            </Col>
          </Row>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
