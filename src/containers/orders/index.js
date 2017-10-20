'use strict';

import { connect } from 'react-redux';
import Orders from '../../components/orders';

const mapStateToProps = (state) => {
    return {
        verified: state.user.verified,
        name: state.user.name,
        email: state.user.email,
        nickname: state.user.nickname
    };
};

export default connect(mapStateToProps)(Orders);
