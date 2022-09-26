import React from 'react';
import '../style.css';
export default function About() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>About Me</h1>
            <div className='card'>
            <p style={{fontWeight: "lighter"}} className='card-body about'>
            Full stack web developer with a degree in economics. I recently earned a certificate
             in full stack  web development from a bootcamp by the University of California - Berkeley.  
             As a graduate of this bootcamp, I have over a hundred hours of experience building full-stack 
             applications both individually and in teams.  Beyond Javascript and HTML5/CSS, I am experienced in React, 
             mySQL, mongoDB, REST APIs, ORMs, git workflow, and more. I am a quick learner with strong analytical skills 
             as well as a deeply creative side.  I recently worked with a team of three to develop a full stack application
              that allows the user to create appointments at a mock hospital in order to make appointment 
              creation and cancellation much more intuitive for both the patient and the hospital.  I’m excited to bring 
              my skills and creativity to a forward thinking team to provide better online experiences.

            </p>
            </div>
        </div>
    );
}