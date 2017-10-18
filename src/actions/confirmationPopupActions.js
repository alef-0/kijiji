'use strict';

import {
    CONFIRMATION_POPUP_SHOWN,
    CONFIRMATION_POPUP_HIDDEN
} from '../constants/actionTypes';

export const showConfirmationPopup = () => {
    return {
        type: CONFIRMATION_POPUP_SHOWN
    };
};

export const hideConfirmationPopup = () => {
    return {
        type: CONFIRMATION_POPUP_HIDDEN
    };
};
