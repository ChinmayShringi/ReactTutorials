import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// Action CURRENT STATE
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// Reducer LOGIC
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      console.log(`Error Occoured!`);
      return;
  }
};

// Store GLOBALIZED STATE
let store = createStore(counter);

store.subscribe(() => console.log(`SUBSCRIBE GETSTATE:`,store.getState()));

// Dispatch CALL FUNCTION
store.dispatch(increment());
store.dispatch(increment());
// store.dispatch(increment());
store.dispatch(decrement());
// store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
