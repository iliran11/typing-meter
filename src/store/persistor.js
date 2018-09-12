export const loadState = () => {
  try {
    const serializaedState = localStorage.getItem('state');
    if (serializaedState === null) {
      return undefined;
    }
    return JSON.parse(serializaedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializaedState = JSON.stringify(state);
    localStorage.setItem('state', serializaedState);
  } catch (err) {}
};
