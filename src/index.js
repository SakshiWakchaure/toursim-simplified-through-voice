import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import App from './App';
// import './index.css';
// import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Router> 
    <App />
  </Router>
);

reportWebVitals();
