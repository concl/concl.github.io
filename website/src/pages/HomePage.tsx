
import React from 'react';

import "./Page.css";
import "./HomePage.css";

function HomePage() {
    
    return (
        <>
            <div className="Page">
                <p>
                    Hi! I'm Luke, a developer specializing in software, machine learning, and design.
                    I'm passionate about game development and creating creative projects that provide engaging experiences.
                    I love problem solving and continuously learning new things.
                </p>
                <div>
                    <img className="HomeImage" src="/src/assets/mandlebrot_icon.png" alt="mandlebrot_icon" />
                </div>
            </div>
        </>
    );

}



export default HomePage;
