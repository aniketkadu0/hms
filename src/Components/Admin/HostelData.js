export default function HostelData() {
  
  const hosteldata = JSON.parse(sessionStorage.getItem("hosteldata"));

  return (
    <div className="bg-light">
      <div className="my-4">.</div>

      <table
        id="dtBasicExample"
        className="table table-striped table-bordered bg-light mt-2"
        width="100%"
      >
        <thead>
          <tr>
            <th className="col-1">Hostel id</th>
            <th className="col-2">Hostel Name</th>
            <th className="col-2">Room number</th>
            <th className="col-2">Occupants</th>
            <th className="col-2">Room name</th>
            <th className="col-2">Max occupants</th>
          </tr>
        </thead>
        <tbody>
          {hosteldata.map((hostel) => {
            return hostel.rooms.map((room) => {
              return (
                <tr key={room.roomNumber}>
                  <td>{room.hostelId}</td>
                  <td>{hostel.hostelName}</td>
                  <td>{room.roomNumber}</td>
                  <td>
                    {room.users.length === 0 ? "No occupants" : room.users.map((user) => {
                      return (
                        <p>
                          {user.userId +
                            ". " +
                            user.firstName +
                            " " +
                            user.lastName}
                        </p>
                      );
                    })}
                  </td>
                  <td>{room.roomDetail.roomName}</td>
                  <td>{room.roomDetail.maxOccupants}</td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
}
