import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id : new Date(), val : action.counter})
            };
        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result => result.id !== action.deleteId)
            return {
                ...state,
                results: updatedResults
            };
        default:
            return state;
    }
};

export default reducer;