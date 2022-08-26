import React from 'react';
export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <p className='resumeTag'>
        <a href="/resume/Liam_McCarthy_resume.pdf" download>Download Here</a>
        </p>
        <h2>Proficiencies</h2>
        <div>
        <ul className='card profies' style={{ width: "18rem"}} >
            <li>JavaScript</li>
            <li>HTML and CSS</li>
            <li>Nodejs/Express</li>
            <li>React</li>
            <li>mySQl/noSQL-MongoDB</li>
            <li>ORMs/ORDs/GraphQL</li>
            <li>Test Driven Developmen</li>
            <li>Git workflow</li>
            <li>REST APIs</li>
        </ul>
        </div>
      </div>
    );
  }