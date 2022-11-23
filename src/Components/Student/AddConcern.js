import StudentService from "../../Services/StudentService";

export default function AddConcern() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const send = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const concern = Object.fromEntries(formData);
    concern.user = user;

    StudentService.reportconcern(concern)
      .then((response) => {
        console.log("sent :" + response);
        alert("sent");
        document.getElementById("myForm").reset();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <>
      <div className="mb-5">....</div>
      <div className="row my-4 mx-5 w-50">
        <div className="col-lg-12 col-xl-12">
          <div className="card">
            <h5 className="card-header text-center">Report Concern</h5>
            <form
              id="myForm"
              className="card-body"
              style={{ padding: "20px 50px 20px 50px" }}
              onSubmit={send}
            >
              <div className="row">
                <div className="col-lg-4 my-2">
                  <h6>Email ID</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <input
                      className="form-control-plaintext"
                      type="text"
                      value={user.emailId}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 my-2">
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
                <div className="col-lg-4 my-2">
                  <h6>Message</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <textarea
                      className="form-control"
                      type="text"
                      name="concern"
                      rows="4"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 mb-2 d-flex justify-content-center">
                <button className="btn btn-primary w-50" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
