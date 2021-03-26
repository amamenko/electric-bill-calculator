import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../App.css";

const InputModal = (props) => {
  const { modalOpen, onCloseModal } = props;

  return (
    <Modal open={modalOpen} onClose={onCloseModal} center>
      <h2>Simple centered modal</h2>
    </Modal>
  );
};

export default InputModal;
