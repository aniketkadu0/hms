import { Navigate } from "react-router-dom";

export default function PaymentDetails() {

  const authenticated = sessionStorage.getItem("authenticated") || false
  const student = JSON.parse(sessionStorage.getItem("student"))

  if (!authenticated) {
    return <Navigate replace to="/notauthorised" />;
  } else {
    return (
      <div className="row justify-content-center my-3">
        <div className="col-12 col-lg-5 col-xl-5 p-5">
          <div className="card">
          <h4 className="text-center card-header">Payment Details</h4>
            <div className="card-body m-3">            
              <div className="mt-2 mb-4">
                <h6 className="text-muted">ROOM NUMBER :</h6>
                <p className="text-bold">{student.room.roomNumber}</p>

                <h6 className="text-muted">INVOICE NUMBER : </h6>
                <p className="text-bold">{student.invoice.invoiceNumber}</p>

                <h6 className="text-muted">INVOICE DATE : </h6>
                <p className="text-bold">{student.invoice.invoiceDate}</p>

                <h6 className="text-muted">AMOUNT PAID :</h6>
                <p>Rs. {student.invoice.amountPaid} /-</p>

                <h6 className="text-muted">ROOM :</h6>
                <p className="text-bold">{student.room.roomDetail.roomName}</p>

                <h6 className="text-muted">MESS :</h6>
                <p className="text-bold">
                  {student.mess.messType}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
