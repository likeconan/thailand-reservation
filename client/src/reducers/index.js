import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import hotelReducer from './hotel.reducer';

export default combineReducers({
    userReducer,
    hotelReducer,
})