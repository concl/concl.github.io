
import React from 'react';

import "./Page.css";
import "./HomePage.css";
import mandelbrotIcon from '../assets/mandelbrot_icon.png';

import { homePageText } from "../data/SiteData";

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
