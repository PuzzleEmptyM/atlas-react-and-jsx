import React from 'react'
import OpenLink from './OpenLink'
import CopyLink from './CopyLink'

const HelpfulResource = (props) => {
  return (
    <div className='helpful-resource' >
      <p>{props.label}</p>
      <OpenLink link={props.link} />
      <CopyLink link={props.link} />
    </div>
  )
}

export default HelpfulResource
