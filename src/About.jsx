import React from 'react';
import './editabout.css'; 
import headshot from "./about_headshot.png";
import Header from './Header.jsx'

function About(){
    return (
        <div className = "about-container">
            <Header />
             <div className = "animation">
                <img src={headshot} alt="headshot" className = "headshot"/>
                    <div className = "about-text">
                        <h3>About Me</h3>
                            <div className = "body-text">
                                <p>Hi! My name is Krishna Desai. Thanks for visiting my little corner of the internet.
                                I am currently working as a software engineer and embracing adulthood with open arms (to the best of my ability &#128513;). </p>
                                <p>I began my exploration into tech when I coded my first website to display my photography portfolio in high school; my
                                passion for coding and computer science grew from here! I decided to pursue my interest in computer science and enroll at Rutgers University.
                                I recently graduated in May 2024 with my Bachelor of Science in Computer Science and began working full time as a software engineer.
                                </p>
                                <p>Over the past few years, I've garnered several skills. Here's a breakdown, but I'm always learning more:</p> 
                                <div className = "skills">
                                    <ul>
                                        <li>HTML, CSS</li>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>C#</li>
                                    </ul>
                                    <ul>
                                        <li>Scripting</li>
                                        <li>Documentation</li>
                                        <li>Design</li>
                                        <li>Debugging</li>
                                    </ul>
                                </div>
                                <div className = "skills2">
                                    <ul>
                                        <li>Bitbucket</li>
                                        <li>Jenkins</li>
                                        <li>Artifactory</li>
                                        <li>Jira</li>
                                        <li>Confluence</li>
                                    </ul>
                                    <ul>
                                        <li>Adobe Photoshop</li>
                                        <li>Adobe Lightroom</li>
                                        <li>Canva</li>
                                        <li>Procreate</li>
                                        <li>MS Suite</li>
                                    </ul>
                                </div>
                                <p>Aside from tech, I've been learning the piano and more about design. I've also been
                                    binging some sitcoms! Here are my recs:
                                </p>
                                <div className = "skills">
                                    <ul>
                                        <li>The Mindy Project</li>
                                        <li>Bridgerton</li>
                                        <li>The Derry Girls</li>
                                        <li>Grace and Frankie</li>
                                    </ul>   
                                </div>
                                <p>I am also a major foodie, wannabe world traveler, and amatuer photographer.
                                    Bear with me as I update this website with new skills, updates, and projects.
                                    Thanks for visiting, and come again soon.
                                </p>                                                           
                            </div>
                    </div>
             </div>       
        </div>

    );
}

export default About; 