import watchBggCalls from './bggSaga.js';

/**
 * Single entry point to start all Sagas at once
 */
export default function* rootSaga() {
  yield [
      watchBggCalls()
  ];
}