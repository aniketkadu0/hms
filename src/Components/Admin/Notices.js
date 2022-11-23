import { useNavigate } from "react-router-dom";

export default function Notices() {
  const hosteldata = JSON.parse(sessionStorage.getItem("hosteldata"));
  let navigate = useNavigate()
  const addnotice = ()=>{
    navigate('/admindashboard/addnotice')
  }
  return (
    <div className="bg-light">
      <div className="my-4">.</div>
      <button className="btn btn-primary mb-3 mx-3" onClick={addnotice}>Add notice</button>
      <table
        id="dtBasicExample"
        className="table table-striped table-bordered bg-light mt-2"
        width="100%"
      >
        <thead>
          <tr>
            <th className="col-1">Sr. no</th>
            <th className="col-1">Hostel Id</th>
            <th className="col-3">Notice Date</th>
            <th className="col-2">Subject</th>
            <th className="col-4">Description</th>
          </tr>
        </thead>
        <tbody>

          {hosteldata.map((hostel) => {
            return( 
                hostel.notices.map((notice) => {
                  return (
                    <tr key={notice.noticeId}>
                      <td>{notice.noticeId}</td>
                      <td>{notice.hostelId}</td>
                      <td>{notice.noticeDate}</td>
                      <td>{notice.subject}</td>
                      <td>{notice.description}</td>
                    </tr>
                  );
                })
              )
            })
          }

        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
