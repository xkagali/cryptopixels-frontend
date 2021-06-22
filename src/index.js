import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import './index.css';
// import thunk from 'redux-thunk'

// import {Provider} from "react-redux";
// import {combineReducers, createStore, applyMiddleware} from "redux";
// import {itemReducer} from "./store/reducer/item.reducer";
// import {transactionHistoryReducer} from "./store/reducer/transactionHistory.reducer";
//
// let rootReducer = combineReducers({itemReducer,transactionHistoryReducer})
// const store=createStore(rootReducer,applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
