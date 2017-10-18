import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='linkContainer'>
                    <div className='footer-column'>
                        <h3 className='columnTitle'>Kijiji</h3>
                        <ul className='columnList'>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>About</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Careers</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Member benefits</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Advertise on Kijiji</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h3 className='columnTitle'>Explore</h3>
                        <ul className='columnList'>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Kijiji Central</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Kijiji mobile payment</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Tools to promote ads</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>eBay Classifieds Sites</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h3 className='columnTitle'>Info</h3>
                        <ul className='columnList'>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Terms of Use</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Privacy Policy</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Posting Policy</a>
                            </li>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>AdChoice</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h3 className='columnTitle'>Support</h3>
                        <ul className='columnList'>
                            <li className='columnItem'>
                                <a className='columnLink 'href='#'>Help Desk</a>
                            </li>
                            <li className='columnItem'>
                                <select className='langOptions'>
                                    <option selected value='en_CA'>English</option>
                                    <option value='fr_CA'>Francais</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='badgeContainer'>
                    <div className="storeIcons">
                        <a href="#" target="_blank" rel=' noopener noreferrer'>
                            <div className="container">
                                <div className="icon appStore"></div>
                            </div>
                        </a>
                        <a href="#" target="_blank" rel=' noopener noreferrer'>
                            <div className="container">
                                <div className="icon googlePlay"></div>
                            </div>
                        </a>
                    </div>
                    <div className="socialMediaIcons">
                        <a className='socialMediaIconsContainer facebook' href="#" focusable="false" height="100%" role="img" width="100%"></a>
                        <a className='socialMediaIconsContainer instagram' href="#" focusable="false" height="100%" role="img" width="100%"></a>
                        <a className='socialMediaIconsContainer twitter' href="#" focusable="false" height="100%" role="img" width="100%"></a>
                        <a className='socialMediaIconsContainer kijijiCentral' href="#" focusable="false" height="100%" role="img" width="100%"></a>
                        <a className='socialMediaIconsContainer youtube' href="#" focusable="false" height="100%" role="img" width="100%"></a>
                    </div>
                </div>
                <div className="copyright">
                    <p className="copyrightText">
                        <span className="copyrightSymbol">©</span>
                        Copyright 2017 eBay International AG
                    </p>
                    <p className="copyrightText">
                        All rights reserved. Google Play, YouTube and other marks are trademarks of Google Inc.
                    </p>
                </div>
            </footer>
        );
    }
}

