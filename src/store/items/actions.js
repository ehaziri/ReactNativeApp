import { FILTER_ITEMS, FETCH_ITEMS, SORT_ALPHABETICALLY, SORT_BY_DATE, ALPHABETICALLY, RELEASE, SORT_ITEMS } from './actionTypes';
import axios from '../axiosInterceptor';
import { loadSpinner } from '../mainApp/actions';
import API_ENDPOINTS from '../../environment/endpoints';

export const fetchItems = () => async (dispatch) => {
    dispatch(loadSpinner(true));
    try {
        const response = await axios.get("https://www.freetogame.com/api/games");
        response.status === 200 && dispatch({ type: FETCH_ITEMS, payload: response?.data });
    }     
    catch (e) {
      return Promise.reject(e);
    } finally {
        dispatch(loadSpinner(false));
    }
};

export const filterItems = (filter) => async (dispatch) => {
    dispatch({ type: FILTER_ITEMS, payload: filter.toLowerCase() });
};

export const sortItems = (type, currentState) => async (dispatch) => {
    dispatch({ type: SORT_ITEMS, payload: [type, currentState] });
};

export const sortByDate = (sorted) => async (dispatch) => {
    dispatch({ type: SORT_BY_DATE, payload: sorted });
};