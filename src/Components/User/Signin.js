import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import UserService from "../../Services/UserService";

export default function Signin() {
  const [isCorrect, setIsCorrect] = useState(true);

  const handlechange = () => {
    setIsCorrect(true);
  };

  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/signup";
    navigate(path);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userDto = Object.fromEntries(formData);

    UserService.login(userDto)
      .then((response) => {
        sessionStorage.setItem("authenticated", 1);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        navigate('/studentdashboard');
      })
      .catch((err) => {
        setIsCorrect(false);
        console.log(err.response.data);
      });
  };

  return (
    <div className="row justify-content-center my-4">
      <div className="col-8 col-lg-4 col-xl-4">
        <div className="card">
          <div className="card-header">Hostel Management System</div>
          <form
            className="card-body"
            onSubmit={submitForm}
            style={{ padding: "30px 70px 20px 70px" }}
          >
            <h2>Hello Student!</h2>

            <p
              id="passworderror"
              style={{
                color: "red",
                visibility: isCorrect ? "hidden" : "visible",
              }}
            >
              Incorrect Email id or Password. Try again
            </p>

            <div className="mb-4 input-group">
              <span className="input-group-text">
                <FaUserAlt />
              </span>
              <input
                className="form-control"
                type="email"
                name="emailId"
                placeholder="Email address"
                onChange={handlechange}
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
                placeholder="Password"
                onChange={handlechange}
                required
              />
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="defaultCheck2"
              />
              <label className="form-check-label" htmlFor="defaultCheck2">
                Remember me
              </label>
            </div>

            <button className="btn btn-primary w-100 mb-3" type="submit">
              Sign in
            </button>

            <button
              className="btn link-primary d-flex justify-content-center"
              onClick={()=>{navigate('/forgotpassword')}}
            >
            Forgot password?
            </button>

            <div className="d-flex align-items-center justify-content-center pb-4 mt-4">
              <p className="mb-0 me-2">New student?</p>
              <button
                type="button"
                onClick={routeChange}
                className="btn btn-primary w-50"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
