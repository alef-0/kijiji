'use strict';

import { connect } from 'react-redux';
import { UserActions } from '../../actions';
import SignIn from '../../components/auth/signIn';

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        password: state.user.password,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authorizeUser() {
            dispatch(UserActions.authorizeUser());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
