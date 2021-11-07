import * as React from 'react';
import ReactDOM from 'react-dom';

import { CSSTransition } from 'react-transition-group';

import './modal.css';

const { useEffect } = React;

const Modal = ({
  show,
  onClose,
  title,
  children,
  position = 'center',
  transitionProps
}) => {

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {

    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };

  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      {...transitionProps}
    >
      <div className={`modal ${position === 'center' ? 'center' : 'right'}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button onClick={onClose} className="button">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
