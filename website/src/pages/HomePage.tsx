
import React from 'react';

import "./Page.css";
import "./HomePage.css";
import mandlebrotIcon from '../assets/mandlebrot_icon.png';

function HomePage() {
    
    return (
        <>
            <div className="Page">
                <p>
                    Hi! I'm Luke, a developer specializing in software, machine learning, and design.
                    I'm passionate about game development and building creative projects that provide engaging experiences.
                    I love problem solving and continuously learning new things.
                </p>
                <p>
                    Currently, I'm a Mathematics of Computation student at UCLA, and I am expected to graduate in 2028.
                    Some activities that I am involved in include research in bioinformatics, being an officer for ACM at UCLA,
                    and competing on the ICPC programming team, where I qualified for the 2026 ICPC North American Championship.
                </p>
                <div>
                    <img className="HomeImage" src={mandlebrotIcon} alt="mandlebrot_icon" />
                </div>
            </div>
        </>
    );

}



export default HomePage;
