import React from 'react';
import resume from './pictures/res.png';

export default function Resume() {
    return (
      <div style={{alignItems: "center", justifyContent: "center"}}>
        <h1 style={{textAlign: "center"}}>Resume</h1>
        <p style={{textAlign: "center"}} className='resumeTag'>
        <a href="/resume/Liam_McCarthy.pdf" download>Download Here</a>
        </p>
        <div style={{textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img style={{borderStyle: "solid", height: "900px", width: "700px"}}src={resume}/>
        </div>
      </div>
    );
  }