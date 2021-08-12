import classes from './App.module.scss';
import Login from './Login';

const App = () => {
  return (
    <div className={classes.container}>
      <Login />
    </div>
  );
};

export default App;
