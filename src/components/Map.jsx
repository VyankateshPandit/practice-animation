import React from "react";
import "./Map.css";

function Map(){
    return (
        <div className="map-container">
            <div className="content">
                <h2>Find an EEC Center Near You</h2>
                <p>Use our smart map or city search to discover your closest IELTS training center.</p>
            </div>
            <div className="map">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#767676" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.4998 17.5L13.9165 13.9167" stroke="#767676" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="search" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Map;