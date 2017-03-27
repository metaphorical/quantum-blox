const bggReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_HOT_BGG_DONE': 
            return action.state;
        case 'FETCH_HOT_BGG_ERR': 
            return {error: action.state};
        default:
            return state;
    }
};

export default bggReducer;