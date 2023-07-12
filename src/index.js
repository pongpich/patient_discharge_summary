import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import root_reducer from './redux-store/root/Root-Reducer';

const store = createStore(root_reducer, applyMiddleware(thunk));
store.subscribe( () => {
  console.log("Store Subscribe Get State -> ", store.getState());
});

ReactDOM.render(<Provider store={store} ><MainApp /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
