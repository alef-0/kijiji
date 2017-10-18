'use strict';

import alertPopupInitialState from './initialStates/alertPopup';
import {
    ALERT_POPUP_SHOWN,
    ALERT_POPUP_HIDDEN
} from '../constants/actionTypes';

const alertPopup = (state = alertPopupInitialState, action) => {
    switch (action.type) {
        case ALERT_POPUP_SHOWN: {
            return {
                alertPopupOpened: true
            };
        }
        case ALERT_POPUP_HIDDEN: {
            return {
                alertPopupOpened: false
            };
        }
        default:
            return state;
    }
};

export default alertPopup;
