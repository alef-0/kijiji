'use strict';

import { connect } from 'react-redux';
import { ConfirmationPopupActions } from '../../actions';
import ConfirmationPopup from "../../components/common/confirmationPopup";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideConfirmationPopup() {
            dispatch(ConfirmationPopupActions.hideConfirmationPopup());
        }
    };
};

export default connect(null, mapDispatchToProps)(ConfirmationPopup);
