import Modal from "react-modal";
import React from "react";

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

export default function Notice() {
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
  const notices = JSON.parse(sessionStorage.getItem("notices"))

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
            <th className="col-2">Subject</th>
            <th className="col-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {notices &&
            notices.map((notice) => {
              return (
                <tr key={notice.noticeId}>
                  <td>{notice.noticeId}</td>
                  <td>{notice.noticeDate}</td>
                  <td><a onClick={openModal} className="link">{notice.subject}</a></td>
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
                    <h5
                      ref={(_subtitle) => (subtitle = _subtitle)}
                      className="text-left mb-3"
                    >
                      Subject : {notice.subject}
                    </h5>
                    <h5>Notice: </h5><textarea className="w-100 h-100" value={notice.description}/>
                  </Modal>
                  <td>{notice.description}</td>
                </tr>
              );
            })
          }
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
