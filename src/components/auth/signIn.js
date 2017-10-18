'use strict';

import React from 'react';
import { Link } from 'react-router';

const SignIn = (props) => {
    return (
        <div className='container'>
            <div className='columnLeft'>
                <div className="container-admin">
                    <div className="container-info">
                        <form action="" className="login-form" method="post">
                            <div className="circles no-background">
                                <h1 className="no-indent">Sign In</h1>
                                <section>
                                    <label htmlFor="LoginEmailOrNickname">Email Address or Nickname:</label>
                                    <input
                                        id="LoginEmailOrNickname"
                                        name="emailOrNickname"
                                        type="text"
                                        value={props.email}
                                        maxLength="128"/>
                                </section>
                                <section>
                                    <label htmlFor="login-password">Password:</label>
                                    <input
                                        id="login-password"
                                        name="password"
                                        type="password"
                                        value={props.password}
                                        maxLength="64"/>
                                    <a id="LoginForgottenPassword" href="javascript:void(0)">Forgot your password?</a>
                                </section>

                                <section className="input-offset">
                                    <label>
                                        <input
                                            id="login-rememberMe"
                                            name="rememberMe"
                                            className="ext-uncheck"
                                            type="checkbox"
                                            value="true"
                                            defaultChecked={true}/>
                                        Keep me signed in
                                    </label>
                                </section>

                                <Link to='/profile/account'>
                                    <button
                                        id="SignInButton"
                                        className="button-task background-green"
                                        type="submit"
                                        onClick={props.authorizeUser}>
                                        Sign In
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className='columnRight'>
                <div className="container-info bottom-space">
                    <h2>Not registered yet?</h2>
                    <p>Register now to post, edit, and manage ads. It’s quick, easy, and free!</p>
                    <Link to='/auth/signup'>
                        <button
                            id="RegisterButton"
                            className="button-open background-blue next">
                            Register Now
                        </button>
                    </Link>
                </div>
                <div className="safety-message-redesign">
                    <div className="strong-message">
                        <strong>Protect your account</strong>
                    </div>
                    Ensure that whenever you sign in to Kijiji, the Web address in your browser starts with https://www.kijiji.ca/</div>
            </div>
        </div>
    );
};


export default SignIn;
