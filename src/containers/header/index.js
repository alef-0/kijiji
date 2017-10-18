'use strict';

import { connect } from 'react-redux';
import Header from '../../components/header';

const mapStateToProps = (state) => {
    return {
        authorized: state.user.authorized
    };
};

export default connect(mapStateToProps)(Header);
