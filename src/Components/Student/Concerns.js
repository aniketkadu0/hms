import { useNavigate } from "react-router-dom";

export default function Concerns(){
  let navigate = useNavigate()
  const student = JSON.parse(sessionStorage.getItem("student"))

  return (
    <div className="bg-light">
      <div className="my-4">.</div>
      <button className="btn btn-primary mb-3 mx-3" onClick={()=>{
        navigate('/studentdashboard/addconcern')
      }}>Report concern</button>
      <table
        id="dtBasicExample"
        className="table table-striped table-bordered bg-light mt-2"
        width="100%"
      >
        <thead>
          <tr>
            <th className="col-1">Sr. no</th>
            <th className="col-2">Concern date</th>
            <th className="col-3">Subject</th>
            <th className="col-3">Concern</th>
            <th className="col-3">Response</th>
          </tr>
        </thead>
        <tbody>
          {student.concerns &&
          student.concerns.map((concern) => {
            return (
              <tr key={concern.concernId}>
                <td>{concern.concernId}</td>
                <td>{concern.concernDate}</td> 
                <td>{concern.subject}</td>   
                <td>{concern.concern}</td>  
                <td>{concern.response}</td>  
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

