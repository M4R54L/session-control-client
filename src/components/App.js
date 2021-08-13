import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui/ui.slice';
import classes from './App.module.scss';
import Login from './Auth/Auth';
import Modal from './UI/Modal';

const App = () => {
  const modalIsVisible = useSelector((state) => state.ui.modalIsVisible);
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  const visibilityHandler = (data) => {
    dispatch(uiActions.showModal(data));
  };

  return (
    <div className={classes.container}>
      <Login />
      {modalIsVisible && (
        <Modal handleVisibility={visibilityHandler}>
          Bienvenide {username}
        </Modal>
      )}
    </div>
  );
};

export default App;
