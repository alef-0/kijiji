import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LogoBar extends Component {
    render() {
        return (
            <div className='logoBarWrapper'>
                <div className='logoBar'>
                    <div className='logo'>
                        <a href='javascript:void(0)' className='logoLink'>
                            <span className='icon logoLinkIcon'></span>
                        </a>
                    </div>

                    <div className='headerTools'>
                        <div className='headerLinks'>
                            <a href='javascript:void(0)' className='headerLink'>Help Desk</a>
                            <a href='javascript:void(0)' className='headerLinkLanguage'>fr</a>
                        </div>
                        <div className='headerButtons'>
                            {this.props.authorized
                                ? <div className='headerItems'>
                                    <div className='headerButtonFavourites'>
                                        <a href='javascript:void(0)' className='headerButtonIconLink' title='My Favourites'>
                                            <div>
                                                <svg viewBox="0 0 19.18 17.15" id="icon-heart" width="100%" height="100%">
                                                    <path fill="#ffffff" d="M17.72 1.55a4.9 4.9 0 0 0-7.14 0l-1 1-1-1a4.9 4.9 0 0 0-7.14 0 5.39 5.39 0 0 0 0 7.38l7.69 8a.6.6 0 0 0 .43.18.6.6 0 0 0 .43-.11l7.7-8a5.38 5.38 0 0 0 .03-7.45zm-.87 6.55l-7.26 7.58-7.26-7.59a4.18 4.18 0 0 1 0-5.72 3.7 3.7 0 0 1 5.41 0l1.42 1.49 1.67 1.85a.6.6 0 1 0 .89-.8l-1.31-1.45 1-1.08a3.78 3.78 0 0 1 5.41 0 4.17 4.17 0 0 1 .03 5.72z"></path>
                                                    <path fill="none" d="M16.85 8.1l-7.26 7.58-7.26-7.59a4.18 4.18 0 0 1 0-5.72 3.7 3.7 0 0 1 5.41 0l1.42 1.49 1.67 1.85a.6.6 0 1 0 .89-.8l-1.31-1.45 1-1.08a3.78 3.78 0 0 1 5.41 0 4.17 4.17 0 0 1 .03 5.72z"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='headerButton'>
                                        <a href='#' className='headerButtonMyKijiji'>My Kijiji
                                            <svg viewBox="0 0 612 326.663" className="icon headerButtonMyKijijiIcon" width="100%" height="100%">
                                                <path fill="currentColor" fillRule="evenodd" d="M610.455 14.108C607.075 4.815 598.75 0 589.467 0H22.524C13.242 0 4.912 4.815 1.544 14.108-1.834 23.403.44 33.326 7.267 40.088L290.73 320.425c4.313 4.272 9.79 6.237 15.263 6.237 5.472 0 10.95-2.21 15.267-6.48L604.73 40.13c6.826-6.755 9.105-16.726 5.725-26.022z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                                : <div className='headerButtonAnonymous'>
                                <Link to='/auth/signup' className='headerButtonAnonymousLink'>Register</Link>
                                <span className='headerButtonAnonymousOr'>or</span>
                                <Link to='/auth/signin' className='headerButtonAnonymousLink'>Sign In</Link>
                                </div>
                            }

                            <a href='javascript:void(0)' className='headerButtonPostAd'>
                                Post Ad
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

