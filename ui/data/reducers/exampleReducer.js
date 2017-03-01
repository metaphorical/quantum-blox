const globalCounterReducer = (state = 0, action) => {
    let newState = state;
    switch (action.type) {
        case 'INCREMENT_GLOBAL': 
            return newState+1;
        case 'DECREMENT_GLOBAL': 
            return newState-1;
        default:
            return state;
    }
}

export default globalCounterReducer;