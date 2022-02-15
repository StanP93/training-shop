import React from 'react'
import grayStar from '../../icons/graystar.svg';
import yellowStar from '../../icons/yellowstar.svg';
import classes from './Product.module.css';

const Product = ({image,text,price,rating}) => {
  return (
    <div className={classes.product}>
        <img className={classes.product_image} src={image} alt="women" />
        <p>{text}</p>
        <div className={classes.rating}>
            <span>$ {price}</span>
            <div>
                {rating >= 1 ? <img src={yellowStar} alt="rate" /> : <img src={grayStar} alt="rate" />}
                {rating >= 2 ? <img src={yellowStar} alt="rate" /> : <img src={grayStar} alt="rate" />}
                {rating >= 3 ? <img src={yellowStar} alt="rate" /> : <img src={grayStar} alt="rate" />}
                {rating >= 4 ? <img src={yellowStar} alt="rate" /> : <img src={grayStar} alt="rate" />}
                {rating >= 5 ? <img src={yellowStar} alt="rate" /> : <img src={grayStar} alt="rate" />}
            </div>
        </div>
    </div>
  )
}

export default Product