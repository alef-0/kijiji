'use strict';

import { connect } from 'react-redux';
import { UserActions } from '../../actions';
import AccountDetails from '../../components/profile/accountDetails';

const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        email: state.user.email,
        password: state.user.password,
        nickname: state.user.nickname,
        address: state.user.address,
        mobileNumber: state.user.mobileNumber,
        verified: state.user.verified,
        verifyCodeOpened: state.verifyCode.verifyCodeOpened
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserName(name) {
            dispatch(UserActions.updateUserName(name));
        },
        setUserEmail(email) {
            dispatch(UserActions.updateUserEmail(email));
        },
        setUserPassword(password) {
            dispatch(UserActions.updateUserPassword(password));
        },
        setUserNickname(nickname) {
            dispatch(UserActions.updateUserNickname(nickname));
        },
        setUserAddress(address) {
            dispatch(UserActions.updateUserAddress(address));
        },
        setUserMobileNumber(mobileNumber) {
            dispatch(UserActions.updateUserMobileNumber(mobileNumber));
        },
        verifyUserIdentity() {
            dispatch(UserActions.verifyUserIdentity());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
