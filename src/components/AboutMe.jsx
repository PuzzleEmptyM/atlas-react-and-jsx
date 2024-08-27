import React from 'react'
import profileImg from "../assets/profile.png"

const AboutMe = () => {
  return (
    <div className='about-me'>
      <img src={profileImg} alt='profile-picture' />
      <p>My name is Michael Moser, but I'm better known as Puzzle. As a Trimester 5 Full Stack Developer student at Atlas School, I've benefited from a hands-on, project-based curriculum that covers front-end and back-end technologies like JavaScript, HTML, Python, and C. Outside the classroom, I've developed practical skills through projects such as building a website for my brother (SamuelClaus.com) and optimizing AI-generated code for Scale AI.<p/>
      <p></p>
      After I graduate, I would love to be hired onto a team that develops accessible, groundbreaking technology. Having many disabilities in my family, I want to be a part of a cause that bridges the gap between advanced technology and everyday accessibility.</p>
    </div>
  )
}

export default AboutMe
