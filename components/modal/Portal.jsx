"use client";

import React from "react-dom";
import Modal from "./Modal";

function Portal({ children, onHandleModal }) {
  return React.createPortal(
    <Modal onHandleModal={onHandleModal}>{children}</Modal>,
    document.getElementById("portal")
  );
}

export default Portal;
