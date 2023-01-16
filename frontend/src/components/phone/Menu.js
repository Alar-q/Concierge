import React from 'react'

import Math from '../../icons/math.svg'
import Message from '../../icons/messages-3.svg'

export default function Menu(){
        return (
            <div className="menu">
                <div className="menu__wrapper">
                    <ul className="menu__links">
                        <li className="menu__li">
                            <div className="menu__icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.83325 11.6668H8.16659C10.4999 11.6668 11.6666 10.5002 11.6666 8.16683V5.8335C11.6666 3.50016 10.4999 2.3335 8.16659 2.3335H5.83325C3.49992 2.3335 2.33325 3.50016 2.33325 5.8335V8.16683C2.33325 10.5002 3.49992 11.6668 5.83325 11.6668Z"
                                        stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M19.8333 11.6668H22.1666C24.4999 11.6668 25.6666 10.5002 25.6666 8.16683V5.8335C25.6666 3.50016 24.4999 2.3335 22.1666 2.3335H19.8333C17.4999 2.3335 16.3333 3.50016 16.3333 5.8335V8.16683C16.3333 10.5002 17.4999 11.6668 19.8333 11.6668Z"
                                        stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M19.8333 25.6668H22.1666C24.4999 25.6668 25.6666 24.5002 25.6666 22.1668V19.8335C25.6666 17.5002 24.4999 16.3335 22.1666 16.3335H19.8333C17.4999 16.3335 16.3333 17.5002 16.3333 19.8335V22.1668C16.3333 24.5002 17.4999 25.6668 19.8333 25.6668Z"
                                        stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M5.83325 25.6668H8.16659C10.4999 25.6668 11.6666 24.5002 11.6666 22.1668V19.8335C11.6666 17.5002 10.4999 16.3335 8.16659 16.3335H5.83325C3.49992 16.3335 2.33325 17.5002 2.33325 19.8335V22.1668C2.33325 24.5002 3.49992 25.6668 5.83325 25.6668Z"
                                        stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </li>
                        <li className="menu__li">
                            <div className="menu__icon">
                                <Message width="28" height="28" viewBox="0 0 28 28" />
                            </div>
                        </li>
                        <li className="menu__li">
                            <div className="menu__icon">
                                <Math width="26" height="26" viewBox="0 0 26 26"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
}