import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  let invoice = JSON.parse(sessionStorage.getItem("invoice"));
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/studentdashboard");
  };

  return (
    <div className="row justify-content-center my-3">
      <div className="col-4 col-lg-4 col-xl-4">
        <div className="card">
          <div className="card-body m-3">
            <div className="row">
              <div className="col-lg-2">
                <img
                  style={{ width: "50px" }}
                  src={require("../../Images/tick.jpg")}
                  alt="null"
                />
              </div>
              <div className="col-lg-10">
                <h2 className="text-center">Payment successful</h2>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h6 className="text-muted">INVOICE NUMBER</h6>
              <p className="text-bold">{invoice.invoiceNumber}</p>

              <h6 className="text-muted">CARD HOLDER</h6>
              <p className="text-bold">
                {invoice.user.firstName + " " + invoice.user.lastName}
              </p>

              <h6 className="text-muted">CARD NUMBER</h6>
              <p>5136 1845 5468 3894</p>

              <h6 className="text-muted">PAID AMOUNT</h6>
              <p>Rs. {invoice.amountPaid} /-</p>
            </div>

            <button className="btn btn-success w-100" onClick={redirect}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
