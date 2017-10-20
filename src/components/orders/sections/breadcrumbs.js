import React, { Component } from 'react';

const Breadcrumbs = () => (
    <div className="breadcrumbs">
        <div className="crumbWrapper">
            <button className="crumbButton">•••</button>
            <ul className="crumbList">
                <li className="crumbItem"><a className="crumbLink" href="#">Ontario</a></li>
                <li className="crumbItem"><a className="crumbLink" href="#">Toronto (GTA)</a></li>
                <li className="crumbItem"><a className="crumbLink" href="#">City of Toronto</a></li>
                <li className="crumbItem"><a className="crumbLink" href="#">buy and sell</a></li>
                <li className="crumbItem"><a className="crumbLink" href="#">sporting goods, exercise</a></li>
                <li className="crumbItem"><a className="crumbLink" href="#">other in City of Toronto</a></li>
                <li className="currentCrumb">Ad ID<span>899102</span></li>
            </ul>
        </div>
    </div>
);

export default Breadcrumbs;