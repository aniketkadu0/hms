import React, { useState } from "react";
import {
  BsArrowLeftCircle,
  BsBuilding,
  BsFillChatSquareFill,
  BsFillChatSquareTextFill,
  BsFillGridFill,
  BsHouseDoor,
  BsPersonCircle,
} from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function SideAdminNavBar() {

    const [authenticated, setauthenticated] = useState(sessionStorage.getItem("adminauthenticated"));
      let navigate = useNavigate();
    
      const signOut = () => {
        setauthenticated(false);
        sessionStorage.setItem("adminauthenticated", false);
        sessionStorage.clear()
        navigate("/");
      };
    
      if (!authenticated) {
        return <Navigate replace to="/notauthorised" />;
      } else {
        return (
          <>
            {[false].map((expand) => (
              <Navbar
                key={expand}
                bg="light"
                expand={expand}
                className="mb-3 fixed-top"
              >
                <Container fluid>
                <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
                  
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Admin Dashboard
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        
                        <Nav.Link href="/admindashboard">
                          <span className="text-2xl float-left">
                            {<BsFillGridFill />}
                          </span>{" "}
                          Dashboard
                        </Nav.Link>

                        <Nav.Link href="/admindashboard/hosteldata">
                          <span className="text-2xl float-left">
                            {<BsBuilding />}
                          </span>{" "}
                          Hostel Data
                        </Nav.Link>
    
                        <Nav.Link href="/admindashboard/studentdata">
                          <span className="text-2xl float-left">
                            {<BsPersonCircle />}
                          </span>{" "}
                          Student data
                        </Nav.Link>
    
                        <Nav.Link href="/admindashboard/updateroomqtyprices">
                          <span className="text-2xl float-left">
                            {<BsHouseDoor />}
                          </span>{" "}
                          Update room prices
                        </Nav.Link>
    
                        <Nav.Link href="/admindashboard/complaints">
                          <span className="text-2xl float-left">
                            {<BsFillChatSquareTextFill />}
                          </span>{" "}
                          Student Concerns
                        </Nav.Link>

                        <Nav.Link href="/admindashboard/notices">
                          <span className="text-2xl float-left">
                            {<BsFillChatSquareFill />}
                          </span>{" "}
                          Notices
                        </Nav.Link>
    
                        <Nav.Link href="/">
                          <span className="text-2xl float-left">
                            {<BsArrowLeftCircle />}
                          </span>{" "}
                          <button className="btn btn-warning" onClick={signOut}>Logout</button>
                        </Nav.Link>
    
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </>
        );
      }

}
