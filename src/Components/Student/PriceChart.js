export default function PriceChart(props) {

  const handleChoosedRow = (room) => {
    props.getRoom(room)
  };

  return (
    <>
      <h5>Rooms</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className="col-2">
              Sr. no
            </th>
            <th scope="col" className="col-4">
              Description
            </th>
            <th scope="col" className="col-3">
              Amount in Rs.
            </th>
            <th scope="col" className="col-4">
              Select
            </th>
          </tr>
        </thead>
        <tbody>
          {props.rooms &&
            props.rooms.map((room) => {
              return (
                <tr key={room.roomDetailId}>
                  <th scope="row">{room.roomDetailId}</th>
                  <td>{room.roomName}</td>
                  <td align="right">{room.price}/-</td>
                  <td>
                    <button className="btn btn-primary w-100"
                    onClick={() => handleChoosedRow(room)}
                    >Select</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
