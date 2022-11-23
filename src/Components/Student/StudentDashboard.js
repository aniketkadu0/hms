import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StudentService from "../../Services/StudentService";

export default function StudentDashboard() {

  let user = JSON.parse(sessionStorage.getItem("user"));
  const authenticated = sessionStorage.getItem("authenticated") || false;
  const [student, setstudent] = useState({room : {}, invoice : {}});

  useEffect(() => {

    StudentService.getStudent(user.userId)
      .then((response) => {
        setstudent(response.data);
        sessionStorage.setItem("gender", response.data.gender);
        sessionStorage.setItem("student", JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });

      StudentService.getnotices()
        .then((response) => {
          sessionStorage.setItem("notices", JSON.stringify(response.data))
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });

  }, [user.userId]);

  if (!authenticated) {
    return <Navigate replace to="/notauthorised" />;
  } else {
    return (
      <div className="row w-100 m-2">
        <section className="h-100 my-5">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-7 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                  <div className="row g-0">
                    <div
                      className="col-md-4 bg-dark text-center text-light"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                      }}
                    >
                      <img
                        src={require("../../Images/pngkey.com-avatar-png-1149878.png")}
                        alt="Avatar"
                        className="img-fluid my-5 mx-5"
                        style={{ width: "120px" }}
                      />
                      <h5>
                        Mr.{" "}
                        {user.firstName + " " + user.lastName}
                      </h5>
                      <i className="far fa-edit mb-5"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>Welcome Student</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Batch</h6>
                            <p className="text-muted">
                              {student.course +
                                " " +
                                student.batch +
                                " " +
                                student.year}
                            </p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Email id</h6>
                            <p className="text-muted">{user.emailId}</p>
                          </div>
                        </div>
                        <h6>Room Details</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Room number</h6>
                            <p className="text-muted">
                              {/* {student && student.room ? student.room.roomNumber : "Not booked"} */}
                              {student.room ? student.room.roomNumber : "Not booked"}
                            </p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Payment status</h6>
                            <p className="text-muted">
                              {/* {student && student.invoice ? "Paid" : "Not paid"} */}
                              {student.invoice ? "Paid" : "Not paid"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
