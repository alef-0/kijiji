'use strict';

import { connect } from 'react-redux';
import Profile from '../../components/profile';

const mapStateToProps = (state) => {
    return {
        alertPopupOpened: state.alertPopup.alertPopupOpened,
        confirmationPopupOpened: state.confirmationPopup.confirmationPopupOpened,
        verified: state.user.verified
    };
};

export default connect(mapStateToProps)(Profile);
