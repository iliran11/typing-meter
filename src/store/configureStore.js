import { loadState, saveState } from './store/persistor';

const configureStore = () => {
  const persistedState = loadState();
  const store = configureStore(persistedState);
  store.subscribe(() => {
    // saveState(store.getState());
  });
  return store;
};

export default configureStore;
