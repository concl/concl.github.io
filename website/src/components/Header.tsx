import "./Header.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

    const [tag, setTag] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setTag("");
        } else {
            if (location.pathname.startsWith("/blog")) {
                setTag(" — Blog");
                return;
            } else if (location.pathname.startsWith("/cv")) {
                setTag(" — CV");
                return;
            }
            setTag(" — " + location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2));
        }
    }, [location]);
    
    return (
        <header className="header">
            <nav className="nav">
                <div className="name">
                    <NavLink to="/">Luke Zeng<div className="tag">{tag}</div></NavLink>
                </div>
                {/* <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    end
                >
                    Home
                </NavLink> */}
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Blog
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

