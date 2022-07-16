import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="title">HP</div>
            <div className="search-bar">
                <input className="search" placeholder="Search" />
                <button className="search-button">Enter to search</button>
            </div>
            <ul>
                <Link to="/">
                    <li>Top Stories</li>
                </Link>
                <Link to="/new">
                    <li>New Stories</li>
                </Link>
            </ul>
        </div>
    );
}

export default Header;