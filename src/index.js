import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

// create store and pass in rootReducer
// redux applyMiddleware allows using middleware "thunk"
const store = createStore(rootReducer, applyMiddleware(thunk));

// Provider binds react to react-redux and passes store into the whole app so
// the whole app can access the store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
