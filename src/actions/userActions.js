'use strict';

import {
    USER_NAME_UPDATED,
    USER_EMAIL_UPDATED,
    USER_PASSWORD_UPDATED,
    USER_NICKNAME_UPDATED,
    USER_ADDRESS_UPDATED,
    USER_MOBILE_NUMBER_UPDATED,
    USER_STATUS_VERIFIED,
    USER_AUTHORIZED
} from '../constants/actionTypes';
import { VerifyCodeActions, ConfirmationPopupActions } from '../actions';
import axios from 'axios';


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
        const userEmail = getState().user.email;

        axios({
            method: 'post',
            data: userEmail,
            url: `/verify`
        }).then(res => {
            dispatch({
                type: USER_STATUS_VERIFIED,
                payload: res.data
            });

            dispatch(VerifyCodeActions.hideVerifyCode());
            dispatch(ConfirmationPopupActions.showConfirmationPopup());
        }).catch(err => {
            console.error('Post request was unsuccessful', err);
        });
    };
};

export const authorizeUser = () => {
    return {
        type: USER_AUTHORIZED
    };
};