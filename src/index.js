import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactAppView from './ReactAppView';
import Button from './Button';
import ChangeWindowTitle from './ChangeWindowTitle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactAppView/>
    <Button/>
    <ChangeWindowTitle/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
