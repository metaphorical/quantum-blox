const ExampleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LOADING': 
            let newState = JSON.parse(JSON.stringify(state));
            if (newState.loadingList instanceof Array) {
                    newState.loadingList.push(action.loading);
            }
            return newState;
        default:
            return state;
    }
}

export default ExampleReducer;