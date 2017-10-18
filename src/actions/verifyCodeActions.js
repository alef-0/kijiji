'use strict';

import {
    VERIFY_CODE_SHOWN,
    VERIFY_CODE_HIDDEN
} from '../constants/actionTypes';

export const showVerifyCode = () => {
    return {
        type: VERIFY_CODE_SHOWN
    };
};

export const hideVerifyCode = () => {
    return {
        type: VERIFY_CODE_HIDDEN
    };
};
