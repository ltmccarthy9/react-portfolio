import React from 'react';
import '../style.css';
export default function About() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>About Me</h1>
            <div className='card'>
            <p style={{fontWeight: "lighter"}} className='card-body about'>
                My name is Liam McCarthy.  I am a full stack developer out of Chicago, IL.
            </p>
            </div>
        </div>
    );
}