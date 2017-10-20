'use strict';

import React from 'react';
import SearchBar from '../header/searchBar';
import Breadcrumbs from './sections/breadcrumbs';
import ItemActions from './sections/itemActions';
import ItemTitleWrapper from './sections/itemTitleWrapper';
import ItemInfoSidebar from './sections/itemInfoSidebar';

const Orders = (props) => {
    return (
        <div>
            <div className='page'>
                <Breadcrumbs/>
                <ItemTitleWrapper/>

                <div className="itemInfo">
                    <ItemActions/>
                    <div className="heroImageContainer">
                        <div className="heroImage" style={{backgroundImage: `url(https://i.ebayimg.com/00/s/NTA0WDUwNA==/z/yBAAAOSwmhJZrTaD/$_27.JPG)`}}>
                            <button className="vliBadge">
                                <div className="badgeLabel" >3</div>
                                <svg viewBox="0 0 69.03 57.54" className="icon mediaIcon" width="100%" height="100%">
                                    <path fill="inherit" d="M62.8 13.56v3.9l2.17.19-2.53 35.71-47.8-3.46-4-.34-.27 3.9 55.09 4.04.5.03 3.07-43.49-6.23-.48z"></path>
                                    <path fill="inherit" d="M55.7 0H0v43.7h55.7zM3.8 39.8V3.9h48.1v35.9z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="showMoreWrapper">
                        <div className="showMoreChild">
                            <div className="descriptionContainer">
                                <h3 className="title"> Description</h3>
                                <div> <p> Very good condition , barely used <br/>
                                    Lock and air pump extra $10
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ItemInfoSidebar
                        name={props.name}
                        email={props.email}
                        nickname={props.nickname}
                        verified={props.verified}
                    />
                    <div className="itemCounterAndReport">
                        <button className="reportAdButton reportAdButton__centered">
                            <svg viewBox="0 0 11.54 15.82" className="icon stillFlag" width="100%" height="100%">
                                <path fill="inherit" d="M10.79.91a3.29 3.29 0 0 0-2.1.72 1.85 1.85 0 0 1-1.25.45 1.85 1.85 0 0 1-1.24-.45A3.29 3.29 0 0 0 4.1.91a3.3 3.3 0 0 0-2.1.72 3.14 3.14 0 0 1-.48.29V.76A.76.76 0 1 0 0 .76v14.3a.76.76 0 1 0 1.52 0V3.48a3.51 3.51 0 0 0 1.33-.63A1.85 1.85 0 0 1 4.1 2.4a1.84 1.84 0 0 1 1.25.45 3.3 3.3 0 0 0 2.1.72 3.29 3.29 0 0 0 2.1-.72 3 3 0 0 1 .51-.31v5.72a3.5 3.5 0 0 0-1.36.64 1.85 1.85 0 0 1-1.25.45 1.86 1.86 0 0 1-1.25-.44 4.14 4.14 0 0 0-.88-.5 3 3 0 0 0-.64-.17A2.31 2.31 0 0 0 3 8.51a.71.71 0 0 0-.2.85.75.75 0 0 0 1 .37 1.53 1.53 0 0 1 1.06 0 2.75 2.75 0 0 1 .59.34 3.3 3.3 0 0 0 2.1.72 3.29 3.29 0 0 0 2.1-.72 1.84 1.84 0 0 1 1.25-.45.74.74 0 0 0 .74-.74V1.66a.74.74 0 0 0-.85-.75z"></path>
                            </svg>
                            <span className="reportAdLabel">Report Ad</span></button>
                    </div>
                    <div className="sponsored">
                        <h4 className="heading">Sponsored Links</h4>
                        <div className="images" >
                            <div className="imageA">
                                <div className="banner banner__doNotCenter banner__isCollapsible banner__IMAGE_SPONSOR" >
                                </div>
                            </div>
                            <div className="imageB" >
                                <div className="banner banner__doNotCenter banner__isCollapsible banner__IMAGE_SPONSOR" >
                                </div>
                            </div>
                        </div>
                        <div className="adsense" >
                            <div >
                            </div>
                        </div>
                    </div>
                </div>
                <div className="safetyWarningContainer">
                    Take steps to make your Kijiji transactions as secure as possible by following our suggested safety tips.
                    <a href="https://help.kijiji.ca/helpdesk/safety/safety-at-kijiji" target="_blank" className="safetyLink">Read our Safety Tips</a>
                </div>
            </div>
        </div>
    );
};

export default Orders;
