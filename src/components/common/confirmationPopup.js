'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class ConfirmationPopup extends Component {
    render() {
        return (
            <div className="vme-alert vme-alert--warning vme-alert-success">
                <div className="vme-alert__content">
                    Your identity has been confirmed through <strong>Verified.Me</strong>, and other users will now see this on your profile summary. Click "My Ads" to see your <Link to='/postings'>existing</Link> postings, or to add create a new listing.</div>
                <div className="vme-alert__action">
                    <button id="alertClose" onClick={this.props.hideConfirmationPopup}><span className="vh"></span></button>
                </div>
            </div>
        );
    }
}

export default ConfirmationPopup;

