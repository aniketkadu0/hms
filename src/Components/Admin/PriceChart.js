import React, { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";
import PriceChartHtml from "./PriceCharthtml";

export default function PriceChart() {

  const [rooms, setrooms] = useState([]);

  useEffect(() => {
    AdminService.getroomdetails()
      .then((response) => {
          setrooms(response.data);
          console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const room = Object.fromEntries(formData);

    AdminService.updateroom(room)
      .then((response) => {
        console.log("after update product :" + response);
        alert("Updated successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <>
      <div>.</div>

      <div className="row my-5 m-5">
        <div className="col-lg-8">
          <div className="card justify-content-center">
            <div className="card-header">
              <h5>Room prices</h5>
            </div>
            <div className="card-body">
            <form onSubmit={handleUpdate}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="col-1">Sr. no</th>
                    <th className="col">Room name</th>
                    <th className="col">Fees</th>
                    <th className="col">Max occupants</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => {
                    return <PriceChartHtml key={room.roomDetailId} room={room} />;
                  })}
                </tbody>
              </table>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
