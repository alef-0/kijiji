import React, { Component } from 'react';

const ItemActions = () => (
    <div className="itemActions">
        <div className="shareLinkBar shareLinkBar__redesign">
            <div className="shareLinkBarLabel shareLinkBarLabel__redesign">Share</div>
            <div className="shareLinkBarIcons shareLinkBarIcons__redesign">
                <a className="shareLink shareLink__facebook shareLink__redesign shareLink__facebookRedesign facebook" href="#" target="_blank">
                    <svg viewBox="0 0 39 39" className="icon shareLinkIcon shareLinkIcon__redesign shareLinkIcon__facebookRedesign" width="100%" height="100%">
                        <path fill="inherit" d="M36.85 0H2.15A2.15 2.15 0 0 0 0 2.15v34.7A2.15 2.15 0 0 0 2.15 39h18.68V23.9h-5.08V18h5.08v-4.33c0-5 3.08-7.78 7.57-7.78a41.7 41.7 0 0 1 4.54.23v5.26h-3.11c-2.44 0-2.92 1.16-2.92 2.87V18h5.83L32 23.9h-5.09V39h9.94A2.15 2.15 0 0 0 39 36.85V2.15A2.15 2.15 0 0 0 36.85 0z"></path>
                    </svg>
                </a>
                <a className="shareLink shareLink__facebookMessenger shareLink__redesign shareLink__facebookMessengerRedesign facebookMessenger" href="#" target="_blank">
                    <svg viewBox="0 0 322 324" className="icon shareLinkIcon shareLinkIcon__redesign shareLinkIcon__facebookMessengerRedesign" width="100%" height="100%">
                        <path fill="inherit" d="M162 6.035C76.398 6.035 7 70.69 7 150.445c0 45.447 22.54 85.982 57.762 112.46v55.06l52.78-29.147c14.085 3.922 29.003 6.04 44.458 6.04 85.602 0 155-64.65 155-144.41C317 70.69 247.602 6.034 162 6.034zm15.402 194.477l-39.47-42.365-77.02 42.365 84.72-90.502 40.438 42.365 76.05-42.365-84.718 90.502z"></path>
                    </svg>
                </a>
                <a className="shareLink shareLink__twitter shareLink__redesign shareLink__twitterRedesign twitter" href="#" target="_blank">
                    <svg viewBox="0 0 128 128" className="icon shareLinkIcon shareLinkIcon__redesign shareLinkIcon__twitterRedesign" width="100%" height="100%">
                        <g fillRule="evenodd" clipRule="evenodd">
                            <path fill="none" d="M0 0h128v128H0z"></path>
                            <path fill="inherit" d="M128 23.294c-4.703 2.142-9.767 3.59-15.08 4.237 5.425-3.327 9.588-8.605 11.55-14.89-5.08 3.08-10.692 5.323-16.688 6.525-4.778-5.23-11.608-8.498-19.166-8.498-14.493 0-26.25 12.057-26.25 26.927 0 2.11.224 4.16.675 6.133C41.218 42.6 21.87 31.892 8.91 15.582c-2.26 3.99-3.554 8.62-3.554 13.552 0 9.338 4.636 17.58 11.683 22.412-4.298-.13-8.356-1.356-11.902-3.36v.332c0 13.05 9.053 23.937 21.074 26.403-2.2.633-4.523.95-6.92.95-1.69 0-3.343-.163-4.944-.48 3.343 10.695 13.035 18.484 24.53 18.692-8.986 7.227-20.315 11.533-32.614 11.533-2.12 0-4.215-.123-6.266-.37 11.623 7.627 25.432 12.088 40.255 12.088 48.31 0 74.717-41.026 74.717-76.612 0-1.17-.023-2.34-.068-3.49 5.134-3.797 9.59-8.535 13.098-13.936"></path>
                        </g>
                    </svg>
                </a>
                <a className="shareLink shareLink__pinterest shareLink__redesign shareLink__pinterestRedesign pinterest" href="#" target="_blank">
                    <svg viewBox="0 0 40 40" className="icon shareLinkIcon shareLinkIcon__redesign shareLinkIcon__pinterestRedesign" width="100%" height="100%">
                        <path fill="inherit" d="M20 0a20 20 0 0 0-7.29 38.62 19.17 19.17 0 0 1 .07-5.74c.36-1.56 2.35-9.94 2.35-9.94a7.22 7.22 0 0 1-.6-3c0-2.78 1.61-4.86 3.62-4.86a2.51 2.51 0 0 1 2.53 2.82c0 1.72-1.09 4.28-1.66 6.66a2.9 2.9 0 0 0 3 3.61c3.55 0 6.29-3.75 6.29-9.16 0-4.79-3.44-8.14-8.35-8.14a8.66 8.66 0 0 0-9 8.68 7.78 7.78 0 0 0 1.49 4.56.6.6 0 0 1 .14.57c-.15.63-.49 2-.56 2.27s-.29.44-.67.27c-2.5-1.16-4.06-4.81-4.06-7.75 0-6.31 4.58-12.1 13.21-12.1 6.94 0 12.33 4.94 12.33 11.55 0 6.89-4.35 12.44-10.38 12.44a5.35 5.35 0 0 1-4.58-2.3l-1.25 4.75a22.36 22.36 0 0 1-2.49 5.24A20 20 0 1 0 20 0z"></path>
                    </svg>
                </a>
                <a className="shareLink shareLink__email shareLink__redesign shareLink__emailRedesign email" href="#" target="_blank">
                    <svg viewBox="0 0 17.25 12.94" className="icon shareLinkIcon shareLinkIcon__redesign shareLinkIcon__emailRedesign" width="100%" height="100%">
                        <path fill="inherit" d="M16 0H1.24A1.25 1.25 0 0 0 0 1.24V11.7a1.25 1.25 0 0 0 1.24 1.24H16a1.25 1.25 0 0 0 1.24-1.24V1.24A1.25 1.25 0 0 0 16 0zm0 11.69H1.25v-1L3.53 9.4a.63.63 0 1 0-.71-1l-1.57.9v-8H16z"></path>
                        <path fill="inherit" d="M14.7 8.26l-2.6-1.81L14 5.11a.63.63 0 0 0-.71-1L9.21 7A1 1 0 0 1 8 7L4 4.08a.63.63 0 1 0-.71 1L7.32 8a2.29 2.29 0 0 0 2.6 0L11 7.22l3 2.06a.63.63 0 0 0 .87-.16.63.63 0 0 0-.17-.86z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
);

export default ItemActions;