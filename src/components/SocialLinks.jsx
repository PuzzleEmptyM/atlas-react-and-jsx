import React from "react"
import linkedinImg from '../assets/linkedin.svg'
import githubImg from '../assets/github.svg'

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/puzzlemoser/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinImg} alt="linkedin-logo" />
      </a>
      <a href="https://github.com/PuzzleEmptyM" target="_blank" rel="noopener noreferrer">
        <img src={githubImg} alt="github-logo" />
      </a>
    </div>
  );
};

export default SocialLinks;
