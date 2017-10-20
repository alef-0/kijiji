import React, { Component } from 'react';

const ItemTitleWrapper = () => (
    <div className="itemTitleWrapper">
        <div className="mainColumn" >
            <div>
                <h1 className="title" >NEW CRITICAL CYCLES MEN'S BIKE 43 CM XS</h1>
                <div className="priceContainer">
                                    <span className="currentPrice">
                                        <span value="17800">$178.00</span>
                                    </span>
                </div>
            </div>
        </div>
        <div className="sidebarColumn">
            <div className="itemMeta">
                <div className="datePosted" >Posted 16 minutes ago</div>
                <div className="locationContainer">
                    <svg viewBox="0 0 17.19 23.76" className="icon locationPin" width="100%" height="100%">
                        <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38" d="M11.69 19.52c2.34-3 4.81-7.16 4.81-10.93a7.9 7.9 0 1 0-15.81 0c0 5.68 7.9 14.47 7.9 14.47"></path>
                        <circle cx="8.59" cy="8.53" r="3.57" fill="none" stroke="inherit" strokeMiterlimit="10" strokeWidth="1.47"></circle>
                    </svg>
                    <span className="address">Toronto, ON M1W3G4</span>
                    <a className="mapLink" href="#" >(View Map)</a></div></div>
        </div>
    </div>
);

export default ItemTitleWrapper;