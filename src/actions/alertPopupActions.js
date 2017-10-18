'use strict';

import {
    ALERT_POPUP_SHOWN,
    ALERT_POPUP_HIDDEN
} from '../constants/actionTypes';

export const showAlertPopup = () => {
    return {
        type: ALERT_POPUP_SHOWN
    };
};

export const hideAlertPopup = () => {
    return {
        type: ALERT_POPUP_HIDDEN
    };
};
