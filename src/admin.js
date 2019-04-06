import React from 'react';
import ReactDOM from 'react-dom';
import './admin.css';
import SimpleReactFileUpload from './SimpleReactFileUpload';
import * as serviceWorker from './serviceWorker';
//pt butonul din header--pt culoare am instalat mdbreact
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <SimpleReactFileUpload />
  </BrowserRouter >
), document.getElementById('admin'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
