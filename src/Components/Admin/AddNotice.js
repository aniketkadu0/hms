import { useNavigate } from "react-router-dom";
import AdminService from "../../Services/AdminService";

export default function AddNotice(){

    let navigate = useNavigate()

    const send = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const notice = Object.fromEntries(formData);
    
        console.log(notice);
    
        AdminService.addnotice(notice).then(response => {
                console.log("sent :" + response)
                alert("sent")
                document.getElementById("myForm2").reset();
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
        })
      };


    return (
      <>
      <div className="mb-5">....</div>
      <div className="row my-4 mx-5 w-50">
        <div className="col-lg-12 col-xl-12">
          <div className="card">
            <h5 className="card-header text-center">Notice Board</h5>
            <form id="myForm2"
              className="card-body"
              style={{ padding: "20px 50px 20px 50px" }}
              onSubmit = {send}
            >
              <div className="row">
                <div className="col-lg-4">
                  <h6>Date</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <h6>Hostel Id</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <input
                      className="form-control"
                      type="number"
                      name="hostelId"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <h6>Subject</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <h6>Message</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <textarea
                      className="form-control"
                      type="text"
                      name="description"
                      rows="4"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 mb-2 d-flex justify-content-center">
                <button className="btn btn-primary w-50" type="submit">
                  Add Notice
                </button>
              </div>
              <div className="mt-2 mb-2 d-flex justify-content-center">
                <button className="btn btn-warning w-50" onClick={()=>{
                  navigate('/admindashboard/notices')
                }}>
                  Back to Notices
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
}