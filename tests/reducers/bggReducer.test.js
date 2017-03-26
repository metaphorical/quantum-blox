import bggReducer from '../../ui/data/reducers/bggReducer.js';



test('To properly handle errorous state', () => {
    expect(bggReducer('', {type: 'FETCH_HOT_BGG_ERR', state: 'ERROR'})).toEqual({error: 'ERROR'});
});

test('To proxy data from succesfull call response', () => {
    expect(bggReducer('', {type: 'FETCH_HOT_BGG_DONE', state: {
        test: 'DONE'
    }})).toEqual({
        test: 'DONE'
    });
});