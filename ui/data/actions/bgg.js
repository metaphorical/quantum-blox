export function fetchHotGames() {
  return {
    type: 'FETCH_HOT_BGG'
  };
}
export function doneFetchingHotGames(data) {
  return {
    type: 'FETCH_HOT_BGG_DONE',
    state: data
  };
}
export function errorFetchingHotGames(data) {
  return {
    type: 'FETCH_HOT_BGG_ERR',
    state: data
  };
}
