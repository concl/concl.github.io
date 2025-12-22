
import React from 'react';

import "./Page.css";
import "./HomePage.css";

import { homePageText } from "../data/SiteData";

const mandelbrotIcon = "/public/mandelbrot_icon.png";

function HomePage() {
    
    return (
        <>
            <div className="Page">
                {homePageText.map( (paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <div>
                    <img className="HomeImage" src={mandelbrotIcon} alt="mandelbrot_icon" />
                </div>
            </div>
        </>
    );

}



export default HomePage;
