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
                                <svg viewBox="0 0 10 5.6" className="icon langOptionsIcon" width="100%" height="100%"><path fill="currentColor" d="M5 5.6c-.2 0-.3-.1-.4-.2L.2 1C0 .8 0 .4.2.2s.6-.2.8 0l4 4 4-4c.2-.2.6-.2.8 0s.2.6 0 .8L5.4 5.4c-.1.1-.2.2-.4.2z"></path></svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='badgeContainer'>
                    <div className="storeIcons">
                        <a href="#" target="_blank" rel=' noopener noreferrer'>
                            <div className="containerIcons">
                                <div className="icon appStore"></div>
                            </div>
                        </a>
                        <a href="#" target="_blank" rel=' noopener noreferrer'>
                            <div className="containerIcons">
                                <div className="icon googlePlay"></div>
                            </div>
                        </a>
                    </div>
                    <div className="socialMediaIcons">
                        <a className='socialMediaIconContainer facebook' href="#" focusable="false" height="100%" role="img" width="100%">
                            <svg viewBox="0 0 40 85.6" className="icon facebookIcon" width="100%" height="100%"><path fill="currentColor" d="M26.7 85.6h-16V42.8H0V28h10.7v-8.7C10.7 7.3 13.9 0 28.1 0h11.8v14.8h-7.4c-5.5 0-5.8 2.1-5.8 5.9v7.4H40l-1.6 14.7H26.7v42.8z"></path></svg>
                        </a>
                        <a className='socialMediaIconContainer instagram' href="#" focusable="false" height="100%" role="img" width="100%">
                            <svg viewBox="0 0 40 40" className="icon instagramIcon" width="100%" height="100%"><path fill="currentColor" d="M20 3.6c5.3 0 6 0 8.1.1 1.9.1 3 .4 3.7.7.9.4 1.6.8 2.3 1.5.7.7 1.1 1.4 1.5 2.3.3.7.6 1.8.7 3.7.1 2.1.1 2.7.1 8.1s0 6-.1 8.1c-.1 1.9-.4 3-.7 3.7-.4.9-.8 1.6-1.5 2.3-.7.7-1.4 1.1-2.3 1.5-.7.3-1.8.6-3.7.7-2.1.1-2.7.1-8.1.1s-6 0-8.1-.1c-1.9-.1-3-.4-3.7-.7-.9-.4-1.6-.8-2.3-1.5-.7-.7-1.1-1.4-1.5-2.3-.3-.7-.6-1.8-.7-3.7-.1-2.1-.1-2.8-.1-8.1s0-6 .1-8.1c.1-1.9.4-3 .7-3.7.4-.9.8-1.6 1.5-2.3.7-.7 1.4-1.1 2.3-1.5.7-.3 1.8-.6 3.7-.7 2.1-.1 2.8-.1 8.1-.1M20 0c-5.4 0-6.1 0-8.2.1-2.2.1-3.6.5-4.9.9-1.3.6-2.4 1.2-3.5 2.4C2.2 4.5 1.6 5.6 1 6.9.5 8.2.2 9.6.1 11.8 0 13.9 0 14.6 0 20c0 5.4 0 6.1.1 8.2.1 2.1.4 3.6.9 4.9.5 1.3 1.2 2.4 2.3 3.5 1.1 1.1 2.2 1.8 3.5 2.3 1.3.5 2.7.8 4.9.9 2.2.2 2.9.2 8.3.2s6.1 0 8.2-.1c2.1-.1 3.6-.4 4.9-.9 1.3-.5 2.4-1.2 3.5-2.3 1.1-1.1 1.8-2.2 2.3-3.5.5-1.3.8-2.7.9-4.9.2-2.2.2-2.9.2-8.3s0-6.1-.1-8.2c-.1-2.1-.4-3.6-.9-4.9-.5-1.3-1.2-2.4-2.3-3.5-1.1-1.1-2.2-1.8-3.5-2.3-1.3-.5-2.7-.8-4.9-.9C26.1 0 25.4 0 20 0z"></path><path fill="currentColor" d="M20 9.7C14.3 9.7 9.7 14.3 9.7 20S14.3 30.3 20 30.3 30.3 25.7 30.3 20 25.7 9.7 20 9.7zm0 17c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7z"></path><circle cx="30.7" cy="9.3" r="2.4" fill="currentColor"></circle></svg>
                        </a>
                        <a className='socialMediaIconContainer twitter' href="#" focusable="false" height="100%" role="img" width="100%">
                            <svg viewBox="0 0 40 32.5" className="icon twitterIcon" width="100%" height="100%"><path fill="currentColor" d="M38.9.6c-1.6.9-3.3 1.6-5.2 2C32.2 1 30.1 0 27.7 0c-4.5 0-8.2 3.7-8.2 8.2 0 .6.1 1.3.2 1.9-6.8-.4-12.9-3.6-16.9-8.6-.7 1.2-1.1 2.6-1.1 4.1 0 2.8 1.4 5.4 3.6 6.8-1.3 0-2.6-.4-3.7-1v.1c0 4 2.8 7.3 6.6 8-.7.2-1.4.3-2.2.3-.5 0-1 0-1.5-.1 1 3.3 4.1 5.6 7.7 5.7-2.9 2.2-6.4 3.5-10.2 3.5-.7 0-1.3 0-2-.1 3.6 2.3 7.9 3.7 12.6 3.7 15.1 0 23.3-12.5 23.3-23.3V8.1c1.6-1.2 3-2.6 4.1-4.2-1.5.7-3.1 1.1-4.7 1.3 1.7-1.1 3-2.7 3.6-4.6z"></path></svg>
                        </a>
                        <a className='socialMediaIconContainer kijijiCentral' href="#" focusable="false" height="100%" role="img" width="100%">
                            <svg viewBox="0 0 63.7 61.6" className="icon kijijiCentralIcon" width="100%" height="100%"><path fill="currentColor" d="M57.6 35.1c-2.1 0-4.1 1.1-5.2 2.9l-6.8-2.3c.7-3.2.2-6.5-1.3-9.4l5.6-3.8c1.1 1 2.6 1.6 4.1 1.6 3.4 0 6.1-2.7 6.1-6.1 0-3.4-2.7-6.1-6.1-6.1-3.4 0-6.1 2.7-6.1 6.1 0 .8.1 1.5.4 2.1L42.7 24c-2.3-2.7-5.4-4.4-8.9-4.8l.1-7.1c2.8-.7 4.7-3.1 4.7-6 0-3.4-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1c0 2.8 1.9 5.3 4.7 6l-.1 7c-5.7.5-10.4 4.5-11.9 9.8l-6.7-1.2c-.2-3.3-2.9-5.8-6.1-5.8C2.7 21.9 0 24.6 0 28s2.7 6.1 6.1 6.1c2.4 0 4.6-1.4 5.6-3.7l6.7 1.2c0 .4 0 .7-.1 1.1 0 4.4 2.1 8.3 5.3 10.8l-3.8 6.1c-3.2-1.1-6.7.6-7.8 3.8-.2.6-.3 1.3-.3 2 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-1.6-.6-3.2-1.8-4.3l3.8-6.1c1.9.9 3.9 1.4 6 1.4 5.6 0 10.4-3.3 12.5-8.1l6.8 2.3v.5c0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c.3-3.3-2.4-6-5.8-6M54 14.8c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.9 1.5-3.3 3.3-3.3M6.1 31.3c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3M18 58.8c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c-.1 1.8-1.5 3.3-3.3 3.3M29.1 6.1c0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3m3 37.6c-6 0-10.9-4.9-10.9-10.9s4.9-10.9 10.9-10.9S43 26.8 43 32.8s-4.9 10.9-10.9 10.9m25.5.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3"></path></svg>
                        </a>
                        <a className='socialMediaIconContainer youtube' href="#" focusable="false" height="100%" role="img" width="100%">
                            <svg viewBox="0 0 37.3 26.6" className="icon youtubeIcon" width="100%" height="100%"><path d="M1 1h35.3v24.6H1z"></path><path stroke='white' d="M34.8 3.4c-1-1.7-2-2-4.1-2.2-2.2-.1-7.5-.2-12.1-.2s-9.9.1-12 .2c-2.1.1-3.1.4-4.1 2.2C1.5 5.1 1 8.1 1 13.3s.5 8.2 1.5 9.9c1 1.7 2 2 4.1 2.2 2.1.1 7.4.2 12 .2s9.9-.1 12-.2c2.1-.1 3.1-.5 4.1-2.2 1-1.7 1.5-4.7 1.5-9.9.1-5.2-.5-8.2-1.4-9.9z"></path><path fill='white' d="M15.1 6.8v13l10-6.5z"></path></svg>
                        </a>
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

