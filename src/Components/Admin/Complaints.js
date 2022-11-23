import AdminService from "../../Services/AdminService";
import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    height: "52%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
  },
};

Modal.setAppElement("#root");

export default function Complaints() {
  const concerns = JSON.parse(sessionStorage.getItem("concerns"));

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let concern = Object.fromEntries(formData);
    concern.user = {
      userId : concern.userId
    }

    AdminService.concernReply(concern)
      .then((response) => {
        alert("Sent successfully");
        closeModal();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

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
            <th className="col-1">Sr. no</th>
            <th className="col-1">Date</th>
            <th className="col-2">Student Name</th>
            <th className="col-2">Subject</th>
            <th className="col-3">Description</th>
            <th className="col-2">Response</th>
            <th className="col-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {concerns.map((concern) => {
            return (
              <tr key={concern.concernId}>
                <td>{concern.concernId}</td>
                <td>{concern.concernDate}</td>
                <td>{concern.user.firstName + " " + concern.user.lastName}</td>
                <td>{concern.subject}</td>
                <td>{concern.concern}</td>
                <td>{concern.response}</td>
                <td>
                  <button onClick={openModal} className="btn btn-primary w-100">
                    Reply
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <button
                      className="btn btn-primary mb-2 float-end"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <h4
                      ref={(_subtitle) => (subtitle = _subtitle)}
                      className="text-left"
                    >
                      Reply to concern
                    </h4>
                    <form onSubmit={submit}>
                      <input type='hidden' value={concern.concernId} name = 'concernId'/>
                      <input type='hidden' value={concern.concernDate} name = 'concernDate'/>
                      <input type='hidden' value={concern.user.userId} name = 'userId'/>
                      <input type='hidden' value={concern.subject} name = 'subject'/>
                      <input type='hidden' value={concern.concern} name = 'concern'/>
                      <input
                        className="form-control-plaintext"
                        defaultValue = {
                          "To : " +
                          concern.user.firstName +
                          " " +
                          concern.user.lastName +
                          " (" +
                          concern.user.emailId +
                          ")"
                        }
                      ></input>
                      
                      <textarea
                        className="form-control"
                        rows="6"
                        name="response"
                        placeholder="Enter your response"
                      />
                      <button className="btn btn-primary mt-4 w-50 float-end">
                        Send
                      </button>
                    </form>
                  </Modal>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
