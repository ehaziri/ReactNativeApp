import { LOAD_SPINNER } from './actionTypes';

const INITIAL_STATE = {
    loadSpinner: false
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_SPINNER:
            return { ...state, loadSpinner: payload };
        default:
            return state;
    }
};
