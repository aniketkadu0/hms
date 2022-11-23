import React, { useEffect, useState } from "react";
import {
  BsArrowLeftCircle,
  BsFillChatSquareFill,
  BsFillGridFill,
  BsHouseDoor,
  BsPersonCircle,
} from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function SideStudentNavBar() {
  const [authenticated, setauthenticated] = useState(
    parseInt(sessionStorage.getItem("authenticated"))
  );
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = parseInt(sessionStorage.getItem("authenticated") || 0);
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  const signOut = () => {
    setauthenticated(0);
    sessionStorage.setItem("authenticated", 0);
    sessionStorage.clear();
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
              <Navbar.Brand>Student Dashboard</Navbar.Brand>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Welcome Student
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/studentdashboard">
                      <span className="text-2xl float-left">
                        {<BsFillGridFill />}
                      </span>{" "}
                      Dashboard
                    </Nav.Link>

                    <Nav.Link
                      href="/studentdashboard/addpersonaldetails"
                    >
                      <span className="text-2xl float-left">
                        {<BsPersonCircle />}
                      </span>{" "}
                      Personal Details
                    </Nav.Link>

                    <Nav.Link href="/studentdashboard/checkroom">
                      <span className="text-2xl float-left">
                        {<BsHouseDoor />}
                      </span>{" "}
                      Select Room
                    </Nav.Link>

                    <Nav.Link
                      href="/studentdashboard/paymentdetails"
                    >
                      <span className="text-2xl float-left">
                        {<MdPayment />}
                      </span>{" "}
                      Payment Details
                    </Nav.Link>

                    <Nav.Link href="/studentdashboard/concerns">
                      <span className="text-2xl float-left">
                        {<BsFillChatSquareFill />}
                      </span>{" "}
                      Concerns
                    </Nav.Link>

                    <Nav.Link href="/studentdashboard/notice">
                      <span className="text-2xl float-left">
                        {<BsFillChatSquareFill />}
                      </span>{" "}
                      Notice Board
                    </Nav.Link>

                    <Nav.Link href="/">
                      <span className="text-2xl float-left">
                        {<BsArrowLeftCircle />}
                      </span>{" "}
                      <button className="btn btn-warning" onClick={signOut}>
                        Logout
                      </button>
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
