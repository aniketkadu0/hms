import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../../Services/UserService";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function AdminLogin() {
  const [isCorrect, setIsCorrect] = useState(true);

  let navigate = useNavigate();

  const handlechange = () => {
    setIsCorrect(true);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    UserService.login(user)
      .then((response) => {
        sessionStorage.setItem("adminauthenticated", true);
        navigate("/admindashboard");
      })
      .catch((err) => {
        setIsCorrect(false);
        console.log(err);
      });
  };

  return (
    <>
      <div className="row justify-content-center my-5">
        <div className="col-8 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-header">Hostel Management System</div>
            <form
              className="card-body"
              onSubmit={submitForm}
              style={{ padding: "30px 70px 30px 70px" }}
            >
              <h2>Administrator Sign in</h2>

              <p
                id="passworderror"
                style={{
                  color: "red",
                  visibility: isCorrect ? "hidden" : "visible",
                }}
              >
                Incorrect username or password
              </p>

              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <FaUserAlt />
                </span>
                <input
                  className="form-control"
                  type="text"
                  name="emailId"
                  onChange={handlechange}
                  placeholder="Email Id"
                  required
                />
              </div>

              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <RiLockPasswordLine />
                </span>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handlechange}
                  placeholder="Password"
                  required
                />
              </div>

              <button className="btn btn-primary w-100 mb-4" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
