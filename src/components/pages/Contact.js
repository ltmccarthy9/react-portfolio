import React from 'react';
export default function Contact() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Contact Me</h1>
        <div className='card contactCard' style={{ marginLeft: "35%", marginRight: "35%"}}>
        <form>
        <div class="mb-3">
                <label for="examplename" className="form-label">Name</label>
                <input type="name" className="form-control" id="examplename" aria-describedby="nameHelp"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
                <label for="message" className="form-label">Message</label>
                <input type="message" className="form-control" id="message"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        <div>
            <div style={{marginLeft: "35%", marginRight: "35%", width: "30%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{width: "150px", marginRight: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2px"}}>
            <h2 className="linked" style={{padding: "2px", textAlign: "center", fontWeight: "lighter"}}>LinkedIn</h2>
        </div>
        <div style={{width: "150px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h2 className="linked" style={{padding: "2px", textAlign: "center", fontWeight: "lighter"}}>Github</h2>
        </div>
            </div>
        </div>
      </div>
    );
  }
  