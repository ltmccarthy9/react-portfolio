import React from 'react';
export default function Projects() {
    const appointmentManager = () => {
        window.open('https://github.com/laurasierra17/appointment-manager');
    }

    const elderWarfare = () => {
        window.open('https://github.com/lilyannekot/elder-warfare-kart-simulator');
    }

    const ecommerce = () => {
        window.open('https://github.com/ltmccarthy9/e-commerce-backend');
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
        <div onClick={elderWarfare} className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                Elder-Warfare(Game)
            </p>
        </div>
        <div onClick={ecommerce} className="projectCard card" style={{ width: "18rem"}}>
            <p className='card-body proj'>
                E-commerce backend 
            </p>
        </div>
        </div>
        </div>
    )
}