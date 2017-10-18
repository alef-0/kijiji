'use strict';

import React, { Component } from 'react';
import { verifyCode } from '../../images/verify-img';

class AccountDetails extends Component {
    constructor(props) {
        super(props);

        this.onEmailChange = ::this.onEmailChange;
        this.onNicknameChange = ::this.onNicknameChange;
        this.onPasswordChange = ::this.onPasswordChange;
        this.onAddressChange = ::this.onAddressChange;
        this.onMobileNumberChange = ::this.onMobileNumberChange;
        this.onNameChange = ::this.onNameChange;
    }

    onEmailChange(event) {
        if (event.target) {
            this.props.setUserEmail(event.target.value);
        }
    }

    onNicknameChange(event) {
        if (event.target) {
            this.props.setUserNickname(event.target.value);
        }
    }

    onPasswordChange(event) {
        if (event.target) {
            this.props.setUserPassword(event.target.value);
        }
    }

    onNameChange(event) {
        if (event.target) {
            this.props.setUserName(event.target.value);
        }
    }

    onAddressChange(event) {
        if (event.target) {
            this.props.setUserAddress(event.target.value);
        }
    }

    onMobileNumberChange(event) {
        if (event.target) {
            this.props.setUserMobileNumber(event.target.value);
        }
    }

    verifyIdentity() {
        this.props.verifyUserIdentity();
    }

