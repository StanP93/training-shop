import React from 'react';
import classes from './TitleOptions.module.css';

const TitleOptions = ({image,title,description}) => {
  return (
    <div className={classes.options_part}>
        <img src={image} alt="test" />
        <div>
            <h3>{title}</h3>
            <p>{description}</p> 
        </div>
    </div>
  )
}

export default TitleOptions