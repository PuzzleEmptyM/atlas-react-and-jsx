import React from 'react'

const OpenLink = (props) => {
  
  const whenClick = (event) => {
    event.preventDefault();
    window.open(props.link, "_blank");
  }
  
  
  return (
    <a href={props.link} onClick={whenClick}>
      <img src='/src/assets/open.svg' alt='Open Link' />
    </a>
  );
};

export default OpenLink;
