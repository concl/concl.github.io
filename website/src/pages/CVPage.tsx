
import React from 'react';

import "./Page.css";
import "./CVPage.css";

function CVPage() {
    
    return (
        <>
            <div className="Page">
                <h2>CV</h2>
                <p>
                    Experience, education, and skills.
                </p>
                <hr />   
                <div>
                    <h3>Experience</h3>
                    <div className="Entry">
                        <h4>Undergraduate Researcher | UCLA | Oct 2025 - Present</h4>
                        <p>
                            Helped organize a bioinformatics competition for chromatin state prediction directly from sequence.
                        </p>
                    </div>

                    <div className="Entry">
                        <h4>Technical Advisor | Scale AI | Dec 2024 - Dec 2025</h4>
                        <p>
                            Supervised the fine-tuning of Large Language Models for reasoning tasks. Wrote blogs about new AI technology.
                        </p>
                    </div>

                    <div className="Entry">
                        <h4>Officer | ACM at UCLA | Nov 2024 - Present</h4>
                        <p>
                            Lead the development of a project creating VLMs from scratch.
                            Co-led a team working on tertiary structure prediction of RNA molecules (RNA folding) solely from the sequence with AlphaFold-like methods.
                            Used text embedding models and LLMs to predict students' misconceptions in mathematics questions.
                        </p>
                    </div>
                </div>

                <div>
                    <h3>Education</h3>
                    <div className="Entry">
                        <h4>University of California, Los Angeles | Sep 2024 - Jun 2028 (Expected)</h4>
                        <p>
                            Bachelor of Science in Mathematics of Computation.
                            Relevant Coursework: Data Structures and Algorithms, Discrete Mathematics, Linear Algebra, Probability and Statistics, Differential Equations, Multivariable Calculus.
                        </p>
                    </div>  
                </div>

                <div>
                    <h3>Skills</h3>
                    <ul>
                        <li>Proficient in Python, C++, and Rust</li>
                        <li>Proficient in Data Structures and Algorithms</li>
                        <li>Experienced with PyTorch</li>
                        <li>Experienced with applying and training Transformer models</li>
                        <li>Experienced in game development in Godot</li>
                        <li>Experienced in 3D modeling in Blender</li>
                    </ul>
                </div>
                <hr />
            </div>
        </>
    );

}

export default CVPage;