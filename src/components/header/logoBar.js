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
                                ? <div>
                                    <div className='headerButtonFavourites'>
                                        <a href='javascript:void(0)' className='headerButtonIconLink'title='My Favourites'> </a>
                                    </div>
                                    <div className='headerButton'><a href='#' className='headerButtonMyKijiji'>My Kijiji</a></div>
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

