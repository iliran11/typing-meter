export const updateCustomWords = customWords => {
  return {
    type: 'UPDATE_CUSTOM_WORDS',
    payload: customWords
  };
};

export const updateGameDuration = gameDuration => {
  return {
    type: 'UPDATE_GAME_DURATION',
    payload: gameDuration
  };
};
