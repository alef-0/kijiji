import React, { Component } from 'react';

const ItemInfoSidebar = (props) => (
    <div className='itemInfoSidebar'>
        <div className='sellerInfo'>
            <div className='wrapper' >
                <div className='posterContainer'>
                    <header className='header' >About the Poster</header>
                    <div>
                        <div className='main'>
                            <div className='profileItemContainer' >
                                <svg viewBox='0 0 18.14 18.68' className='icon profileItemIcon' width='100%' height='100%'>
                                    <path fill='none' stroke='#adb6b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' d='M7.28 12.07l-3.81.78A3.59 3.59 0 0 0 .6 16.34v1.71'></path>
                                    <path fill='none' stroke='#adb6b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' d='M11.67 12.24l3 .61a3.59 3.59 0 0 1 2.87 3.49v1.71H.6v-1.71a3.59 3.59 0 0 1 2.87-3.49l3.81-.78v-2a3.84 3.84 0 0 1-2.21-3.5V4.45A3.85 3.85 0 0 1 8.89.6h.35a3.85 3.85 0 0 1 3.83 3.85v2.12a3.84 3.84 0 0 1-2.24 3.49'></path>
                                    <path fill='none' stroke='#adb6b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' d='M7.45 14.52h3.26c1 0 1.46-1 1.66-1.64'></path>
                                </svg>
                                <span className='profileItem'> Display Name <strong >{props.nickname}</strong>
                                                    </span>
                            </div>
                            {
                                props.verified
                                    ? <div className='profileItemContainer vme-verified-status' >
                                        <span className='vme-verified-status__icon'></span>
                                        <span className='profileItem vme-verified-status__text'><strong>Verified</strong></span>
                                    </div>
                                    : null
                            }
                            <div className='profileItemContainer' >
                                <svg viewBox='0 0 19.43 19.64' className='icon profileItemIcon' width='100%' height='100%'>
                                    <path fill='none' stroke='#adb6b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' d='M15.72 1.7a3.16 3.16 0 1 0-2.41 5.84M17 6.42a3.15 3.15 0 0 0 .59-2'></path>
                                    <path fill='none' stroke='#adb6b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' d='M10.11 3.38a2.47 2.47 0 0 0-.37.1m0 0a2.47 2.47 0 0 0-.95.59l-7.46 7.46a2.47 2.47 0 0 0 0 3.49l3.3 3.3a2.47 2.47 0 0 0 3.49 0l7.46-7.5a2.47 2.47 0 0 0 .71-2l-.47-5-4.33-.4M6.83 15.9l3.3-3.3m-4.84 1.76l3.3-3.3m-4.87 1.76l3.3-3.3'></path>
                                    <circle cx='12.78' cy='7.33' r='1.44' fill='none' stroke='#adb6b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' transform='rotate(-44.99 12.42 7.577)'></circle>
                                    <path fill='none' stroke='#adb6b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.2' d='M17.59 4.4l-.13-2.26A1.47 1.47 0 0 1 18.84.6'></path>
                                </svg>
                                <span className='profileItem' >Owner</span>
                            </div>
                            <div className='profileItemContainer'>
                                <svg viewBox='0 0 21 12.8' className='icon profileItemIcon' width='100%' height='100%'>
                                    <path fill='inherit' d='M15 .038c-.5 0-.8.4-.8.9s.4.8.9.8h3l-6.4 6.4-3.3-3.3c-.2-.2-.5-.3-.8-.3-.2 0-.4.1-.5.2l-6.8 6.5c-.4.3-.4.8-.1 1.2.3.4.8.4 1.2.1l.1-.1 6.2-5.9 3.2 3.2c.2.4.7.6 1.1.4.1-.1.2-.1.3-.2l7-7v3.1c0 .5.4.9.8.9.5 0 .9-.4.9-.8v-5.1c0-.5-.4-.8-.8-.8H15v-.2z'></path>
                                </svg>
                                <span className='profileItem' >On Kijiji since <strong>July 2015</strong></span>
                            </div>
                            <div className='profileItemContainer'>
                                <svg viewBox='0 0 18.809 18.096' className='icon profileItemIcon' width='100%' height='100%'>
                                    <path fill='none' stroke='#6a7072' d='M10.41 14.584c4.853 0 7.8-2.467 7.8-6.56S14.26.6 9.403.6C4.55.6.6 3.93.6 8.024c0 2.023.69 2.71 2.07 3.995l-.14 5.476.665-.047c1.75-.103 3.162-1.665 3.983-2.21'></path>
                                    <path fill='inherit' d='M5.893 6.748c-.61 0-1.11.5-1.11 1.09s.5 1.09 1.11 1.09 1.11-.498 1.11-1.09-.5-1.09-1.11-1.09zM9.404 6.748c-.61 0-1.108.5-1.108 1.09s.498 1.09 1.108 1.09c.61 0 1.11-.498 1.11-1.09s-.5-1.09-1.11-1.09zM12.916 6.748c-.61 0-1.11.5-1.11 1.09s.5 1.09 1.11 1.09 1.108-.498 1.108-1.09-.5-1.09-1.108-1.09z'></path>
                                </svg>
                                <span className='profileItem' >Replies within&nbsp;<span className='responseTimeContainer'>
                                                            <span className='responseTime'>two hours</span>
                                                            <span className=''><span className='infoCircle'></span>
                                                            </span>
                                                        </span>
                                                        </span>
                            </div>

                            <div>
                                                        <span className='profileItem fullWidthProfileItem'>
                                                        <a className='profileLink profileLinkLoggedIn' href='#' ><strong>View poster's other ads</strong></a>
                                                        <svg viewBox='0 0 8.715 15.43' className='icon chevron' width='100%' height='100%'>
                                                            <path fill='none' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2' d='M1 14.43L7.715 7.715 1 1'></path>
                                                        </svg>
                                                        </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='r2s' >
                    <h3 className='r2sHeading'>
                        Contact Retailer
                        <button className='button button__primary button__medium'>
                            Contact Retailer
                            <svg viewBox='0 0 10 5.6' className='icon toggleArrow' width='100%' height='100%'>
                                <path fill='inherit' d='M5 5.6c-.2 0-.3-.1-.4-.2L.2 1C0 .8 0 .4.2.2s.6-.2.8 0l4 4 4-4c.2-.2.6-.2.8 0s.2.6 0 .8L5.4 5.4c-.1.1-.2.2-.4.2z'></path>
                            </svg>
                        </button>
                    </h3>
                    <div className='r2sForm'>
                        <form autoComplete='off' className='form' >
                            <div className='field'>
                                <div className='field'>
                                    <input
                                        type='text'
                                        maxLength='100'
                                        placeholder='Your Name'
                                        value={props.name}
                                        className='input'
                                        disabled/>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='field'>
                                    <input
                                        type='email'
                                        maxLength='128'
                                        placeholder='Your Email'
                                        value={props.email}
                                        className='input'
                                        disabled/>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='field'>
                                                            <textarea
                                                                maxLength='1024'
                                                                placeholder='Your Message'
                                                                rows='3'
                                                                name='r2sForm.message'
                                                                className='input'>
                                                                Hi, I'm interested! Please contact me if this is still available.
                                                            </textarea>
                                </div>
                            </div>
                            <div className='fieldWithSpace'>
                                <div className='field'>
                                    <input
                                        type='checkbox'
                                        id='sendCopyToSender'
                                        name='r2sForm.sendCopyToSender'
                                        value=''
                                        className='input'/>
                                    <label
                                        className='label'
                                        htmlFor='sendCopyToSender'>Send me a copy of email</label>
                                </div>
                            </div>
                            <div className='fieldWithSpace'>
                                <button
                                    type='submit'
                                    className='submitButton button button__primary button__medium'>Send Email</button>
                            </div>
                            <div className='fieldWithSpace'>
                                <div className='recaptcha'>
                                    <div>
                                        <div className='grecaptcha-badge'>
                                            <div className='grecaptcha-logo'></div>
                                            <div className='grecaptcha-error'></div>
                                            <textarea
                                                name='g-recaptcha-response'
                                                className='g-recaptcha-response'>
                                                                        </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p className='finePrint'>
                            Kijiji filters emails for security reasons. By clicking on 'Send Email', you consent to this action in accordance with our
                            <a href='https://help.kijiji.ca/helpdesk/policies/kijiji-terms-of-use' target='_blank' rel='nofollow noopener noreferrer' data-reactid='192'>Terms of Use
                            </a> and
                            <a href='https://help.kijiji.ca/helpdesk/policies/kijiji-privacy-policy' target='_blank' rel='nofollow noopener noreferrer' data-reactid='195'>Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ItemInfoSidebar;

