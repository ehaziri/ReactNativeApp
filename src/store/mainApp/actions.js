import { LOAD_SPINNER } from './actionTypes';

export const loadSpinner = (data) => {
    return { type: LOAD_SPINNER, payload: data };
};