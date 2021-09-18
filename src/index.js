import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Effect from './Hookreacteffect/Effect1';
import State01 from './Hookreactstate/State1';
import State02 from './Hookreactstate/State2';
import State03 from './Hookreactstate/State3';
import Context from './Hookreactcontext/Context1';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <State01 />
    <Effect />
    <State02 />
    <State03 />
     <Context />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
