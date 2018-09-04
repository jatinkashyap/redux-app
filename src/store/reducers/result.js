import * as actionTypes from '../actions/actionTypes';
import{updatedObject} from '../utility';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.STORE_RESULT:
            return updatedObject(state,{results: state.results.concat({ id : new Date(), val : action.counter})});
        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result => result.id !== action.deleteId)
            return updatedObject(state,{results: updatedResults});
        default:
            return state;
    }
};

export default reducer;