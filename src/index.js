import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/style.css';
import Shell from 'layouts/Shell';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Shell />, document.getElementById('root'));

serviceWorker.unregister();
