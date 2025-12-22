import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="name">
                    <NavLink to="/">Luke Zeng</NavLink>
                </div>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/cv"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    CV
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;

