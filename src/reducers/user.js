import {
    USER_NAME_UPDATED,
    USER_EMAIL_UPDATED,
    USER_PASSWORD_UPDATED,
    USER_NICKNAME_UPDATED,
    USER_ADDRESS_UPDATED,
    USER_MOBILE_NUMBER_UPDATED,
    USER_STATUS_VERIFIED,
    USER_AUTHORIZED,
    USER_LICENSE_QR_CODE_RECEIVED
} from '../constants/actionTypes';
import { UserInitialState } from './initialStates';

const user = (state = UserInitialState, action) => {
    switch (action.type) {
        case USER_NAME_UPDATED:
            return {
                ...state,
                name: action.payload
            };
        case USER_EMAIL_UPDATED:
            return {
                ...state,
                email: action.payload
            };
        case USER_PASSWORD_UPDATED:
            return {
                ...state,
                password: action.payload
            };
        case USER_NICKNAME_UPDATED:
            return {
                ...state,
                nickname: action.payload
            };
        case USER_ADDRESS_UPDATED:
            return {
                ...state,
                address: action.payload
            };
        case USER_MOBILE_NUMBER_UPDATED:
            return {
                ...state,
                mobileNumber: action.payload
            };
        case USER_STATUS_VERIFIED:
            return {
                ...state,
                ...action.payload,
                verified: true
            };
        case USER_AUTHORIZED:
            return {
                ...state,
                authorized: true
            };
        case USER_LICENSE_QR_CODE_RECEIVED:
            return {
                ...state,
                licenseQrCode: action.payload
            }
        default:
            return state;
    }
};

export default user;

