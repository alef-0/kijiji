'use strict';

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
import { VerifyCodeActions, ConfirmationPopupActions } from '../actions';
import axios from 'axios';

const verifiedData = {
    name: "Joe Blogs",
    address: "123 Front St. Toronto",
    mobileNumber: "(647) 123-4567"
};

let setUserVerificationInterval = null;

const checkIfUserIsVerified = (dispatch) => {
    axios({
        method: 'post',
        url: `/verify`
    }).then(res => {
        console.warn(res.data);
        if (res.data.Result) {
            clearInterval(setUserVerificationInterval);
            dispatch({
                type: USER_STATUS_VERIFIED,
                payload: verifiedData
            });

            dispatch(VerifyCodeActions.hideVerifyCode());
            dispatch(ConfirmationPopupActions.showConfirmationPopup());
        }
    }).catch(err => {
        console.error('Post request was unsuccessful', err);
    });
};

export const updateUserName = (name) => {
    return {
        type: USER_NAME_UPDATED,
        payload: name
    };
};

export const updateUserEmail = (email) => {
    return {
        type: USER_EMAIL_UPDATED,
        payload: email
    };
};

export const updateUserPassword = (password) => {
    return {
        type: USER_PASSWORD_UPDATED,
        payload: password
    };
};

export const updateUserNickname = (nickname) => {
    return {
        type: USER_NICKNAME_UPDATED,
        payload: nickname
    };
};

export const updateUserAddress = (address) => {
    return {
        type: USER_ADDRESS_UPDATED,
        payload: address
    };
};

export const updateUserMobileNumber = (mobileNumber) => {
    return {
        type: USER_MOBILE_NUMBER_UPDATED,
        payload: mobileNumber
    };
};

export const verifyUserIdentity = () => {
    return (dispatch, getState) => {
        setUserVerificationInterval = setInterval(() => checkIfUserIsVerified(dispatch), 1000);
    };
};

export const authorizeUser = () => {
    return {
        type: USER_AUTHORIZED
    };
};

export const getUserLicenseQrCode = () => (dispatch) => {
    axios({
        method: 'post',
        url: `/licenseRequest`
    }).then(res => {
        dispatch({
            type: USER_LICENSE_QR_CODE_RECEIVED,
            payload: res.data
        })
    }).catch(err => {
        console.error('License Request was unsuccessful', err);
    });
};