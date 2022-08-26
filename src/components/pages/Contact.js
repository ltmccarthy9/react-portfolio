import React from 'react';
export default function Contact() {
    return (
      <div>
        <h1 >Contact Me</h1>
        <div className='card contactCard'>
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
        <div className="projectCard card" style={{ width: "18rem"}}>
        <p className='card-body proj'>
            LinkedIn
        </p>
        </div>
        <div className="projectCard card" style={{ width: "18rem"}}>
        <p className='card-body proj'>
            Github
        </p>
        </div>
      </div>
    );
  }
  