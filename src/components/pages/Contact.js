import React from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/liam-mccarthy-b06b9a218/");
    }

    const github = () => {
        window.open("https://github.com/ltmccarthy9");
    }

    var form = document.getElementById("myForm");
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_tiqpggf', 
            'template_9jtmf4q', 
            e.target, 
            'I2zMX8u1udcOtjqfy').then(res=>{
                console.log(res);
                alert("Your message was sent successfully.")
            }).catch(err=>{
                console.log(err)
                alert(err);
            });

            form.reset();
    }
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Contact Me</h1>
        <div className='card contactCard' style={{ marginLeft: "35%", marginRight: "35%"}}>
        <form id="myForm" onSubmit={sendEmail}>
        
                <label style={{fontWeight: 'bolder'}} htmlFor="examplename" className="form-label">Name</label>
                <input style={{marginBottom: '20px'}}type="name" name="name" className="form-control" id="examplename" aria-describedby="nameHelp"></input>
            
            
                <label style={{fontWeight: 'bolder'}} htmlFor="exampleInputEmail" className="form-label">Email address</label>
                <input style={{marginBottom: '20px'}} type="email" name="user_email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"></input>
            
            
                <label style={{fontWeight: 'bolder'}} htmlFor="message" className="form-label">Message</label>
                <textarea type="message" name="message" className="form-control" id="message" rows='4'/>
            
            <button style={{margin: "7px"}} type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        <div>
            <div style={{marginLeft: "35%", marginRight: "35%", width: "30%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{width: "150px", marginRight: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2px"}}>
            <h2 className="linked" onClick={linkedin} style={{padding: "2px", textAlign: "center", fontWeight: "lighter"}}>LinkedIn</h2>
        </div>
        <div style={{width: "150px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h2 className="linked" onClick={github} style={{padding: "2px", textAlign: "center", fontWeight: "lighter"}}>Github</h2>
        </div>
            </div>
        </div>
        
      </div>
    );
  }
  