export default function StudentData() {

  const studentdata = JSON.parse(sessionStorage.getItem("studentsdata"))

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
            <th className="col-1">Name</th>
            <th className="col-1">Gender</th>
            <th className="col-1">Mobile number</th>            
            <th className="col-1">Course</th>
            <th className="col-1">Batch</th>
            <th className="col-1">Year</th>
            <th className="col-1">Room number</th>
            <th className="col-1">Room Name</th>
            <th className="col-1">Hostel Id</th>
            <th className="col-1">Mess</th>
            <th className="col-1">Invoice number</th>
            <th className="col-1">Amount paid (Rs.)</th>
          </tr>
        </thead>
        <tbody>

          {studentdata.map((student) => {
            return (
              <tr key={student.user.userId}>
                <td>
                  {student.user.firstName + " " + student.user.lastName}
                </td>
                <td>{student.gender}</td>
                <td>{student.mobileNumber}</td>
                <td>{student.course}</td>
                <td>{student.batch}</td>
                <td>{student.year}</td>
                <td>{student.room.roomNumber}</td>
                <td>{student.room.roomDetail.roomName}</td>
                <td>{student.room.hostelId}</td>
                <td>{student.mess.messType}</td>
                <td>{student.invoice.invoiceNumber}</td>
                <td>{student.invoice.amountPaid} /-</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
