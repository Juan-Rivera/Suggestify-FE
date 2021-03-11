import React from "react";

const DashNav = props => {

    return (
        <nav className="dashNav">
            <a>My Profile</a>
            <span>|</span>
            <a href='/dashboard/search'>Search Songs</a>
            <span>|</span>
            <a href={`/dashboard/savedSongs`}>My Songs</a>
            <span>|</span>
            <a>Sign Out</a>
        </nav>
    )
}

export default DashNav;