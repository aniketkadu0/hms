import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import AdminService from "../../Services/AdminService";

export default function AdminDashBoard() {

  const authenticated = sessionStorage.getItem("adminauthenticated")
  
  useEffect(() => {
      AdminService.getstudentdata()
        .then((response) => {
          sessionStorage.setItem("studentsdata", JSON.stringify(response.data))
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });

      AdminService.gethosteldata()
      .then((response) => {
        sessionStorage.setItem("hosteldata", JSON.stringify(response.data))
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });

      AdminService.getconcerns()
      .then((response) => {
        sessionStorage.setItem("concerns", JSON.stringify(response.data))
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
        
    },[]);

  if (!authenticated) {
    return <Navigate replace to="/notauthorised" />;
  } else {
    return (
        <>
        <div className="mb-5">...</div>
      <div className="jumbotron jumbotron-fluid text-center bg-light">
        <div className="container p-5">
          <h1 className="display-4">Welcome Admin</h1>
        </div>
      </div>
      </>
    );
  }
}
