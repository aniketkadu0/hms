import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../../Services/UserService";

export default function ChangePassword() {
  const emailId = useLocation().state;

  let navigate = useNavigate();

  const [isMatched, setIsMatched] = useState(true);

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    if (user.password === user.retypepassword) {
      UserService.updatepassword(user)
        .then((response) => {
          alert("Password updated successfully");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else setIsMatched(false);
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
              <h2>Reset password</h2>
              <br></br>

              <div className="mb-4">
                <input
                  className="form-control-plaintext"
                  type="email"
                  name="emailId"
                  value={emailId}
                  required
                  title="Please enter your email address"
                />
              </div>

              <div className="mb-4">
                <input
                  id="createpassword"
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Create new password"
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
                Reset password
              </button>
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
