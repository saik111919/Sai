import React, { useState, useRef } from "react";

const NavModal = (props) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const openOffcanvas = () => {
    setShowOffcanvas(true);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <div>
      <button
        className="btn btn-primary d-flex align-items-center gap-1"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>{" "}
        Menu
      </button>

      {/* Bootstrap Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>I will not close if you click outside of me.</div>
        </div>
      </div>
    </div>
  );

  // const [showModal, setShowModal] = useState(false);
  // const modalRef = useRef(null);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // return (
  //   <div>
  //     <button type="button" className="btn btn-primary" onClick={openModal}>
  //       Open Modal
  //     </button>

  //     {/* Bootstrap Modal */}
  //     <div
  //       className={`modal fade ${showModal ? "show" : ""}`}
  //       ref={modalRef}
  //       tabIndex="-1"
  //       role="dialog"
  //       aria-hidden={!showModal}
  //       style={{ paddingRight: "0", display: showModal ? "block" : "none" }}>
  //       <div className="modal-dialog modal-dialog-right" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title">Modal Title</h5>
  //             <button
  //               type="button"
  //               className="btn-close"
  //               onClick={closeModal}
  //               aria-label="Close">
  //               <span aria-hidden="true"></span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             <p>Modal content goes here.</p>
  //           </div>
  //           <div className="modal-footer">
  //             <button
  //               type="button"
  //               className="btn btn-secondary"
  //               onClick={closeModal}>
  //               Close
  //             </button>
  //             <button
  //               type="button"
  //               className="btn btn-primary"
  //               onClick={closeModal}>
  //               Save Changes
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default NavModal;
