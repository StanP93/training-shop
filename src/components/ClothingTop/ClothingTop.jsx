import React from 'react';
import classes from './ClothingTop.module.css';

const ClothingTop = ({sex}) => {
  return (
    <div className={classes.title}>
            <h2>{sex}'s</h2>
            <ul>
              <li>NEW ARRIVALS</li>
              <li>SPECIALS</li>
              <li>BESTSELLERS</li>
              <li>MOST VIEWED</li>
              <li>FEATURED PRODUCTS</li>
            </ul>
          </div>
  )
}

export default ClothingTop