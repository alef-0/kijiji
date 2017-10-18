'use strict';

import verifyCodeInitialState from './initialStates/verifyCode';
import {
    VERIFY_CODE_SHOWN,
    VERIFY_CODE_HIDDEN
} from '../constants/actionTypes';

const verifyCode = (state = verifyCodeInitialState, action) => {
    switch (action.type) {
        case VERIFY_CODE_SHOWN: {
            return {
                verifyCodeOpened: true
            };
        }
        case VERIFY_CODE_HIDDEN: {
            return verifyCodeInitialState;
        }
        default:
            return state;
    }
};

export default verifyCode;
