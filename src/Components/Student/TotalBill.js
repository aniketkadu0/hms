import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../../Services/StudentService";

export default function TotalBill(props) {
  let navigate = useNavigate();
  let user = JSON.parse(sessionStorage.getItem("user"));
  let gender = sessionStorage.getItem("gender");

  const [roomdetail, setroomdetail] = useState(false);
  const [checkroom, setcheckroom] = useState(true);
  
  let amount = 0;

  const checkRoom = (roomName) => {
    StudentService.getRoom(roomName, gender)
      .then((response) => {
        setroomdetail(response.data);
        setcheckroom(false);
        amount = (props.room.price || 0) + (props.mess.price || 0)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makepayment = ()=> {
      amount = (props.room.price || 0) + (props.mess.price || 0)
      navigate('/paymentgateway',{
        state : {
          room : roomdetail,
          mess : props.mess,
          user : user,
          amount : amount
        }
      })
  }

  return (
    <>
      <h5>Total Amount</h5>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr. no</th>
            <th scope="col">Description</th>
            <th scope="col">Amount in Rs.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1.</th>
            <td>{props.room.roomName}</td>
            <td align="right">{props.room.price}/-</td>
            <td>
              <button
                className="btn btn-warning w-100"
                onClick={() => {
                  props.getRoom(false);
                }}
              >
                Remove
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row">2.</th>
            <td>{props.mess.messType}</td>
            <td align="right">{props.mess.price}/-</td>
            <td>
              <button
                className="btn btn-warning w-100"
                onClick={() => {
                  props.getMess(false);
                }}
              >
                Remove
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row">Total</th>
            <td></td>
            <td align="right">
              {(props.room.price || 0) + (props.mess.price || 0)} /-
            </td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <button
          className="btn btn-success mb-4"
          onClick={() => {
            checkRoom(props.room.roomName);
          }}
        >
          {" "}
          Check room availability
        </button>
      </div>
      <h5 className="d-grid gap-2 col-9 mx-auto">
        Room number : {roomdetail.roomNumber} with{" "}
        {roomdetail && roomdetail.roomDetail.roomName}
        <br></br> Hostel no : {roomdetail.hostelId}
      </h5>
      <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <button className="btn btn-success" disabled={checkroom}
        onClick={makepayment}>
          Make payment
        </button>
      </div>
    </>
  );
}
