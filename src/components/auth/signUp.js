'use strict';

import React, { Component } from 'react';
import { verifyCode } from '../../images/verify-img';
import { Link } from 'react-router';

class SignUp extends Component {
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
                    <div className='container-admin'>
                        <div className='container-info'>
                            <form id='RegistrationForm' className='special track-form-flow' method='post'>
                                <div className='signUpPanel'>
                                    <div className='signUpPanel__top'>
                                        <div className='vme-verify'>
                                            <img className='vme-verify__logo'
                                                 src={require('../../images/logo-verifiedme--small.png')} width='135'
                                                 height='26'/>
                                            <div className='vme-verify__qrCode'>
                                                <h2>Scan QR Code</h2>
                                                <div className='vme-verify__inner'>
                                                    <div className='vme-verify__inner__top'>
                                                        <p>Open Verified.Me on your smartphone, and snap a picture of
                                                            this Code to continue.</p>
                                                    </div>
                                                    <div className='vme-verify__inner__bottom'>
                                                        <img
                                                            className='vme-verify__animation'
                                                             src={require('../../images/qr-animation.gif')}
                                                            width='120'
                                                            height='112'
                                                        />
                                                    </div>
                                                </div>
                                                <img
                                                    className='vme-verify__code'
                                                    src={verifyCode}
                                                    width='182'
                                                    height='182'
                                                    onClick={() => this.verifyIdentity()}/>
                                            </div>
                                            <div className='vme-verify__mobile'>
                                                <h2>Enter mobile number</h2>
                                                <p>Press Send and you will receive a text message on your smartphone to
                                                    continue.</p>
                                                <input
                                                    className='vme-verify__phone-number'
                                                    type='tel'
                                                    name='vme-verify-sms'
                                                    id='vme-verify-sms'/>
                                                <button className='vme-verify__button'>Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='signUpPanel__bottom'>
                                        <h1>Account Details</h1>
                                        <section>
                                            <label className='add-asterisk'>
                                                Nickname:
                                                <input
                                                    id='registration-nickname'
                                                    name='nickname'
                                                    onChange={this.onNicknameChange}
                                                    value={this.props.nickname}
                                                    required='true'
                                                    type='text'
                                                    maxLength='128'/>
                                            </label>
                                        </section>
                                        <section>
                                            <label className='add-asterisk'>
                                                Email Address:
                                                <input
                                                    id='registration-email'
                                                    onChange={this.onEmailChange}
                                                    value={this.props.email}
                                                    name='email'
                                                    required={true}
                                                    type='text'
                                                    maxLength='128'/>
                                            </label>
                                        </section>
                                        <section id='Password'>
                                            <label className='add-asterisk'>
                                                Password: <span><a href='javacript:void(0)'>Change</a></span>
                                                <input
                                                    id='registration-password'
                                                    name='password'
                                                    onChange={this.onPasswordChange}
                                                    value={this.props.password}
                                                    minLength='8'
                                                    required={true}
                                                    type='password'
                                                    maxLength='64'
                                                    disabled/>
                                            </label>
                                        </section>
                                        <section>
                                            <label>
                                                First and Last Name <span>(optional):</span>
                                                <input
                                                    id='registration-name'
                                                    name='name'
                                                    type='text'
                                                    onChange={this.onNameChange}
                                                    value={this.props.name}
                                                    maxLength='16'
                                                    disabled={this.props.verified}/>
                                            </label>
                                        </section>
                                        <section>
                                            <label>
                                                Postal Code and/or Street Address <span>(optional):</span>
                                                <input
                                                    id='registration-address'
                                                    name='address'
                                                    type='text'
                                                    onChange={this.onAddressChange}
                                                    value={this.props.address}
                                                    maxLength='16'
                                                    disabled={this.props.verified}/>
                                            </label>
                                        </section>
                                        <section>
                                            <label>
                                                Phone Number <span>(optional):</span>
                                                <input
                                                    id='registration-phone'
                                                    name='tel'
                                                    type='text'
                                                    onChange={this.onMobileNumberChange}
                                                    value={this.props.mobileNumber}
                                                    maxLength='16'
                                                    disabled={this.props.verified}/>
                                            </label>
                                        </section>
                                        <Link to='/profile/account'>
                                        <button
                                            className='button-task background-green'
                                            onClick={this.props.authorizeUser}>
                                            Save Changes
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='columnRight'>
                    <div className='container-info bottom-space'>
                        <h2>Already Registered?</h2>
                        <p>Sign in to post your ad.</p>
                        <Link to='/auth/signin'>
                            <button
                                id='LoginButton'
                                className='button-open background-blue next'>
                                Sign In
                            </button>
                        </Link>
                    </div>
                    <div className='container-info'>
                        <h2>Why Register?</h2>
                        <p>To enhance your Kijiji experience and help you stay safe and secure, you now need to register
                            to:</p>
                        <ul className='checkmark-list'>
                            <li>Post, edit and manage ads</li>
                            <li>Access saved ads in your Favourites from all of your devices</li>
                            <li>Easily promote multiple ads to gain more visibility and view order history</li>
                            <li>Reserve your own nickname</li>
                            <li>And much more!</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};


export default SignUp;
