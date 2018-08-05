import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const Index = () => (
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
