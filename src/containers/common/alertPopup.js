'use strict';

import { connect } from 'react-redux';
import { AlertPopupActions, VerifyCodeActions } from '../../actions';
import AlertPopup from "../../components/common/alertPopup";

const mapStateToProps = (state) => {
    return {
        verifyCodeOpened: state.verifyCode.verifyCodeOpened
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showVerifyCode() {
            dispatch(VerifyCodeActions.showVerifyCode());
        },

        hideAlertPopup() {
            dispatch(AlertPopupActions.hideAlertPopup());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertPopup);
