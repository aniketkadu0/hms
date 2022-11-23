import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../../Services/UserService";

export default function SignUpPage() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/signin";
    navigate(path);
  };

  const [isMatched, setIsMatched] = useState(true);
  const [isExists, setisExists] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userDto = Object.fromEntries(formData);
    userDto.Role = {
      roleId : 2 
    }

    if (userDto.password === userDto.retypepassword) {
      UserService.adduser(userDto)
        .then((response) => {
            sessionStorage.setItem("authenticated", 1);
            sessionStorage.setItem("user", JSON.stringify(response.data));
            navigate("/studentdashboard/addpersonaldetails");
        })
        .catch((err) => {
          setisExists(true);
          console.log(err.response.data);
        });
    } else setIsMatched(false);
  };

  const handlechange = () => {
    setIsMatched(true);
  };

  return (
    <>
      <div className="row justify-content-center my-3">
        <div className="col-8 col-lg-4 col-xl-4">
          <div className="card">
            <div className="card-header">Hostel Management System</div>
            <form
              className="card-body"
              onSubmit={submitForm}
              style={{ padding: "10px 70px 5px 70px" }}
            >
              <h2 className="mb-4">Sign up</h2>
              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                    title="Please enter your first name"
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                    title="Please enter your last name"
                  />
                </div>
              </div>

              <div className="mb-4 mt-4">
                <input
                  className="form-control"
                  type="email"
                  name="emailId"
                  placeholder="Enter email address"
                  required
                  title="Please enter your email address"
                />
                <p
                  id="passworderror"
                  style={{
                    color: "red",
                    visibility: !isExists ? "hidden" : "visible",
                  }}
                >
                  Email address already exists
                </p>
              </div>

              <div className="mb-4">
                <input
                  id="createpassword"
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Create password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
              </div>

              <div>
                <input
                  id="retypepassword"
                  className="form-control"
                  type="password"
                  name="retypepassword"
                  placeholder="Confirm password"
                  required
                  onChange={handlechange}
                />
                <p
                  id="passworderror"
                  style={{
                    color: "red",
                    visibility: isMatched ? "hidden" : "visible",
                  }}
                >
                  Password doesn't match
                </p>
              </div>

              <button className="btn btn-primary w-100 mb-3" type="submit">
                Sign up
              </button>

              <div className="d-flex align-items-center justify-content-center pb-4 mt-4">
                <p className="mb-0 me-2">Already Sign up?</p>
                <button
                  type="button"
                  onClick={routeChange}
                  className = "btn btn-primary w-50"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-8 col-lg-4 col-xl-4">
          <div className="card">
            <div
              className="card-body"
              style={{ padding: "10px 20px 5px 20px" }}
            >
              <h4>Password instructions :</h4>
              <p style={{ color: "gray" }}>
                * Password must contain at least one number and one uppercase
                and lowercase letter, and at least 8 or more characters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
