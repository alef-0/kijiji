'use strict';

import React from 'react';
import AlertPopup from '../../containers/common/alertPopup';
import ConfirmationPopup from "../../containers/common/confirmationPopup";

const Profile = (props) => {
    return (
        <div>
            <div className="fes-pagelet">
                <div>
                    <nav className="navBar">
                        <div className="navContainer">
                            <ul className="navTabsList">
                                <li className="tabListItem">
                                    <a className="tabLink" rel=" noopener noreferrer" href="#">My Ads</a>
                                </li>
                                <li className="tabListItem">
                                    <a className="tabLink" rel=" noopener noreferrer" href="#">Promote My Ads</a>
                                </li>
                                <li className="tabListItem">
                                    <a className="tabLink" rel=" noopener noreferrer" href="#">My Favourites</a>
                                </li>
                                <li className="tabListItem">
                                    <a className="tabLink" rel=" noopener noreferrer" href="#">My Orders</a>
                                </li>
                            </ul>
                            <div className="navAccountContainer">
                                <li className="tabListItem">
                                    <a className="tabLink tabLink-selected" rel=" noopener noreferrer" href="#">My Profile<span className="iconContainer"></span></a>
                                </li>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {props.alertPopupOpened && !props.verified ? <AlertPopup/> : null}
            {props.confirmationPopupOpened && props.verified ? <ConfirmationPopup/> : null}
            {props.children}
        </div>
    );
};

export default Profile;
