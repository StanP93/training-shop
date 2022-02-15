import React from 'react';
import woman from '../../images/subscribe-woman.png';
import man from '../../images/subscribe-man.png';
import classes from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={classes.subscribe}>
        <img src={woman} alt="woman" />
        <img src={man} alt="man" />
        <div className={classes.subscribe_block}>
            <p>Special Offer</p>
            <h2>Subscribe And <span style={{color: '#E91E63'}}>Get 10% Off</span></h2>
            <input type="email" name="" id="" placeholder='Enter your email'/>
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe