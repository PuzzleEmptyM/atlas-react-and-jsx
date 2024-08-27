import React from 'react'
import copyImg from "../assets/copy.svg"

const CopyLink = (props) => {
  
  const whenClick = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(props.link)
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };
  
  
  return (
    <img 
    className='copy'
    src={copyImg}
    alt='Copy Link'
    onClick={whenClick}
    />
  );
};

export default CopyLink;
