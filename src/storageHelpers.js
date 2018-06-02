export function getGameDurationStorage() {
  return sessionStorage.getItem('gameDuration');
}

export function getCustomWordsStorage() {
  const data = sessionStorage.getItem('customWords');
  if (data === 'null') return '';
  return data;
}
