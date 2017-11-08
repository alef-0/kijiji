'use strict';

import React, { Component } from 'react';

class AlertPopup extends Component {
    constructor(props) {
        super(props);

        this.showVerifyCode = ::this.showVerifyCode;
    }

    showVerifyCode(e) {
        e.preventDefault();
        this.props.showVerifyCode();
    }

    render() {
        return (
            <div className="vme-alert vme-alert--warning">
                {this.props.verifyCodeOpened
                    ? <div className="vme-alert__content">
                        <p>By verifying your profile you’ll confirm your first name, last name and address to Kijiji. We’ll show your first name and the initial from your last name on your profile.</p>
                    </div>
                    : <div className="vme-alert__content">
                        <p>Help increase the trust and safety of Kijiji by verifying your profile using <strong>Verified.Me</strong>. It only takes a few seconds to complete - <a id="tryVerify" href="#" onClick={this.showVerifyCode}>get started now</a>.</p>
                        <p><strong>Why verify your profile?</strong> We’re providing a new way to bring a greater degree of trust with the person you’re interacting with. A verified profile means the user has provided Kijiji their name and address, and that they are a real person. You’ll see verified profiles across the platform - on postings, in search results, and when chatting through the app.</p>
                    </div>
                }
                <div className="vme-alert__action">
                    <button id="alertClose" onClick={this.props.hideAlertPopup}><span className="vh"></span></button>
                </div>
            </div>
        );
    }
}

export default AlertPopup;
