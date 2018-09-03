import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import Root from './Root';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
