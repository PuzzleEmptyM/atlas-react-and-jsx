import React from 'react'
import openImg from '../assets/open.svg'

const OpenLink = (props) => {
  
  const whenClick = (event) => {
    event.preventDefault();
    window.open(props.link, "_blank");
  }
  
  
  return (
    <a href={props.link} onClick={whenClick}>
      <img src={openImg} alt='Open Link' />
    </a>
  );
};

export default OpenLink;
