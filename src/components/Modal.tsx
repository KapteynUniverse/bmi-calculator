import { useContext, useEffect } from "react";
import { BmiContext } from "../context/BmiContext";

const Modal = () => {
  const { result, idealWeight, isModalOpen, setModalOpen } =
    useContext(BmiContext)!;

  useEffect(() => {
    if (isModalOpen) {
      const modal = document.getElementById("modal") as HTMLDialogElement;
      modal.showModal();
    }
  }, [isModalOpen]);

  function closeModal() {
    const modal = document.getElementById("modal") as HTMLDialogElement;
    modal.style.opacity = "0";

    setTimeout(() => {
      modal.close();
      setModalOpen(false);
      modal.style.opacity = "";
      modal.style.backdropFilter = "";
    }, 500);
  }

  return (
    <dialog
      className="modal"
      id="modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      role="dialog"
    >
      {result !== null ? (
        <>
          <h2 id="modal-title">Your Results</h2>
          <p id="modal-description" className="description">
            Your BMI is:<b> {result} </b> and your ideal weight range is:{" "}
            <b>
              {" "}
              {idealWeight?.min} - {idealWeight?.max} {idealWeight?.unit}{" "}
            </b>
          </p>
        </>
      ) : (
        <p>Please enter your height and weight</p>
      )}
      <button
        aria-controls="modal"
        aria-label="Close Modal"
        aria-expanded={isModalOpen}
        onClick={closeModal}
        autoFocus
      >
        Close Modal
      </button>
    </dialog>
  );
};

export default Modal;
