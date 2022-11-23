export default function Mess(props) {

  const handleChoosedRow = (mess)=>{
    props.getMess(mess)
  }

  return (
    <>
      <h5>Mess</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className="col-2">Sr. no</th>
            <th scope="col"className="col-4">Description</th>
            <th scope="col" className="col-3">Amount in Rs.</th>
            <th scope="col" className="col-4">Select</th>
          </tr>
        </thead>
        <tbody>
          {props.mess &&
              props.mess.map((mess) => {
                return (
                  <tr key={mess.messId}>
                    <th scope="row">{mess.messId}</th>
                    <td>{mess.messType}</td>
                    <td align="right">{mess.price}/-</td>
                    <td>
                      <button className="btn btn-primary w-100"
                      onClick = {() => handleChoosedRow(mess)}
                      >Select</button>
                    </td>
                  </tr>
                );
              }) 
          }
        </tbody>
      </table>
    </>
  );
}
