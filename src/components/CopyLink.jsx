import React from 'react'

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
    src='/src/assets/copy.svg'
    alt='Copy Link'
    onClick={whenClick}
    />
  );
};

export default CopyLink;
