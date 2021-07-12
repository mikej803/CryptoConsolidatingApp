import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CryptoWallet from './components/CryptoWallet';
import CryptoForm from './components/CryptoForm'
// import CryptoList from './components/CryptoList'
import reducer from "./reducers";
// // // import BaseLayout from './components/layout/BaseLayout';
// // // import Hooks from './components/Hooks';
// // // import Classes from './components/Classes'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

// if (localStorage.getItem('transactions') == null)
//     localStorage.setItem('transactions', JSON.stringify([]))
// let initialState = {
//     currentIndex: -1,
//     List: JSON.parse(LocalStorage.getItem('transactions'))
// }

const saveToLocalStorage = (reduxGlobalState) => {
  
  // serialization = converting js object to a string

  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState)
  }
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = () => {
  
  const serializeState = localStorage.getItem('state');

  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState);
  }
}

const persistedState = loadFromLocalStorage();


// let store = createStore(reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let store = createStore(reducer, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/form" component={CryptoForm} />
          <Route exact path="/wallet" component={CryptoWallet} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);