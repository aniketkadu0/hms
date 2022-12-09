import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StudentService from "../../Services/StudentService";
import Mess from "./Mess";
import PriceChart from "./PriceChart";
import TotalBill from "./TotalBill";

export default function CheckRoomAvailability() {

  const authenticated = sessionStorage.getItem("authenticated") || false;

  const [rooms, setrooms] = useState(false);
  const [messes, setmesses] = useState(false);
  const [mess, setmess] = useState(false);
  const [room, setroom] = useState(false);

  useEffect(() => {
    StudentService.getPrices()
      .then((response) => {
        setrooms(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    StudentService.getMess()
      .then((response) => {
        setmesses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getRoom = (room) => {
    setroom(room);
  };
  const getMess = (mess) => {
    setmess(mess);
  };

  if (!authenticated) {
    return <Navigate replace to="/notauthorised" />;
  } else {
    return (
      <>
        <div>.</div>
        <div className="row m-2 my-5">
          <div className="col-12 col-lg-12 col-xl-12">
            <div className="card">
              <div className="card-header">Room selection</div>

              <div
                className="card-body"
                style={{ padding: "20px 50px 10px 50px" }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      {rooms && <PriceChart rooms={rooms} getRoom={getRoom} />}
                    </div>
                    <div className="row">
                      {messes && <Mess mess={messes} getMess={getMess} />}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    {
                      <TotalBill
                        room={room && room}
                        mess={mess && mess}
                        getRoom={getRoom}
                        getMess={getMess}
                      />
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
