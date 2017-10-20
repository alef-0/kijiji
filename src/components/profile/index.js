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
                                    <a className="tabLink tabLink-selected" rel=" noopener noreferrer" href="#">
                                        <div className='profileText'>My Profile</div>
                                        <div className="iconContainer">
                                            <svg viewBox="774.6 450.1 18 18" className='' width="100%" height="100%">
                                                <path fill="currentColor" d="M792.6 458.2c0-.3-.3-.5-.6-.5h-.7c-.3 0-.5-.2-.6-.5-.2-.6-.4-1.2-.7-1.7-.1-.2-.1-.6.1-.8l.5-.5c.2-.2.2-.6 0-.8-.4-.5-.8-.9-1.3-1.3-.2-.2-.6-.2-.8 0l-.5.5c-.2.2-.5.2-.8.1-.5-.3-1.1-.5-1.7-.7-.3-.1-.5-.3-.5-.6v-.7c0-.3-.2-.6-.6-.6h-1.8c-.3 0-.6.3-.6.6v.7c0 .3-.2.5-.5.6-.6.2-1.2.4-1.7.7-.2.1-.6.1-.8-.1l-.5-.5c-.2-.2-.6-.2-.8 0-.5.4-.9.8-1.3 1.3-.2.2-.2.6 0 .8l.5.5c.2.2.2.5.1.8-.3.5-.5 1.1-.7 1.7-.1.3-.3.5-.6.5h-.7c-.3 0-.6.2-.6.6v1.8c0 .3.3.6.6.6h.7c.3 0 .5.2.6.5.2.6.4 1.2.7 1.7.1.2.1.6-.1.8l-.5.5c-.2.2-.2.6 0 .8.4.5.8.9 1.3 1.3.2.2.6.2.8 0l.5-.5c.2-.2.5-.2.8-.1.5.3 1.1.5 1.7.7.3.1.5.3.5.6v.7c0 .3.2.6.6.6h1.8c.3 0 .6-.3.6-.6v-.7c0-.3.2-.5.5-.6.6-.2 1.2-.4 1.7-.7.2-.1.6-.1.8.1l.5.5c.2.2.6.2.8 0 .5-.4.9-.8 1.3-1.3.2-.2.2-.6 0-.8l-.5-.5c-.2-.2-.2-.5-.1-.8.3-.5.5-1.1.7-1.7.1-.3.3-.5.6-.5h.7c.3 0 .6-.2.6-.6v-.9-1zm-9 5.4c-2.5 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-1.9 4.4-4.4 4.4z"></path>
                                            </svg>
                                        </div>
                                    </a>
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
