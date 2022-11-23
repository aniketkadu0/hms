import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StudentService from "../../Services/StudentService";

export default function PaymentGateway() {

  let navigate = useNavigate();
  const [data, setdata] = useState(useLocation().state)

  const redirect = () => {
    StudentService.makepayment(data.room,data.mess,data.user,data.amount)
    .then((response) => {
      console.log(response.data)
      sessionStorage.setItem("invoice",JSON.stringify(response.data))
      navigate('/paymentsuccess')
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="row justify-content-center my-5">
      <div className="col-4 col-lg-4 col-xl-4">
        <div className="card">
          <div className="card-header h5 m-0 text-center">Payment Method</div>
          <div className="card-body m-3">
            <ul className="nav nav-tabs mb-3 px-md-4 px-2">
              <li className="nav-item">
                <a
                  className="nav-link px-2 active"
                  aria-current="page"  
                  href="#"               
                >
                  Debit Card
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2" href="#">
                  Mobile Payment
                </a>
              </li>
              <li className="nav-item ms-auto">
                <a className="nav-link px-2" href="#">
                  + More
                </a>
              </li>
            </ul>

              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column px-md-5 mb-4">
                    <span>CARD NUMBER</span>
                    <div className="row">
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="5136 1845 5468 3894"
                        />
                      </div>
                      <div className="col-lg-2">
                        <img
                          style={{ width: "100px" }}
                          src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                    <span>
                      EXPIRE<span className="ps-1">DATE</span>
                    </span>
                    <div className="inputWithIcon">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="05/20"
                      />
                      <span className="fas fa-calendar-alt"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                    <span>CVV</span>
                    <div className="inputWithIcon">
                      <input
                        type="password"
                        className="form-control"
                        defaultValue="123"
                      />
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex flex-column px-md-5 px-4 mb-4">
                    <span>CARD HOLDER</span>
                    <div className="inputWithIcon">
                      <input
                        className="form-control text-uppercase"
                        type="text"
                        defaultValue="Student Name"
                      />
                      <span className="far fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-md-5 px-4 mt-3">
                  <button className="btn btn-success w-100" onClick={redirect}>
                    Pay Rs. {data && data.amount}
                  </button>
                </div>
              </div>            
          </div>
        </div>
      </div>
    </div>
  );
}
