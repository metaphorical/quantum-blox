import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { errorFetchingHotGames, doneFetchingHotGames } from '../actions/bgg.js';

/**
 * Saga to handle fetching data from BGG JSON API
 */
export function* fetchHottest() {
   try {
      const response = yield call(axios.get, 'https://bgg-json.azurewebsites.net/hot');
     
      if(response.status >=200 && response.status < 300) {
            yield put(doneFetchingHotGames(response.data));
      } else {
            put(errorFetchingHotGames(response.statusText));
      }
   } catch (e) {
        console.error('EXC bggSaga.js');
        put(errorFetchingHotGames(e));
   }
}

export default function* watchBggCalls() {
    yield takeLatest('FETCH_HOT_BGG', fetchHottest);
}
