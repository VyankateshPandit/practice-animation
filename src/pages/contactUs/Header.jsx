import React from "react";
import "./Header.css";
import { div } from "framer-motion/client";

function Header(){
    return (
        <div className="header">
            <div className="head-text">
                <h1>Need Help? We’re Here for You.</h1>
                <p>Talk to a counselor, ask a question, or find your nearest EEC center – all in one place.</p>
            </div>
            <div className="content">
                <div className="email">
                    <div className="email-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M18.3334 4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331H3.33341C2.41675 3.33331 1.66675 4.08331 1.66675 4.99998M18.3334 4.99998V15C18.3334 15.9166 17.5834 16.6666 16.6667 16.6666H3.33341C2.41675 16.6666 1.66675 15.9166 1.66675 15V4.99998M18.3334 4.99998L10.0001 10.8333L1.66675 4.99998" stroke="#2C74B9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2>Email</h2>
                    <p>Our friendly team is here to help.</p>
                    <h3>info@eecglobal.com</h3>
                </div>
                <div className="office">
                    <div className="office-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.5 8.33334C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33334C2.5 6.34422 3.29018 4.43656 4.6967 3.03004C6.10322 1.62352 8.01088 0.833344 10 0.833344C11.9891 0.833344 13.8968 1.62352 15.3033 3.03004C16.7098 4.43656 17.5 6.34422 17.5 8.33334Z" stroke="#1798A6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.61929 5.83334 7.5 6.95263 7.5 8.33334C7.5 9.71405 8.61929 10.8333 10 10.8333Z" stroke="#1798A6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2>Office</h2>
                    <p>Come say hello at our office HQ.</p>
                    <h3>100 Smith Street Collingwood VIC 3066 AU</h3>
                </div>
                <div className="phone">
                    <div className="phone-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_4007_2813)">
                                <path d="M18.3334 14.1V16.6C18.3344 16.8321 18.2868 17.0618 18.1939 17.2745C18.1009 17.4871 17.9645 17.678 17.7935 17.8349C17.6225 17.9918 17.4206 18.1112 17.2007 18.1856C16.9809 18.2599 16.7479 18.2876 16.5168 18.2667C13.9525 17.988 11.4893 17.1118 9.32511 15.7083C7.31163 14.4289 5.60455 12.7218 4.32511 10.7083C2.91676 8.53433 2.04031 6.05916 1.76677 3.48333C1.74595 3.25288 1.77334 3.02063 1.84719 2.80135C1.92105 2.58207 2.03975 2.38057 2.19575 2.20968C2.35174 2.03879 2.54161 1.90225 2.75327 1.80876C2.96492 1.71527 3.19372 1.66688 3.42511 1.66666H5.92511C6.32953 1.66268 6.7216 1.80589 7.02824 2.0696C7.33488 2.33332 7.53517 2.69953 7.59177 3.09999C7.69729 3.90005 7.89298 4.6856 8.17511 5.44166C8.28723 5.73993 8.31149 6.06409 8.24503 6.37573C8.17857 6.68737 8.02416 6.97342 7.80011 7.19999L6.74177 8.25833C7.92807 10.3446 9.65549 12.072 11.7418 13.2583L12.8001 12.2C13.0267 11.9759 13.3127 11.8215 13.6244 11.7551C13.936 11.6886 14.2602 11.7129 14.5584 11.825C15.3145 12.1071 16.1001 12.3028 16.9001 12.4083C17.3049 12.4654 17.6746 12.6693 17.9389 12.9812C18.2032 13.2931 18.3436 13.6913 18.3334 14.1Z" stroke="#783294" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4007_2813">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2>Phone</h2>
                    <p>Mon-Fri from 8am to 5pm.</p>
                    <h3>+1 (555) 000-0000</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;