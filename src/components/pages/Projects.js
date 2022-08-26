import React from 'react';
export default function Projects() {
    return (
        <div>
            <h1>My Projects</h1>
        <div className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                Appointment Manager 
            </p>
        </div>
        <div className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                E-commerce backend
            </p>
        </div>
        <div className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                Readme Generator 
            </p>
        </div>
        </div>
    )
}