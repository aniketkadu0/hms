export default function PriceChartHtml(props) {
  
  return (
    <tr>
      <td>
        <input
          className="form-control-plaintext"
          type="number"
          name="roomDetailId"
          defaultValue={props.room.roomDetailId}
        />
      </td>
      <td>
        <input
          className="form-control-plaintext"
          type="text"
          name="roomName"
          defaultValue={props.room.roomName}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          name="price"
          defaultValue={props.room.price}
        />
      </td>
      <td>
        <input
          className="form-control-plaintext"
          type="number"
          name="maxOccupants"
          defaultValue={props.room.maxOccupants}
        />
      </td>
      <td>
        <button className="btn btn-success">
          Update
        </button>
      </td>
    </tr>
  );
}
