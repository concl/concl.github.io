import "./Header.css"
import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="name"><a href="/">Luke</a></div>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/cv">CV</a>
            </nav>
        </header>
    );
}

export default Header;

