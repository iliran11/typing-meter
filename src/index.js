import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { loadState, saveState } from './store/persistor';

const persistedState = loadState()
const store = configureStore(persistedState);
store.subscribe(() => {
  saveState(store.getState());
});

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
