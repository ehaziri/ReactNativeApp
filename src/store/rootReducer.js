import { combineReducers } from 'redux';
import itemsReducers from './items/reducers';
import mainAppReducers from './mainApp/reducers';

export default combineReducers({
    mainApp: mainAppReducers,
    itemsData: itemsReducers
});
