import { combineReducers } from 'redux';
import user from './user';
import alertPopup from './alertPopup';
import confirmationPopup from './confirmationPopup';
import verifyCode from './verifyCode';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    routing,
    user,
    verifyCode,
    alertPopup,
    confirmationPopup
});

export default rootReducer;
