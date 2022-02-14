import React from 'react';
import classes from './HeaderBar.module.css'

const HeaderBar = ({image,text}) => {
  return (
    <div className={classes.header_up_left_part}>
        <img src={image} alt='icon' />
        <p>{text}</p>
    </div>
  )
}

export default HeaderBar