import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => <div className="backdrop"></div>;

const Overlay = (props) => <div className="overlay">{props.children}</div>;

const overlayPortal = document.getElementById("overlay-root");
const backdropPortal = document.getElementById("backdrop-root");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        overlayPortal
      )}
      {ReactDOM.createPortal(<Backdrop />, backdropPortal)}
    </>
  );
};

export default Modal;
