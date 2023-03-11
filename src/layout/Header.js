import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ritewayLogo from "../assets/ritewayLogo.PNG";
export const Header = () => {
  return (
    <div className="navigation">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={ritewayLogo} alt="image" height={80} width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Link className="nav-link headerlink" to="/">
                <span className="headerlink"> Home</span>
              </Link>
              <Link className="nav-link" to="/about">
                <span className="headerlink"> About Us</span>
              </Link>
              <Link className="nav-link" to="/service">
                <span className="headerlink"> Food Services</span>
              </Link>
              <Link className="nav-link" to="/delivery">
                <span className="headerlink"> Delivery</span>
              </Link>
              <Link className="nav-link" to="/contact">
                <span className="headerlink"> Contact Us</span>
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
