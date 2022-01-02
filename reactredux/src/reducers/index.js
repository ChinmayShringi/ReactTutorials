import { combineReducers } from 'redux';
import isLogged from './loggedIn';
import counter from './counter';

const allReducers = combineReducers({ logged: isLogged, counter: counter });

export default allReducers;
