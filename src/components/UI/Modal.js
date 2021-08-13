import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

const Backdrop = (props) => {
  return (
    <div
      onClick={() => props.onClick(false)}
      className={classes.backdrop}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.handleVisibility} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
};

export default Modal;
