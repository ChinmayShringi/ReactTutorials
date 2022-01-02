import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);

  const dispatch = useDispatch();
  // IMPLEMENT DECREMENT
  // IMPLEMENT BUTTON THAT TOGGLES LOGGED IN STATE
  return (
    <div className='App'>
      <h1>counter:{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      <button>SignIn</button>
      {isLogged ? <p>Hidden Info</p> : ''}
    </div>
  );
}

export default App;
