import PropTypes from "prop-types";

import "../../App.css";
import { Component } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");
export class Modal extends Component {
  render() {
    return createPortal(
      <div className="Overlaye">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

// Modal.propTypes = {
//   img: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
