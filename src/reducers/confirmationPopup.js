'use strict';

import confirmationPopupInitialState from './initialStates/confirmationPopup';
import {
    CONFIRMATION_POPUP_SHOWN,
    CONFIRMATION_POPUP_HIDDEN
} from '../constants/actionTypes';

const confirmationPopup = (state = confirmationPopupInitialState, action) => {
    switch (action.type) {
        case CONFIRMATION_POPUP_SHOWN: {
            return {
                confirmationPopupOpened: true
            };
        }
        case CONFIRMATION_POPUP_HIDDEN: {
            return confirmationPopupInitialState;
        }
        case 'MESSAGE': {
            console.warn(action.payload);
        }
        default:
            return state;
    }
};

export default confirmationPopup;
