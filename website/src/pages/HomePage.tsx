
import React from 'react';

import { useState } from 'react';

import "./Page.css";
import "./HomePage.css";

import { homePageText } from "../data/SiteData";

import mandelbrotIcon from "../assets/images/mandelbrot_icon.png";

import MandelbrotViewer from '../components/mandelbrot_component/MandelbrotViewer';

function HomePage() {

    const [interactiveMandelbrot, setInteractiveMandelbrot] = useState(false);

    return (
        <>
            <div className="Page">
                {homePageText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

                <p className="small">Do not click this image !</p>
                <div className="MandelbrotSection">
                    {
                        interactiveMandelbrot ?
                            <MandelbrotViewer /> :
                            <img
                                className="HomeImage"
                                src={mandelbrotIcon}
                                alt="mandelbrot_icon"
                                onClick={() => setInteractiveMandelbrot(true)}
                            />
                    }
                </div>
            </div>
        </>
    );

}



export default HomePage;
