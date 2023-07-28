import React, { useState } from 'react'
import './Home.css';
import profile from '../icons/profile.png';
import react from '../icons/react.png';
import CV from '../icons/myCV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { FaFacebookF, FaLinkedinIn, FaHeart,
    FaInstagram,FaTwitter,FaWindowRestore, FaArrowCircleUp} 
    from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {TiSocialLinkedin} from 'react-icons/ti';
import {GiPencilBrush} from 'react-icons/gi';
import {SiIndeed} from 'react-icons/si';

import { AiOutlineCode } from 'react-icons/ai';

const Home = () => {
    const [skill, setSkill]=useState(false);
    const [experience,setExperience]=useState(true);
    const [education,setEducation]=useState(false);

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [messege, setMessege]=useState("");
    
   
const function1 = ()=>{
    if(skill==false){
        setSkill(true);
        setExperience(false);
        setEducation(false);
    }
}
const function2 = ()=>{
    if(experience==false){
        setExperience(true);
        setSkill(false);
        setEducation(false);
}
}
const function3 = ()=>{
    if(education==false){
        setExperience(false);
        setSkill(false);
        setEducation(true);
}
}
  return (
    <>
    <div className="Main-box">
    <div id="header">
        <div className='container'>
            <nav>
                {/* <img src={mylogo} alt="logo" className='logo' /> */}
                <h3 className="profile-icon">Portfolio.</h3>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#contacts">Contact</a></li>
                </ul>
            </nav>
            <div className="home-contents">
            <div className='title-text'>
                <h5>Hello, I'm
                <br />
                <span>
                Rehmaan
                </span>
                <br />
                Front-end Developer
                </h5>
                <p>with knowledge in web design and development,aslo <br /> have expertise in graphic design</p>
                <a  href={CV} download className="download-button" >Download CV</a>
                {/* <button className="download-button">Download CV</button> */}

                <a href="https://www.linkedin.com/in/m-abdul-rehmaan-99aa37283">
                <TiSocialLinkedin className="social-icons-1" /></a>

                <a href="https://github.com/Rehmaankiani"> 
                 <FiGithub className="social-icons-1" /></a>

                <a href="https://www.facebook.com/rehman.raja.779?mibextid=ZbWKwL">
                <FaFacebookF className="social-icons-1" /></a>

                <a href="https://www.indeed.com/">
                <SiIndeed className="social-icons-1" /></a>
                
                
            </div>  
            <img className="react-logo" src={react} alt="react-image" />
            </div>
        </div>
            
    </div>

    {/* ----------------About----------------- */}
    <div id="about">
        <div className="container">
            <div className="row">
                <div className="img-col">
                    <img src={profile} alt="my-profile" className='profile-img' />
                </div>
                <div className="text-col">
                    <h1>About Me</h1>
                    <p className="my-about">As a front-end designer and wannabe React developer, I'm looking for an internship opportunity. My objectives are to participate in practical projects, work with smart people, and have a thorough understanding of the full software development lifecycle. by utilizing my current expertise in front-end design and learning new ones.</p>
                    <div className="about-titles">
                    <p className="links " onClick={function1}>Skills</p>
                    <p className="links" onClick={function2} >Experience</p>
                    <p className="links" onClick={function3}>Education</p>
                       
                    </div>
                   <div className="details-about-me">
                    {
                        skill &&(
                            <div className="about-contents ">
                            <ul>
                                <li><span>UI/UX</span><br></br>Designing Web interfaces</li>
                                <li><span>Web Development</span><br></br>Designing and building web app development</li>
                                <li><span>Graphic Designing</span><br></br>Designing Graphics, Logos, UIs etc.</li>
                            </ul>
                        </div>
                        )
                    }
                        {
                            experience &&(
                                <div className="about-contents">
                                <ul>
                                    <li><span>2023-current</span><br></br>Graduated & Looking for Internship</li>
                                    <li><span>2021-2023</span><br></br>Worked on Fiverr as a Graphic Designer</li>
                                    <li><span>2019-2020</span><br></br>Worked in a call center</li>
                                </ul>
                            </div>
                            )  
}
{
    education &&(
        <div className="about-contents">
                        <ul>
                            <li><span>2023</span><br></br>BS is Software Engeenering</li>
                            <li><span>Institute</span><br></br>The University of Lahore Islamabad Campus</li>
                            <li><span>2019</span><br></br>FSC in Engeenering</li>
                        </ul>
                    </div>
    )
}
</div>                
                </div>
            </div>
        </div>
    </div>

{/* -----------------------Services-------------------------- */}
<div id="services">
    <div className="container">
    <h1>Services</h1>
    <div className="my-services">
        <div className="box1">
        
        <AiOutlineCode className="small-icon" />
            <h2>Frontend Developer </h2>
            <span className="view-span">View More</span>
        </div>
        <div className="box1"> 
        <FaWindowRestore className="small-icon" />
            <h2>Ui/Ux <br/>Designer</h2>
            <span className="view-span">View More</span>
        </div>
        <div className="box1">
        <GiPencilBrush className="small-icon" />
            <h2>Graphic <br/>Designer</h2>
            <span className="view-span">View More</span>
        </div>
    </div>
    </div>
</div>

{/* -----------------------contacts-------------------------- */}
<div id="contacts">
    <div className="container">
    <div className="container-row">

        <div className="left-contct">
        <h1> Contact Me</h1> 
        <div>
        <FontAwesomeIcon className="contact-icons" icon={faPaperPlane} /> 
           <p>rehmaankiani@gmail.com </p>
        </div>
        <div>
        <FontAwesomeIcon className="contact-icons" icon={faSquarePhone} />
           <p>03407755917</p>
           </div>
           <div className="icon-list">
           <a href="https://instagram.com/rehmaanraja?igshid=MzNlNGNkZWQ4Mg=="> 
           <FaInstagram className="social-icons"/></a>

           <a href="https://twitter.com">
           <FaTwitter className="social-icons"/></a>

           <a href="https://www.linkedin.com/in/m-abdul-rehmaan-99aa37283">
           <FaLinkedinIn className="social-icons" /></a>

           <a href="https://www.facebook.com/rehman.raja.779?mibextid=ZbWKwL">
           <FaFacebookF className="social-icons"/></a>
           </div>
           
        </div>

      
            <form className="right-contct"
            action="https://formspree.io/f/mwkdpwyr" 
            method="POST">

            <input className="input-field"
            onChange={(event)=> setName(event.target.value)}
            value={name}
            name='name'
            type="text" placeholder='Your Name'
            required />
            <input className="input-field"
            onChange={(event)=> setEmail(event.target.value)}
            value={email}
            name='email'
            type="text" placeholder='Your Email' 
            required/>

            <textarea className="text-area"
            onChange={(event)=> setMessege(event.target.value)}
            value={messege}
            name='messege'
            placeholder=' Your Messege' cols="30" rows="5" 
            required />
            <button 
            className="submit">Submit</button>
            </form>

    </div>

    </div>
</div>

<div className="container">
<div className="scroll">
    <a href="#header">
<h2 >Scroll up</h2>
<FaArrowCircleUp className="arrow"/></a>
</div>
</div>

</div>
<div id="footer">
<div className="container-f">
        <h3>Copyright @ | All rights reserved..</h3>
</div>
    <div className="footer">
        <FaHeart/>
    </div>
</div>

    </>
  )
}

export default Home