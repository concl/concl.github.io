
import React from 'react';

import { useState } from 'react';

import "./Page.css";
import "./HomePage.css";

import { homePageText } from "../data/SiteData";

import mandelbrotIcon from "../assets/images/mandelbrot_icon.png";

import MandelbrotViewer from '../components/mandelbrot_component/MandelbrotViewer';

import Skeleton from 'react-loading-skeleton';

function HomePage() {

    const [interactiveMandelbrot, setInteractiveMandelbrot] = useState(false);
    const [alternativeTextLoaded, setAlternativeTextLoaded] = useState("Do not click this image !");

    return (
        <>
            <div className="Page">
                {homePageText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

                <p className="small">{alternativeTextLoaded}</p>
                <div className= {"MandelbrotSection" + (interactiveMandelbrot ? " MandelbrotSectionAnimate" : "")}>
                    {
                        interactiveMandelbrot ?
                            <MandelbrotViewer /> :
                            <img
                                className="HomeImage"
                                src={mandelbrotIcon}
                                alt="mandelbrot_icon"
                                onClick={() => {
                                    setInteractiveMandelbrot(true);
                                    setAlternativeTextLoaded("Nooo ! You made it interactive !");
                                }}
                            />
                    }
                </div>
            </div>
        </>
    );

}



export default HomePage;