    render() {
        return (
            <div className='container'>
                <div className='columnLeft'>
                    <div className="container-forms">
                        <div className="container-info">
                            <div className='vme-account-details'>
                                <div className='vme-account-details-left'>
                                    <h2 className='accountDetailsHeader'>
                                        <div>Account Details</div>
                                        <div className="add-asterisk"> = mandatory fields</div>
                                    </h2>
                                    <span className="description">Profile information will be used in your ads and by Kijiji should we need to contact you.</span>

                                    <section className="has-tooltip">
                                        <label>
                                            Nickname <span className='input-description'>(optional)</span>:<br/>
                                            <input
                                                id="Nickname"
                                                name="nickname"
                                                type="text"
                                                onChange={this.onNicknameChange}
                                                value={this.props.nickname}
                                                maxLength="16"/>
                                            <span className="tooltip-trigger icon">i</span>
                                            <div className="clear-left"/>
                                        </label>
                                    </section>

                                    <section className="has-tooltip">
                                        <label className="add-asterisk">
                                            Email address:<br/>

                                            <input
                                                id="Email"
                                                name="email"
                                                type="text"
                                                onChange={this.onEmailChange}
                                                value={this.props.email}/>
                                            <span className="tooltip-trigger icon">i</span>
                                            <div className="clear-left"/>
                                        </label>
                                    </section>
                                    <section>
                                        <label className="add-asterisk">
                                            Password: *************<a className='input-description' href="#"
                                                                      id="ChangePassword">[Change]</a>
                                        </label>
                                    </section>

                                    <section>
                                        <label>
                                            First and Last Name <span className='input-description'>(optional)</span>:<br/>
                                            <input
                                                id="ContactPerson"
                                                name="contactPerson"
                                                type="text"
                                                onChange={this.onNameChange}
                                                value={this.props.name}
                                                disabled={this.props.verified}
                                                maxLength="40"/>
                                        </label>
                                    </section>

                                    <section>
                                        <label>
                                            Postal Code and/or Street Address <span
                                            className='input-description'>(optional)</span>:
                                            <input
                                                id="Address"
                                                name="address"
                                                type="text"
                                                onChange={this.onAddressChange}
                                                value={this.props.address}
                                                maxLength="100"
                                                disabled={this.props.verified}/>
                                        </label>
                                    </section>

                                    <section>
                                        <label>
                                            Phone Number <span className='input-description'>(optional)</span>:
                                            <input
                                                id="PhoneNumber"
                                                name="phoneNumber"
                                                type="text"
                                                onChange={this.onMobileNumberChange}
                                                value={this.props.mobileNumber}
                                                disabled={this.props.verified}
                                                maxLength="15"/>
                                        </label>
                                    </section>
                                </div>
                                {this.props.verifyCodeOpened
                                    ? <div className='vme-account-details__right'>
                                        {this.props.verified
                                            ? <div className="vme-account-details__complete">
                                                <div className="vme-account-details__complete__text">Account Confirmed with</div>
                                                <img src={require('../../images/logo-verifiedme--small.png')}/>
                                            </div>
                                            : <div>
                                                <div className="vme-account-details__item vme-account-details__item--qr">
                                                    <h2>Scan QR Code</h2>
                                                    <img className="vme-account-details__logo" src={require('../../images/logo-verifiedme--small.png')} width="135" height="26"/>
                                                    <p>Open Verified.Me on your smartphone, and snap a picture of this Code to
                                                        continue.</p>
                                                    <div className="vme-account-details__images">
                                                        <img className="vme-account-details__animation" src={require('../../images/qr-animation.gif')}/>
                                                        <img
                                                            id="qrCode"
                                                            className="vme-account-details__code clickable"
                                                            src={verifyCode}
                                                            onClick={() => this.verifyIdentity()}
                                                            width="182"
                                                            height="182"/>
                                                    </div>
                                                </div>
                                                <div className="vme-account-details__item">
                                                    <h2>Enter mobile number</h2>
                                                    <p>Press Send and you will receive a text message on your smartphone to
                                                        continue.</p>
                                                    <input
                                                        className="vme-account-details__phone-number"
                                                        type="tel"
                                                        name="vme-account-details-sms"
                                                        id="vme-account-details-sms"/>
                                                    <button className="vme-account-details__button">Send</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    : null
                                }
                            </div>
                        </div>

                        <div className="container-info">
                            <h2>Account and Notification Options</h2>

                            <section className="input-offset">
                                <label>
                                    <input
                                        id="hideVisitCounter"
                                        name="hideVisitCounter"
                                        type="checkbox"
                                        value="true"
                                        defaultChecked={false}/>
                                    Hide the visit counter on my Ads. <br/>(Only you will be able to see the visits
                                    number using My Ads)
                                </label>
                            </section>
                            <section className="input-offset">
                                <label>
                                    <input
                                        id="marketingOptedIn"
                                        name="marketingOptedIn"
                                        type="checkbox"
                                        value="true"
                                        defaultChecked={true}/>
                                    Yes, I would like Kijiji and eBay Inc. corporate family members, including StubHub
                                    and eBay Canada, to contact me about events, new features, and other promotional
                                    information.</label>
                            </section>

                            <section className="input-offset">
                                <label>
                                    <input
                                        id="sendFeatureNotificationEmail"
                                        name="sendFeatureNotificationEmail"
                                        type="checkbox"
                                        value="true"
                                        defaultChecked={true}/>
                                    Send me Bump Up and other feature notification emails.
                                </label>
                            </section>
                        </div>

                        <section id="ConfirmPasswordSection">
                            <label className="add-asterisk">
                                Verify your current password to save changes
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required="true"
                                    value={this.props.password}
                                    maxLength="64"
                                    autoComplete="off"/>
                                <span className="field-message" data-for="confirmPassword"/>
                            </label>
                        </section>

                        <div className="actions">
                            <button type="submit" className="button-task">Save Changes</button>
                            <span className="button-divider">|</span>
                            <a className="cancel-button" href="#">Cancel</a>
                        </div>
                    </div>
                </div>

                <div className="columnRight">
                    <div className="container-info container-summary" id="AccountSummary">
                        <h2>
                            Account Summary</h2>
                        <dl>
                            <dt>Member Since:</dt>
                            <dd>October 10, 2017</dd>

                            <dt>
                                Name:
                            </dt>
                            <dd>{this.props.name || 'N/A'}</dd>

                            <dt>Nickname:</dt>
                            <dd>{this.props.nickname || 'N/A'}</dd>

                            <dt>Email:</dt>
                            <dd>{this.props.email || 'N/A'}</dd>

                            <dt>
                                Address:
                            </dt>
                            <dd>{this.props.address || 'N/A'}</dd>

                            <dt>Phone:</dt>
                            <dd>{this.props.mobileNumber || 'N/A'}</dd>

                            <dt>Status:</dt>
                            <dd>{this.props.verified ? 'Verified' : 'Not Verified'}</dd>

                        </dl>
                    </div>
                </div>
            </div>
        );
    }
};


export default AccountDetails;
