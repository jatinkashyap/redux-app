import * as actionTypes from './actionTypes';

export const storeResult = (ctr) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(ctr));
        },2000);
    };
};

const saveResult = (ctr) => {
    return {
        type : actionTypes.STORE_RESULT,
        counter :ctr
    };
};

export const deleteResult = (id) => {
    return {
        type : actionTypes.DELETE_RESULT,
        deleteId : id
    };
};