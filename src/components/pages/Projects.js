import React from 'react';
export default function Projects() {
    const appointmentManager = () => {
        window.open('https://github.com/laurasierra17/appointment-manager');
    }

    const ecommerce = () => {
        window.open('https://github.com/ltmccarthy9/e-commerce-backend');
    }

    const friends = () => {
        window.open('https://github.com/ltmccarthy9/friends-first');
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>My Projects</h1>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div onClick={appointmentManager} className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                Appointment Manager 
            </p>
        </div>
        <div onClick={ecommerce} className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                E-commerce backend 
            </p>
        </div>
        <div onClick={friends} className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                Friends First 
            </p>
        </div>
        </div>
        </div>
    )
}